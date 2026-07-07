const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { randomUUID } = require("crypto");
const BookingSchema = require("../models/Booking.js");
const WalletSchema = require('../models/Wallet');
const PanditProfileSchema = require('../models/PanditProfile.js');
const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
const Wallet = mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema);
const PanditProfile =
  mongoose.models.PanditProfile || mongoose.model('PanditProfile', PanditProfileSchema);

const { createPaymentOrder, publicCheckoutOrder } = require("../services/payments.js");
const { notifyPanditBookingRequest } = require("../services/panditRequestNotifications.js");
const { readAuthSession, recordWalletSpendForSession } = require("../middleware/auth.js");
const { getWalletDebitAmount, shouldDebitWalletForBooking } = require("../utils/bookingBilling.js");

const signalTypes = new Set(["ready", "offer", "answer", "candidate", "leave"]);
function createBookingId() {
  return `AST-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now()
    .toString()
    .slice(-4)}`;
}

function normalizeDuration(value) {
  const duration = Number.parseInt(value, 10);
  if (!Number.isFinite(duration)) return 5;
  return Math.min(60, Math.max(5, duration));
}

async function findAstrologer(req, astrologerId) {
  const id = String(astrologerId || "").trim();
  if (!id) return null;

  const profileLookup = [{ email: id.toLowerCase() }];
  if (mongoose.Types.ObjectId.isValid(id)) {
    profileLookup.push({ _id: id }, { userId: id });
  }

  const profile = await PanditProfile.findOne({ $or: profileLookup }).lean();
  if (profile) {
    return {
      id: String(profile.userId || profile._id),
      name: profile.displayName,
      email: profile.email,
      modes: profile.modes?.length ? profile.modes : ["chat", "call"],
      pricePerMinute: Number(profile.pricePerMinute || 0),
      status: profile.status || "online",
      avatar: profile.avatar || "",
    };
  }

  if (req.app.locals?.Astrologer) {
    const lookup = [{ id }, { publicId: id }];
    if (mongoose.Types.ObjectId.isValid(id)) {
      lookup.push({ _id: id });
    }

    const astrologer = await req.app.locals.Astrologer.findOne({ $or: lookup }).lean();

    if (astrologer) {
      return {
        id: String(astrologer.id || astrologer.publicId || astrologer._id),
        name: astrologer.name,
        email: astrologer.email,
        modes: astrologer.modes?.length ? astrologer.modes : ["chat", "call"],
        pricePerMinute: Number(astrologer.pricePerMinute || astrologer.price || 0),
        status: astrologer.status || "online",
      };
    }
  }

  return null;
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

function normalizeFeedbackRating(value) {
  const rating = Number(value);
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) return null;
  return Math.round(rating);
}

function roundRating(value) {
  return Math.round(Number(value || 0) * 10) / 10;
}

async function applyPanditRatingFromBooking(booking, previousRating, nextRating) {
  const lookup = getPanditProfileLookup(booking.astrologerId);
  if (!lookup.length) return null;

  const profile = await PanditProfile.findOne({ $or: lookup });
  if (!profile) return null;

  const currentCount = Math.max(0, Number(profile.ratingCount || 0));
  const storedTotal = Number(profile.ratingTotal);
  const currentTotal =
    Number.isFinite(storedTotal) && storedTotal > 0
      ? storedTotal
      : Math.max(0, Number(profile.rating || 0) * currentCount);
  const hasPreviousRating =
    Number.isFinite(previousRating) && previousRating >= 1 && previousRating <= 5 && currentCount > 0;
  const nextCount = hasPreviousRating ? currentCount : currentCount + 1;
  const nextTotal = Math.max(0, currentTotal - (hasPreviousRating ? previousRating : 0) + nextRating);

  profile.ratingCount = nextCount;
  profile.ratingTotal = nextTotal;
  profile.rating = nextCount > 0 ? roundRating(nextTotal / nextCount) : 0;
  await profile.save();

  return {
    rating: profile.rating,
    ratingCount: profile.ratingCount,
  };
}

