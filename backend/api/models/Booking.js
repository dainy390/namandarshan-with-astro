const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    astrologerId: { type: String, required: true },
    astrologerName: { type: String, required: true },
    customerId: String,
    customerEmail: String,
    customerName: { type: String, required: true },
    concern: { type: String, required: true },
    mode: { type: String, enum: ["chat", "call"], required: true },
    durationMinutes: { type: Number, default: 5 },
    bookingFee: Number,
    pricePerMinute: Number,
    amountPaid: Number,
    walletDebitedAmount: Number,
    walletDebitedAt: Date,
    currency: { type: String, default: "INR" },
    paymentStatus: { type: String, default: "paid" },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    paidAt: Date,
    sessionStartedAt: Date,
    sessionEndsAt: Date,
    birthDate: String,
    birthTime: String,
    place: String,
    etaMinutes: Number,
    status: { type: String, default: "confirmed" },
    chatMessages: [
      {
        id: String,
        senderId: String,
        senderRole: String,
        senderName: String,
        body: String,
        createdAt: Date
      }
    ],
    callSignals: [
      {
        id: String,
        senderRole: String,
        type: { type: String },
        data: mongoose.Schema.Types.Mixed,
        createdAt: Date
      }
    ],
    devoteeRating: { type: Number, min: 1, max: 5 },
    devoteeFeedback: { type: String, trim: true, default: "" },
    devoteeRatedAt: Date
  },
  { timestamps: true }
);

module.exports = BookingSchema;
