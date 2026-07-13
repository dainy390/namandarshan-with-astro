const PANDIT_JOIN_GRACE_MS = 60 * 1000;
const PANDIT_NO_SHOW_REASON = "pandit_no_show";

const pendingPanditJoinTimers = new Map();

function toDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function sessionStartedAt(booking) {
  return toDate(booking?.sessionStartedAt) || toDate(booking?.paidAt) || toDate(booking?.createdAt) || new Date();
}

function panditJoinDeadlineAt(booking) {
  const startedAt = sessionStartedAt(booking);
  return new Date(startedAt.getTime() + PANDIT_JOIN_GRACE_MS);
}

function clearPanditJoinTimeout(bookingId) {
  const id = String(bookingId || "").trim();
  if (!id) return;

  const timer = pendingPanditJoinTimers.get(id);
  if (timer) {
    clearTimeout(timer);
    pendingPanditJoinTimers.delete(id);
  }
}

function shouldAutoEndForPanditNoShow(booking, now = new Date()) {
  if (!booking) return false;
  if (!["chat", "call"].includes(String(booking.mode || ""))) return false;
  if (toDate(booking.panditJoinedAt)) return false;

  const status = String(booking.status || "").toLowerCase();
  if (["completed", "cancelled", "failed"].includes(status)) return false;

  return panditJoinDeadlineAt(booking).getTime() <= now.getTime();
}

function emitAutoEnded(req, booking) {
  const io = req?.app?.get?.("io");
  if (!io || !booking?.bookingId) return;

  const payload = {
    bookingId: booking.bookingId,
    roomId: booking.bookingId,
    mode: booking.mode,
    reason: PANDIT_NO_SHOW_REASON,
    message: "Pandit did not join within 1 minute. The session has been ended.",
    endedAt: toDate(booking.autoEndedAt)?.toISOString() || new Date().toISOString(),
  };

  io.to(booking.bookingId).emit("consultation:auto-ended", payload);
  if (booking.mode === "call") {
    io.to(booking.bookingId).emit("call:end", payload);
  }

  const panditId = String(booking.astrologerId || "").trim();
  if (panditId) {
    io.to(`pandit:${panditId}`).emit("pandit:booking-ended", payload);
  }
}

async function saveBooking(req, booking) {
  if (!booking) return booking;
  booking.updatedAt = new Date();

  if ((req?.app?.locals?.mongoReady || typeof booking.save === "function") && typeof booking.save === "function") {
    await booking.save();
  }

  return booking;
}

async function autoEndIfPanditNoShow(req, booking) {
  if (!shouldAutoEndForPanditNoShow(booking)) {
    return { ended: false, booking };
  }

  const endedAt = new Date();
  clearPanditJoinTimeout(booking.bookingId);

  if (!booking.sessionStartedAt) {
    booking.sessionStartedAt = sessionStartedAt(booking);
  }

  booking.sessionEndsAt = endedAt;
  booking.status = "completed";
  booking.endedReason = PANDIT_NO_SHOW_REASON;
  booking.autoEndedAt = endedAt;
  booking.walletDebitedAmount = 0;
  booking.paymentStatus = "no_show";

  await saveBooking(req, booking);
  emitAutoEnded(req, booking);

  return { ended: true, booking };
}

function schedulePanditJoinTimeout(req, booking, BookingModel) {
  const bookingId = String(booking?.bookingId || "").trim();
  if (!bookingId || !BookingModel || toDate(booking?.panditJoinedAt)) return;

  const status = String(booking.status || "").toLowerCase();
  if (["completed", "cancelled", "failed"].includes(status)) return;

  clearPanditJoinTimeout(bookingId);

  const delayMs = Math.max(0, panditJoinDeadlineAt(booking).getTime() - Date.now());
  const timer = setTimeout(async () => {
    try {
      const freshBooking = await BookingModel.findOne({ bookingId });
      if (freshBooking) {
        await autoEndIfPanditNoShow(req, freshBooking);
      }
    } catch (error) {
      console.error("[consultation] Failed to auto-end pandit no-show session:", error);
    } finally {
      pendingPanditJoinTimers.delete(bookingId);
    }
  }, delayMs + 250);

  if (typeof timer.unref === "function") {
    timer.unref();
  }

  pendingPanditJoinTimers.set(bookingId, timer);
}

module.exports = {
  PANDIT_JOIN_GRACE_MS,
  PANDIT_NO_SHOW_REASON,
  autoEndIfPanditNoShow,
  clearPanditJoinTimeout,
  panditJoinDeadlineAt,
  schedulePanditJoinTimeout,
  shouldAutoEndForPanditNoShow,
};
