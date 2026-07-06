const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        orderId: { type: String, required: true, unique: true },
        bookingId: { type: String, required: true },
        customerId: { type: String, required: true },
        customerName: { type: String, required: true },
        customerEmail: { type: String, required: true },
        amount: { type: Number, required: true },
        currency: { type: String, default: "INR" },
        paymentStatus: { type: String, default: "pending" },
        razorpayOrderId: String,
        razorpayPaymentId: String,
        paidAt: Date,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

module.exports = OrderSchema;