async function getAstrologerForSession(req, session) {
  if (!session) return null;

  const byId = await findAstrologer(req, session.id);
  if (byId) return byId;

  return null;
}

function toDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toIso(value) {
  return toDate(value)?.toISOString() || value || null;
}

function sessionStartedAt(booking) {
  return toDate(booking.sessionStartedAt) || toDate(booking.paidAt) || toDate(booking.createdAt) || new Date();
}

function sessionEndsAt(booking) {
  const startedAt = sessionStartedAt(booking);
  const explicitEnd = toDate(booking.sessionEndsAt);

  if (explicitEnd) return explicitEnd;

  const durationMs = Math.max(1, Number(booking.durationMinutes) || 5) * 60 * 1000;
  return new Date(startedAt.getTime() + durationMs);
}

function sessionSnapshot(booking) {
  const startedAt = sessionStartedAt(booking);
  const endsAt = sessionEndsAt(booking);
  const remainingSeconds = Math.max(0, Math.ceil((endsAt.getTime() - Date.now()) / 1000));
  const status = booking.status === "completed" || remainingSeconds <= 0 ? "completed" : "active";

  return {
    startedAt: startedAt.toISOString(),
    endsAt: endsAt.toISOString(),
    remainingSeconds,
    durationMinutes: Math.max(1, Number(booking.durationMinutes) || 5),
    status
  };
}

function toSerializableBooking(booking) {
  const item = typeof booking?.toObject === "function" ? booking.toObject() : booking;
  const session = sessionSnapshot(item);

  return {
    bookingId: item.bookingId,
    astrologerId: item.astrologerId,
    astrologerName: item.astrologerName,
    customerId: item.customerId,
    customerEmail: item.customerEmail,
    customerName: item.customerName,
    concern: item.concern,
    mode: item.mode,
    durationMinutes: item.durationMinutes,
    bookingFee: item.bookingFee,
    amountPaid: item.amountPaid,
    currency: item.currency,
    paymentStatus: item.paymentStatus,
    razorpayOrderId: item.razorpayOrderId,
    razorpayPaymentId: item.razorpayPaymentId,
    paidAt: toIso(item.paidAt),
    sessionStartedAt: toIso(item.sessionStartedAt) || session.startedAt,
    sessionEndsAt: toIso(item.sessionEndsAt) || session.endsAt,
    birthDate: item.birthDate,
    birthTime: item.birthTime,
    place: item.place,
    etaMinutes: item.etaMinutes,
    status: session.status,
    devoteeRating: item.devoteeRating || null,
    devoteeFeedback: item.devoteeFeedback || "",
    devoteeRatedAt: toIso(item.devoteeRatedAt),
    createdAt: toIso(item.createdAt),
    updatedAt: toIso(item.updatedAt)
  };
}

function toSerializableMessage(message) {
  return {
    id: message.id,
    senderId: message.senderId,
    senderRole: message.senderRole,
    senderName: message.senderName,
    body: message.body,
    createdAt: toIso(message.createdAt)
  };
}

function toSerializableSignal(signal) {
  return {
    id: signal.id,
    senderRole: signal.senderRole,
    type: signal.type,
    data: signal.data,
    createdAt: toIso(signal.createdAt)
  };
}

async function findBooking(req, bookingId) {
  if (req.app.locals.mongoReady) {
    return Booking.findOne({ bookingId });
  }
}

async function readParticipant(req, res, booking) {
  const session = readAuthSession(req);

  if (!session) {
    res.status(401).json({ message: "Sign in to join this booking session." });
    return null;
  }

  const isCustomer =
    session.role === "user" && (!booking.customerEmail || booking.customerEmail === session.email);
  const isPractitioner = ["astrologer", "pandit"].includes(session.role);
  const astrologerProfile =
    isPractitioner ? await getAstrologerForSession(req, session) : null;
  const isAssignedAstrologer =
    isPractitioner && astrologerProfile?.id === booking.astrologerId;
  const isAstrologerDesk = ["admin", "manager"].includes(session.role);

  if (!isCustomer && !isAssignedAstrologer && !isAstrologerDesk) {
    res.status(403).json({ message: "This booking session belongs to another account." });
    return null;
  }

  return {
    ...session,
    participantRole: isCustomer ? "customer" : "astrologer"
  };
}

