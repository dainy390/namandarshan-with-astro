const { Router } = require("express");
const mongoose = require("mongoose");
const BookingSchema = require("../models/Booking.js");
const {
  createPaymentOrder,
  findPaymentOrder,
  markPaymentOrderFailed,
  markPaymentOrderPaid,
  publicCheckoutOrder,
  verifyRazorpaySignature
} = require("../services/payments.js");
const {
  creditWalletForSession,
  readAuthSession
} = require("../middleware/auth.js");
const { notifyPanditBookingRequest } = require("../services/panditRequestNotifications.js");

const router = Router();
const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
const memoryBookings = [];

function requireCustomer(req, res) {
  const session = readAuthSession(req);

  if (!session) {
    res.status(401).json({ message: "Sign in to continue with payment." });
    return null;
  }

  if (session.role !== "user") {
    res.status(403).json({ message: "Only customer accounts can make payments." });
    return null;
  }

  return session;
}

function toSerializableBooking(booking) {
  const item = typeof booking?.toObject === "function" ? booking.toObject() : booking;

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
    consultationFee: item.consultationFee,
    amountPaid: item.amountPaid,
    currency: item.currency,
    paymentStatus: item.paymentStatus,
    razorpayOrderId: item.razorpayOrderId,
    razorpayPaymentId: item.razorpayPaymentId,
    paidAt: item.paidAt?.toISOString?.() || item.paidAt || null,
    sessionStartedAt: item.sessionStartedAt?.toISOString?.() || item.sessionStartedAt || null,
    sessionEndsAt: item.sessionEndsAt?.toISOString?.() || item.sessionEndsAt || null,
    birthDate: item.birthDate,
    birthTime: item.birthTime,
    place: item.place,
    etaMinutes: item.etaMinutes,
    status: item.status,
    createdAt: item.createdAt?.toISOString?.() || item.createdAt || null,
    updatedAt: item.updatedAt?.toISOString?.() || item.updatedAt || null
  };
}

function sessionEndFrom(startedAt, durationMinutes) {
  const durationMs = Math.max(1, Number(durationMinutes) || 5) * 60 * 1000;
  return new Date(startedAt.getTime() + durationMs);
}

function isMongoReady(req) {
  return Boolean(req.app.locals.mongoReady) || mongoose.connection.readyState === 1;
}

function rememberBooking(booking) {
  const now = new Date().toISOString();
  const item = {
    ...booking,
    createdAt: now,
    updatedAt: now
  };
  memoryBookings.push(item);
  return toSerializableBooking(item);
}

async function createBookingFromOrder(req, order, { paymentStatus, paymentId = null }) {
  const startedAt = new Date();
  const booking = {
    ...order.consultation,
    paymentStatus,
    razorpayOrderId: order.razorpayOrderId,
    razorpayPaymentId: paymentId,
    amountPaid: paymentStatus === "paid" ? order.amount : 0,
    paidAt: paymentStatus === "paid" ? startedAt : null,
    sessionStartedAt: startedAt,
    sessionEndsAt: sessionEndFrom(startedAt, order.consultation?.durationMinutes)
  };

  if (isMongoReady(req)) {
    const existing = await Booking.findOne({ razorpayOrderId: order.razorpayOrderId });
    if (existing) {
      let shouldNotifyPandit = false;
      if (paymentStatus === "paid" && existing.paymentStatus !== "paid") {
        existing.paymentStatus = "paid";
        existing.amountPaid = order.amount;
        existing.razorpayPaymentId = paymentId;
        existing.paidAt = startedAt;
        await existing.save();
        shouldNotifyPandit = true;
      }

      const serialized = toSerializableBooking(existing);
      if (shouldNotifyPandit) {
        void notifyPanditBookingRequest(req, serialized);
      }

      return serialized;
    }

    const created = await Booking.create(booking);
    const serialized = toSerializableBooking(created);
    if (paymentStatus === "paid") {
      void notifyPanditBookingRequest(req, serialized);
    }

    return serialized;
  }

  const existing = memoryBookings.find(
    (item) => item.razorpayOrderId === order.razorpayOrderId
  );

  if (existing) {
    let shouldNotifyPandit = false;
    if (paymentStatus === "paid" && existing.paymentStatus !== "paid") {
      existing.paymentStatus = "paid";
      existing.amountPaid = order.amount;
      existing.razorpayPaymentId = paymentId;
      existing.paidAt = startedAt.toISOString();
      existing.updatedAt = startedAt.toISOString();
      shouldNotifyPandit = true;
    }

    if (shouldNotifyPandit) {
      void notifyPanditBookingRequest(req, existing);
    }

    return existing;
  }

  const remembered = rememberBooking(booking);
  if (paymentStatus === "paid") {
    void notifyPanditBookingRequest(req, remembered);
  }

  return remembered;
}

