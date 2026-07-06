const mongoose = require('mongoose');

const EmailLogSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  sentAt: {
    type: Date,
    default: Date.now,
    index: true // For weekly aggregation queries
  },
  campaignId: {
    type: String // Optional reference to campaign
  },
  subject: {
    type: String
  },
  status: {
    type: String,
    enum: ['sent', 'failed'],
    default: 'sent'
  }
}, {
  timestamps: true
});

// Compound index for weekly stats queries
EmailLogSchema.index({ sentAt: -1 });
EmailLogSchema.index({ email: 1, sentAt: -1 });

module.exports = mongoose.model('EmailLog', EmailLogSchema, 'email_logs');