function ensureSessionFields(booking) {
  const startedAt = sessionStartedAt(booking);
  const endsAt = sessionEndsAt(booking);

  if (!booking.sessionStartedAt) booking.sessionStartedAt = startedAt;
  if (!booking.sessionEndsAt) booking.sessionEndsAt = endsAt;
  if (!Array.isArray(booking.chatMessages)) booking.chatMessages = [];
  if (!Array.isArray(booking.callSignals)) booking.callSignals = [];
}

async function ensureWalletHasBalance(req, session, res) {
  if (!session?.id) {
    res.status(401).json({ message: 'Sign in to access consultation sessions.' });
    return false;
  }

  const wallet = await Wallet.findOne({ userId: session.id }).lean();
  const balance = Number(wallet?.balance ?? 0);

  if (!Number.isFinite(balance) || balance <= 0) {
    res.status(403).json({ message: 'Add money to your wallet to start this consultation.' });
    return false;
  }

  return true;
}

function isMongoReady(req) {
  return Boolean(req.app.locals.mongoReady) || mongoose.connection.readyState === 1;
}

async function saveBooking(req, booking) {
  booking.updatedAt = new Date();

  if (req.app.locals.mongoReady && typeof booking.save === "function") {
    await booking.save();
  }

  return booking;
}

async function syncExpiredSession(req, booking) {
  ensureSessionFields(booking);

  const snapshot = sessionSnapshot(booking);
  if (snapshot.status === "completed" && booking.status !== "completed") {
    booking.status = "completed";
    await saveBooking(req, booking);
  }

  if (snapshot.status === "completed" && shouldDebitWalletForBooking(booking, sessionEndsAt(booking))) {
    await finalizeCompletedSession(req, booking);
  }

  return snapshot;
}

async function finalizeCompletedSession(req, booking) {
  if (!booking) return null;

  const endedAt = toDate(booking.sessionEndsAt) || new Date();
  const debitAmount = getWalletDebitAmount(booking, endedAt);
  if (!shouldDebitWalletForBooking(booking, endedAt)) {
    return null;
  }

  try {
    const spendResult = await recordWalletSpendForSession(req, {
      id: booking.customerId,
      email: booking.customerEmail,
      role: 'user'
    }, debitAmount);

    booking.walletDebitedAmount =
      Number.isFinite(Number(spendResult.amountDebited)) ? Number(spendResult.amountDebited) : debitAmount;
    booking.walletDebitedAt = new Date();
    await saveBooking(req, booking);
    return spendResult;
  } catch (error) {
    console.error('[bookings] Failed to debit wallet for completed session:', error);
    return null;
  }
}

async function buildSessionPayload(req, booking, participant) {
  const session = await syncExpiredSession(req, booking);
  const item = typeof booking?.toObject === "function" ? booking.toObject() : booking;

  return {
    booking: toSerializableBooking(item),
    participant: {
      role: participant.participantRole,
      name: participant.name,
      email: participant.email
    },
    session,
    messages: (item.chatMessages || []).map(toSerializableMessage)
  };
}

