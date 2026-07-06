const mongoose = require("mongoose");

const ReferralSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  referralCount: { type: Number, default: 0 },
  successfulReferrals: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Referral", ReferralSchema);