async function createPaidBooking(req, order, paymentId) {
  return createBookingFromOrder(req, order, {
    paymentStatus: "paid",
    paymentId
  });
}

async function createFailedBooking(req, order) {
  return createBookingFromOrder(req, order, {
    paymentStatus: "failed"
  });
}

function readAmount(value) {
  const amount = Number(value);
  return Number.isFinite(amount) ? Math.round(amount) : 0;
}

router.post("/recharge", async (req, res, next) => {
  const session = requireCustomer(req, res);
  if (!session) return;

  try {
    const amount = readAmount(req.body.amount);

    if (amount < 50 || amount > 50000) {
      return res.status(400).json({ message: "Recharge amount must be between Rs 50 and Rs 50,000." });
    }

    const paymentOrder = await createPaymentOrder(req, {
      session,
      purpose: "wallet",
      amount,
      receiptPrefix: "wallet",
      notes: {
        purpose: "wallet_recharge",
        userEmail: session.email
      },
      wallet: {
        rechargeAmount: amount
      }
    });

    res.status(201).json({
      message: "Payment order created. Complete payment to recharge the wallet.",
      ...publicCheckoutOrder(paymentOrder),
      recharge: {
        amount
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post("/bookings/failed", async (req, res, next) => {
  const session = requireCustomer(req, res);
  if (!session) return;

  try {
    const razorpayOrderId = String(req.body.razorpayOrderId || "").trim();

    if (!razorpayOrderId) {
      return res.status(400).json({ message: "Razorpay order id is required." });
    }

    const order = await findPaymentOrder(req, razorpayOrderId);

    if (!order) {
      return res.status(404).json({ message: "Payment order was not found." });
    }

    if (order.userEmail !== session.email) {
      return res.status(403).json({ message: "This payment order belongs to another account." });
    }

    if (order.purpose !== "consultation" || !order.consultation) {
      return res.status(400).json({ message: "Only consultation payments can start a session." });
    }

    if (order.status === "paid") {
      return res.json({
        message: "Payment was already verified. Consultation session opened.",
        purpose: order.purpose,
        ...(order.result || {})
      });
    }

    await markPaymentOrderFailed(req, razorpayOrderId);
    const booking = await createFailedBooking(req, order);

    res.json({
      message: "Payment failed. Consultation session opened.",
      purpose: order.purpose,
      booking
    });
  } catch (error) {
    next(error);
  }
});

router.post("/verify", async (req, res, next) => {
  const session = requireCustomer(req, res);
  if (!session) return;

  try {
    const {
      razorpay_order_id: razorpayOrderId,
      razorpay_payment_id: razorpayPaymentId,
      razorpay_signature: razorpaySignature
    } = req.body;

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return res.status(400).json({ message: "Razorpay payment details are required." });
    }

    const order = await findPaymentOrder(req, razorpayOrderId);

    if (!order) {
      return res.status(404).json({ message: "Payment order was not found." });
    }

    if (order.userEmail !== session.email) {
      return res.status(403).json({ message: "This payment order belongs to another account." });
    }

    if (order.status === "paid") {
      return res.json({
        message: "Payment was already verified.",
        purpose: order.purpose,
        ...(order.result || {})
      });
    }

    const isValidSignature = verifyRazorpaySignature({
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    });

    if (!isValidSignature) {
      await markPaymentOrderFailed(req, razorpayOrderId);
      return res.status(400).json({ message: "Payment signature verification failed." });
    }

    let payload;

    if (order.purpose === "consultation") {
      const booking = await createPaidBooking(req, order, razorpayPaymentId);
      payload = {
        booking
      };
    } else if (order.purpose === "wallet") {
      const wallet = await creditWalletForSession(req, session, order.wallet?.rechargeAmount || order.amount);
      payload = {
        recharge: {
          amount: order.wallet?.rechargeAmount || order.amount,
          currency: order.currency
        },
        wallet
      };
    } else {
      return res.status(400).json({ message: "Unsupported payment purpose." });
    }

    await markPaymentOrderPaid(req, razorpayOrderId, {
      razorpayPaymentId,
      payload
    });

    res.json({
      message: "Payment verified successfully.",
      purpose: order.purpose,
      ...payload
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