router.post("/", async (req, res, next) => {
  try {
    const session = readAuthSession(req);

    if (!session) {
      return res.status(401).json({ message: "Sign in to book a chat or call with an astrologer." });
    }

    if (session.role !== "user") {
      return res.status(403).json({ message: "Only customer accounts can book chat or call sessions." });
    }

    const canProceed = await ensureWalletHasBalance(req, session, res);
    if (!canProceed) {
      return;
    }

    const { astrologerId, name, concern, mode, birthDate, birthTime, place, durationMinutes } =
      req.body;

    if (!astrologerId || !name || !concern || !mode) {
      return res.status(400).json({
        message: "Astrologer, name, concern, and booking mode are required."
      });
    }

    const astrologer = await findAstrologer(req, astrologerId);

    if (!astrologer) {
      return res.status(404).json({ message: "Astrologer not found." });
    }

    if (!astrologer.modes.includes(mode)) {
      return res.status(400).json({ message: `${astrologer.name} is not available for ${mode}.` });
    }

    const etaMinutes = astrologer.status === "online" ? 2 : astrologer.status === "busy" ? 8 : 25;
    const duration = normalizeDuration(durationMinutes);
    const bookingFee = Number(astrologer.pricePerMinute || 0) * duration;

    if (bookingFee <= 0) {
      return res.status(400).json({ message: "Unable to calculate booking fees." });
    }

    const bookingDraft = {
      bookingId: createBookingId(),
      astrologerId: astrologer.id,
      astrologerName: astrologer.name,
      customerId: session.id,
      customerEmail: session.email,
      customerName: name,
      concern,
      mode,
      durationMinutes: duration,
      bookingFee,
      pricePerMinute: Number(astrologer.pricePerMinute || 0),
      amountPaid: bookingFee,
      currency: process.env.RAZORPAY_CURRENCY || "INR",
      birthDate,
      birthTime,
      place,
      etaMinutes,
      status: "confirmed"
    };

    const paymentOrder = await createPaymentOrder(req, {
      session,
      purpose: "consultation",
      amount: bookingFee,
      receiptPrefix: "booking",
      notes: {
        purpose: "consultation",
        bookingId: bookingDraft.bookingId,
        astrologerId: astrologer.id,
        mode
      },
      consultation: bookingDraft
    });

    res.status(201).json({
      message: "Payment order created. Complete payment to confirm the booking.",
      ...publicCheckoutOrder(paymentOrder),
      booking: bookingDraft
    });
  } catch (error) {
    next(error);
  }
});

