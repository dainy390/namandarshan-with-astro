const express = require("express");
const mongoose = require("mongoose");
const BookingSchema = require("../models/Booking.js");
const { readAuthSession } = require("../middleware/auth.js");

const router = express.Router();
const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

const RANGE_DAYS = {
  "7d": 7,
  "30d": 30,
  "90d": 90,
};

const dateKeyFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function asNumber(value) {
  const amount = Number(value);
  return Number.isFinite(amount) ? amount : 0;
}

function asDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getRangeStart(range) {
  const days = RANGE_DAYS[range];
  if (!days) return null;

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));
  return start;
}

function getBookingDate(booking) {
  return asDate(booking.paidAt) || asDate(booking.sessionStartedAt) || asDate(booking.createdAt);
}

function getBookingEarnings(booking) {
  return (
    asNumber(booking.walletDebitedAmount) ||
    asNumber(booking.amountPaid) ||
    asNumber(booking.bookingFee)
  );
}

function getDisplayStatus(booking, now = new Date()) {
  const status = String(booking.status || "confirmed").toLowerCase();
  if (["completed", "cancelled", "failed"].includes(status)) return status;

  const endsAt = asDate(booking.sessionEndsAt);
  if (endsAt && endsAt.getTime() <= now.getTime()) return "completed";

  return status === "active" ? "active" : "confirmed";
}

function createEmptyModeSummary() {
  return {
    bookings: 0,
    minutes: 0,
    earnings: 0,
  };
}

function serializeBooking(booking) {
  const bookingDate = getBookingDate(booking);

  return {
    bookingId: booking.bookingId,
    astrologerId: booking.astrologerId,
    astrologerName: booking.astrologerName,
    customerName: booking.customerName,
    customerEmail: booking.customerEmail,
    concern: booking.concern,
    mode: booking.mode,
    durationMinutes: asNumber(booking.durationMinutes),
    earnings: getBookingEarnings(booking),
    paymentStatus: booking.paymentStatus || "paid",
    status: getDisplayStatus(booking),
    bookedAt: bookingDate ? bookingDate.toISOString() : null,
  };
}

function resolveScope(req) {
  const session = readAuthSession(req);
  const requestedPanditId = String(req.query.panditId || req.query.astrologerId || "").trim();
  const requestedPanditName = String(req.query.panditName || req.query.astrologerName || "").trim();
  const sessionRole = String(session?.role || "").toLowerCase();
  const isPractitioner = ["astrologer", "pandit"].includes(sessionRole);
  const isPrivileged = ["admin", "manager", "master_admin"].includes(sessionRole);

  if (isPractitioner) {
    if (requestedPanditId && requestedPanditId !== String(session.id)) {
      return {
        error: {
          status: 403,
          message: "This dashboard belongs to another pandit account.",
        },
      };
    }

    return {
      session,
      panditId: String(session.id || ""),
      panditName: session.name || requestedPanditName,
      authMode: "authenticated",
    };
  }

  return {
    session,
    panditId: requestedPanditId,
    panditName: requestedPanditName,
    authMode: session ? (isPrivileged ? "privileged" : "authenticated") : "query",
  };
}

router.get(["/", "/summary"], async (req, res, next) => {
  try {
    if (!req.app.locals.mongoReady && mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database is not connected. Please try again shortly.",
      });
    }

    const scope = resolveScope(req);
    if (scope.error) {
      return res.status(scope.error.status).json({
        success: false,
        message: scope.error.message,
      });
    }

    const range = RANGE_DAYS[req.query.range] ? String(req.query.range) : "30d";
    const rangeStart = getRangeStart(range);
    const match = {
      mode: { $in: ["chat", "call"] },
    };

    if (scope.panditId) {
      match.astrologerId = scope.panditId;
    }

    if (rangeStart) {
      match.$or = [
        { createdAt: { $gte: rangeStart } },
        { paidAt: { $gte: rangeStart } },
        { sessionStartedAt: { $gte: rangeStart } },
      ];
    }

    const bookings = await Booking.find(match)
      .sort({ createdAt: -1, paidAt: -1 })
      .select(
        [
          "bookingId",
          "astrologerId",
          "astrologerName",
          "customerName",
          "customerEmail",
          "concern",
          "mode",
          "durationMinutes",
          "bookingFee",
          "amountPaid",
          "walletDebitedAmount",
          "paymentStatus",
          "status",
          "paidAt",
          "sessionStartedAt",
          "sessionEndsAt",
          "createdAt",
          "updatedAt",
        ].join(" ")
      )
      .lean();

    const now = new Date();
    const totals = {
      totalBookings: 0,
      callBookings: 0,
      chatBookings: 0,
      completedBookings: 0,
      activeBookings: 0,
      totalMinutes: 0,
      earnings: 0,
      completedEarnings: 0,
      averageBookingValue: 0,
    };
    const byMode = {
      call: createEmptyModeSummary(),
      chat: createEmptyModeSummary(),
    };
    const dailyMap = new Map();

    bookings.forEach((booking) => {
      const mode = booking.mode === "call" ? "call" : "chat";
      const status = getDisplayStatus(booking, now);
      const durationMinutes = asNumber(booking.durationMinutes);
      const earnings = getBookingEarnings(booking);
      const bookingDate = getBookingDate(booking);
      const dayKey = bookingDate ? dateKeyFormatter.format(bookingDate) : "unscheduled";

      totals.totalBookings += 1;
      totals.totalMinutes += durationMinutes;
      totals.earnings += earnings;
      totals.callBookings += mode === "call" ? 1 : 0;
      totals.chatBookings += mode === "chat" ? 1 : 0;
      totals.completedBookings += status === "completed" ? 1 : 0;
      totals.activeBookings += ["active", "confirmed"].includes(status) ? 1 : 0;
      totals.completedEarnings += status === "completed" ? earnings : 0;

      byMode[mode].bookings += 1;
      byMode[mode].minutes += durationMinutes;
      byMode[mode].earnings += earnings;

      if (!dailyMap.has(dayKey)) {
        dailyMap.set(dayKey, {
          date: dayKey,
          callBookings: 0,
          chatBookings: 0,
          bookings: 0,
          minutes: 0,
          earnings: 0,
        });
      }

      const daily = dailyMap.get(dayKey);
      daily.bookings += 1;
      daily.minutes += durationMinutes;
      daily.earnings += earnings;
      daily.callBookings += mode === "call" ? 1 : 0;
      daily.chatBookings += mode === "chat" ? 1 : 0;
    });

    totals.averageBookingValue =
      totals.totalBookings > 0 ? Math.round(totals.earnings / totals.totalBookings) : 0;

    res.json({
      success: true,
      generatedAt: new Date().toISOString(),
      scope: {
        panditId: scope.panditId || null,
        panditName: scope.panditName || null,
        authMode: scope.authMode,
        range,
      },
      totals,
      byMode,
      daily: Array.from(dailyMap.values()).sort((a, b) => a.date.localeCompare(b.date)),
      recentBookings: bookings.slice(0, 12).map(serializeBooking),
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
