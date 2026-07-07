const mongoose = require("mongoose");
const PanditProfileSchema = require("../models/PanditProfile.js");
const { sendEmail } = require("./emailService.js");

const PanditProfile =
  mongoose.models.PanditProfile || mongoose.model("PanditProfile", PanditProfileSchema);

function toPlainBooking(booking) {
  return typeof booking?.toObject === "function" ? booking.toObject() : booking;
}

function getPanditProfileLookup(astrologerId) {
  const id = String(astrologerId || "").trim();
  if (!id) return [];

  const lookup = [{ email: id.toLowerCase() }];
  if (mongoose.Types.ObjectId.isValid(id)) {
    lookup.push({ _id: id }, { userId: id });
  }

  return lookup;
}

async function findPanditContact(booking, fallback = {}) {
  const item = toPlainBooking(booking);
  const fallbackEmail = String(fallback.panditEmail || "").trim();
  const fallbackName = String(fallback.panditName || item?.astrologerName || "").trim();

  if (fallbackEmail) {
    return {
      email: fallbackEmail,
      name: fallbackName,
    };
  }

  const lookup = getPanditProfileLookup(item?.astrologerId);
  if (!lookup.length || mongoose.connection.readyState !== 1) {
    return {
      email: "",
      name: fallbackName,
    };
  }

  const profile = await PanditProfile.findOne({ $or: lookup }).lean();

  return {
    email: profile?.email || "",
    name: fallbackName || profile?.displayName || item?.astrologerName || "",
  };
}

function emitPanditBookingRequest(req, booking) {
  const item = toPlainBooking(booking);
  const io = req.app.get && req.app.get("io");
  if (!io || !item?.astrologerId) return;

  const payload = {
    bookingId: item.bookingId,
    roomId: item.bookingId,
    astrologerId: item.astrologerId,
    astrologerName: item.astrologerName,
    customerName: item.customerName,
    customerEmail: item.customerEmail,
    concern: item.concern,
    mode: item.mode,
    durationMinutes: item.durationMinutes,
    status: item.status,
    bookedAt: item.createdAt?.toISOString?.() || item.createdAt || new Date().toISOString(),
  };

  io.to(`pandit:${item.astrologerId}`).emit("pandit:booking-request", payload);
}

function formatRequestDate(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return new Date().toLocaleString("en-IN");

  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendPanditBookingRequestEmail({ panditEmail, panditName, booking }) {
  const item = toPlainBooking(booking);
  const email = String(panditEmail || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    console.warn(
      `[pandit-email] No valid registered email found for pandit ${item.astrologerId || item.astrologerName || "(unknown)"} on booking ${item.bookingId || "(unknown)"}.`
    );
    return;
  }

  const mode = String(item.mode || "consultation").toLowerCase();
  const subject = `New ${mode} request from ${item.customerName || "a devotee"}`;
  const dashboardUrl = `${process.env.FRONTEND_URL || process.env.CLIENT_URL || "https://namandarshan-testing.vercel.app"}/pandit-dashboard`;
  const html = `
    <h2 style="color:#111827;margin-bottom:12px;">New ${escapeHtml(mode)} request</h2>
    <p>Namaste ${escapeHtml(panditName || item.astrologerName || "Pandit ji")},</p>
    <p>A devotee has requested a live ${escapeHtml(mode)} consultation with you.</p>
    <table style="width:100%;border-collapse:collapse;margin:20px 0;">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Devotee</td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(item.customerName || "Devotee")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Mode</td><td style="padding:8px;border:1px solid #eee;text-transform:capitalize;">${escapeHtml(mode)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Duration</td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(item.durationMinutes || 5)} minutes</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Request</td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(item.concern || `Live ${mode} consultation`)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Booking ID</td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(item.bookingId)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Time</td><td style="padding:8px;border:1px solid #eee;">${escapeHtml(formatRequestDate(item.createdAt))}</td></tr>
    </table>
    <p>
      <a href="${escapeHtml(dashboardUrl)}" style="display:inline-block;background:#111827;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:bold;">
        Open Pandit Dashboard
      </a>
    </p>
  `;

  try {
    await sendEmail(email, subject, html);
  } catch (error) {
    console.error(`[pandit-email] Failed to send request email to ${email}:`, error);
  }
}

async function notifyPanditBookingRequest(req, booking, fallback = {}) {
  try {
    emitPanditBookingRequest(req, booking);
  } catch (error) {
    console.error("[pandit-notification] Failed to emit request notification:", error);
  }

  try {
    const panditContact = await findPanditContact(booking, fallback);
    await sendPanditBookingRequestEmail({
      panditEmail: panditContact.email,
      panditName: panditContact.name,
      booking,
    });
  } catch (error) {
    console.error("[pandit-email] Failed to prepare request email:", error);
  }
}

module.exports = {
  emitPanditBookingRequest,
  notifyPanditBookingRequest,
  sendPanditBookingRequestEmail,
};