router.post("/wallet-session", async (req, res, next) => {
  try {
    const session = readAuthSession(req);

    if (!session) {
      return res.status(401).json({ message: "Sign in to start this consultation session." });
    }

    if (session.role !== "user") {
      return res.status(403).json({ message: "Only devotee accounts can start wallet sessions." });
    }

    if (!isMongoReady(req)) {
      return res.status(503).json({ message: "Consultation sessions are temporarily unavailable." });
    }

    const canProceed = await ensureWalletHasBalance(req, session, res);
    if (!canProceed) {
      return;
    }

    const { astrologerId, mode, name, concern, birthDate, birthTime, place, durationMinutes } =
      req.body;
    const consultationMode = String(mode || "").trim();

    if (!astrologerId || !["chat", "call"].includes(consultationMode)) {
      return res.status(400).json({ message: "Pandit and consultation mode are required." });
    }

    const astrologer = await findAstrologer(req, astrologerId);

    if (!astrologer) {
      return res.status(404).json({ message: "Pandit profile not found." });
    }

    if (astrologer.status === "offline") {
      return res.status(400).json({ message: `${astrologer.name} is currently offline.` });
    }

    if (!astrologer.modes.includes(consultationMode)) {
      return res
        .status(400)
        .json({ message: `${astrologer.name} is not available for ${consultationMode}.` });
    }

    const duration = normalizeDuration(durationMinutes);
    const pricePerMinute = Number(astrologer.pricePerMinute || 0);
    const bookingFee = pricePerMinute * duration;

    if (bookingFee <= 0) {
      return res.status(400).json({ message: "Unable to calculate consultation fees." });
    }

    const startedAt = new Date();
    const booking = await Booking.create({
      bookingId: createBookingId(),
      astrologerId: astrologer.id,
      astrologerName: astrologer.name,
      customerId: session.id,
      customerEmail: session.email,
      customerName: String(name || session.name || "").trim() || "Devotee",
      concern: String(concern || `Live ${consultationMode} consultation`).trim(),
      mode: consultationMode,
      durationMinutes: duration,
      bookingFee,
      pricePerMinute,
      amountPaid: 0,
      currency: process.env.RAZORPAY_CURRENCY || "INR",
      paymentStatus: "wallet_pending",
      birthDate,
      birthTime,
      place,
      etaMinutes: 0,
      status: "active",
      sessionStartedAt: startedAt,
      sessionEndsAt: new Date(startedAt.getTime() + duration * 60 * 1000)
    });

    void notifyPanditBookingRequest(req, booking, {
      panditEmail: astrologer.email,
      panditName: astrologer.name,
    });

    res.status(201).json({
      success: true,
      message: "Consultation session started.",
      booking: toSerializableBooking(booking),
      bookingId: booking.bookingId,
      roomId: booking.bookingId,
      durationSeconds: duration * 60,
      session: sessionSnapshot(booking)
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:bookingId/session", async (req, res, next) => {
  try {
    const booking = await findBooking(req, req.params.bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking was not found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    res.json(await buildSessionPayload(req, booking, participant));
  } catch (error) {
    next(error);
  }
});

router.post("/finalize", async (req, res, next) => {
  try {
    const session = readAuthSession(req);

    if (!session) {
      return res.status(401).json({ message: "Sign in to finalize this consultation session." });
    }

    const booking = await Booking.findOne({
      customerId: session.id,
      mode: { $in: ["chat", "call"] },
      status: { $ne: "completed" }
    }).sort({ createdAt: -1 });

    if (!booking) {
      return res.status(404).json({ message: "No active consultation session was found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    ensureSessionFields(booking);
    if (booking.status !== "completed" || !booking.sessionEndsAt) {
      booking.sessionEndsAt = new Date();
    }
    booking.status = "completed";
    await saveBooking(req, booking);

    const spendResult = await finalizeCompletedSession(req, booking);
    const debitAmount =
      booking.walletDebitedAmount || getWalletDebitAmount(booking, toDate(booking.sessionEndsAt) || new Date());

    res.json({
      message: "Consultation session finalized.",
      session: sessionSnapshot(booking),
      debitAmount,
      walletDebitedAmount: booking.walletDebitedAmount || null,
      walletDebitedAt: booking.walletDebitedAt || null,
      amountDebited: spendResult?.amountDebited ?? booking.walletDebitedAmount ?? null,
      wallet: spendResult?.wallet || spendResult || null
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:bookingId/finalize", async (req, res, next) => {
  try {
    const booking = await findBooking(req, req.params.bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking was not found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    ensureSessionFields(booking);
    if (booking.status !== "completed" || !booking.sessionEndsAt) {
      booking.sessionEndsAt = new Date();
    }
    booking.status = "completed";
    await saveBooking(req, booking);

    const spendResult = await finalizeCompletedSession(req, booking);
    const debitAmount =
      booking.walletDebitedAmount || getWalletDebitAmount(booking, toDate(booking.sessionEndsAt) || new Date());

    res.json({
      message: "Consultation session finalized.",
      session: sessionSnapshot(booking),
      debitAmount,
      walletDebitedAmount: booking.walletDebitedAmount || null,
      walletDebitedAt: booking.walletDebitedAt || null,
      amountDebited: spendResult?.amountDebited ?? booking.walletDebitedAmount ?? null,
      wallet: spendResult?.wallet || spendResult || null
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:bookingId/feedback", async (req, res, next) => {
  try {
    const booking = await findBooking(req, req.params.bookingId);

    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking was not found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    if (participant.participantRole !== "customer") {
      return res.status(403).json({ success: false, message: "Only devotees can rate a consultation." });
    }

    const rating = normalizeFeedbackRating(req.body.rating);
    if (!rating) {
      return res.status(400).json({ success: false, message: "Select a rating from 1 to 5." });
    }

    const comment = String(req.body.comment || req.body.feedback || "").trim().slice(0, 1000);
    const previousRating = Number(booking.devoteeRating);

    ensureSessionFields(booking);
    if (booking.status !== "completed") {
      booking.sessionEndsAt = new Date();
      booking.status = "completed";
      await saveBooking(req, booking);
      await finalizeCompletedSession(req, booking);
    }

    booking.devoteeRating = rating;
    booking.devoteeFeedback = comment;
    booking.devoteeRatedAt = new Date();
    await saveBooking(req, booking);

    const profileRating = await applyPanditRatingFromBooking(booking, previousRating, rating);

    res.json({
      success: true,
      message: "Thanks for rating your consultation.",
      feedback: {
        rating: booking.devoteeRating,
        comment: booking.devoteeFeedback,
        ratedAt: toIso(booking.devoteeRatedAt),
      },
      profile: profileRating,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:bookingId/messages", async (req, res, next) => {
  try {
    const booking = await findBooking(req, req.params.bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking was not found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    const canProceed = await ensureWalletHasBalance(req, participant, res);
    if (!canProceed) {
      return;
    }

    if (booking.mode !== "chat") {
      return res.status(400).json({ message: "Messages are only available for chat sessions." });
    }

    const session = await syncExpiredSession(req, booking);
    if (session.status === "completed") {
      return res.status(403).json({ message: "This chat session has ended." });
    }

    const body = String(req.body.body || "").trim();

    if (!body) {
      return res.status(400).json({ message: "Enter a message to send." });
    }

    if (body.length > 1000) {
      return res.status(400).json({ message: "Messages must be 1000 characters or fewer." });
    }

    const message = {
      id: randomUUID(),
      senderId: participant.id,
      senderRole: participant.participantRole,
      senderName: participant.name,
      body,
      createdAt: new Date()
    };

    booking.chatMessages = [...(booking.chatMessages || []), message].slice(-150);
    await saveBooking(req, booking);

    res.status(201).json(await buildSessionPayload(req, booking, participant));
  } catch (error) {
    next(error);
  }
});

router.get("/:bookingId/signals", async (req, res, next) => {
  try {
    const booking = await findBooking(req, req.params.bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking was not found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    const canProceed = await ensureWalletHasBalance(req, participant, res);
    if (!canProceed) {
      return;
    }

    if (booking.mode !== "call") {
      return res.status(400).json({ message: "Call signaling is only available for call sessions." });
    }

    const session = await syncExpiredSession(req, booking);

    const item = typeof booking?.toObject === "function" ? booking.toObject() : booking;

    res.json({
      session,
      signals: (item.callSignals || []).map(toSerializableSignal)
    });
  } catch (error) {
    next(error);
  }
});

router.post("/:bookingId/signals", async (req, res, next) => {
  try {
    const booking = await findBooking(req, req.params.bookingId);

    if (!booking) {
      return res.status(404).json({ message: "Booking was not found." });
    }

    const participant = await readParticipant(req, res, booking);
    if (!participant) return;

    const canProceed = await ensureWalletHasBalance(req, participant, res);
    if (!canProceed) {
      return;
    }

    if (booking.mode !== "call") {
      return res.status(400).json({ message: "Call signaling is only available for call sessions." });
    }

    const session = await syncExpiredSession(req, booking);
    if (session.status === "completed") {
      return res.status(403).json({ message: "This call session has ended." });
    }

    const type = String(req.body.type || "").trim();

    if (!signalTypes.has(type)) {
      return res.status(400).json({ message: "Unsupported call signal type." });
    }

    const signal = {
      id: randomUUID(),
      senderRole: participant.participantRole,
      type,
      data: req.body.data || null,
      createdAt: new Date()
    };

    booking.callSignals = [...(booking.callSignals || []), signal].slice(-200);
    await saveBooking(req, booking);

    res.status(201).json({
      signal: toSerializableSignal(signal),
      session: sessionSnapshot(booking)
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
