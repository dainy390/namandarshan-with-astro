const crypto = require("crypto");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const PaymentOrderSchema = require("../models/PaymentOrder.js");

const PaymentOrder =
  mongoose.models.PaymentOrder || mongoose.model("PaymentOrder", PaymentOrderSchema);

const memoryPaymentOrders = new Map();
let razorpayClient = null;

function getRazorpayKeys() {
  return {
    keyId: process.env.RZP_KEY_ID || "",
    keySecret: process.env.RZP_KEY_SECRET || ""
  };
}

function requireRazorpayKeys() {
  const keys = getRazorpayKeys();

  if (!keys.keyId || !keys.keySecret) {
    const error = new Error(
      "Razorpay credentials are not configured. Add RZP_KEY_ID and RZP_KEY_SECRET to your .env file."
    );
    error.status = 500;
    throw error;
  }

  return keys;
}

function getRazorpayClient() {
  const keys = requireRazorpayKeys();

  if (!razorpayClient) {
    razorpayClient = new Razorpay({
      key_id: keys.keyId,
      key_secret: keys.keySecret
    });
  }

  return razorpayClient;
}

function isMongoReady(req) {
  return Boolean(req.app.locals.mongoReady) || mongoose.connection.readyState === 1;
}

function toPaise(amount) {
  return Math.round(Number(amount) * 100);
}

function makeReceipt(prefix) {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}_${Date.now().toString(36)}_${suffix}`.slice(0, 40);
}

function publicCheckoutOrder(paymentOrder) {
  const keys = requireRazorpayKeys();

  return {
    key: keys.keyId,
    purpose: paymentOrder.purpose,
    amount: paymentOrder.amount,
    currency: paymentOrder.currency,
    order: {
      id: paymentOrder.razorpayOrderId,
      amount: paymentOrder.amountPaise,
      currency: paymentOrder.currency,
      receipt: paymentOrder.receipt
    }
  };
}

async function createPaymentOrder(
  req,
  { session, purpose, amount, receiptPrefix, notes = {}, consultation = null, wallet = null }
) {
  const amountPaise = toPaise(amount);
  const currency = process.env.RAZORPAY_CURRENCY || "INR";
  const receipt = makeReceipt(receiptPrefix || purpose);
  const razorpayOrder = await getRazorpayClient().orders.create({
    amount: amountPaise,
    currency,
    receipt,
    notes
  });
  const paymentOrder = {
    razorpayOrderId: razorpayOrder.id,
    userId: session.id,
    userEmail: session.email,
    userName: session.name,
    purpose,
    amount: Number(amount),
    amountPaise,
    currency,
    receipt,
    status: "created",
    consultation,
    wallet
  };

  if (isMongoReady(req)) {
    return PaymentOrder.create(paymentOrder);
  }

  const now = new Date();
  const memoryOrder = {
    ...paymentOrder,
    createdAt: now,
    updatedAt: now
  };
  memoryPaymentOrders.set(memoryOrder.razorpayOrderId, memoryOrder);
  return memoryOrder;
}

async function findPaymentOrder(req, razorpayOrderId) {
  if (isMongoReady(req)) {
    return PaymentOrder.findOne({ razorpayOrderId });
  }

  return memoryPaymentOrders.get(razorpayOrderId) || null;
}

async function markPaymentOrderFailed(req, razorpayOrderId) {
  if (isMongoReady(req)) {
    return PaymentOrder.findOneAndUpdate(
      { razorpayOrderId },
      { status: "failed" },
      { new: true }
    );
  }

  const order = memoryPaymentOrders.get(razorpayOrderId);
  if (!order) return null;
  order.status = "failed";
  order.updatedAt = new Date();
  memoryPaymentOrders.set(razorpayOrderId, order);
  return order;
}

async function markPaymentOrderPaid(req, razorpayOrderId, result) {
  const update = {
    status: "paid",
    razorpayPaymentId: result.razorpayPaymentId,
    result: result.payload,
    paidAt: new Date()
  };

  if (isMongoReady(req)) {
    return PaymentOrder.findOneAndUpdate({ razorpayOrderId }, update, { new: true });
  }

  const order = memoryPaymentOrders.get(razorpayOrderId);
  if (!order) return null;
  Object.assign(order, update, { updatedAt: new Date() });
  memoryPaymentOrders.set(razorpayOrderId, order);
  return order;
}

function verifyRazorpaySignature({ razorpayOrderId, razorpayPaymentId, razorpaySignature }) {
  const { keySecret } = requireRazorpayKeys();
  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");
  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(String(razorpaySignature || ""));

  return (
    expectedBuffer.length === receivedBuffer.length &&
    crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
  );
}

module.exports = {
  getRazorpayKeys,
  getRazorpayClient,
  createPaymentOrder,
  findPaymentOrder,
  markPaymentOrderFailed,
  markPaymentOrderPaid,
  verifyRazorpaySignature,
  publicCheckoutOrder
};

