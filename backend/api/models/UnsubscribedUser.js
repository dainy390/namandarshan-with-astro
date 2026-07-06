const mongoose = require('mongoose');

const UnsubscribedUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  unsubscribedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for fast lookups
UnsubscribedUserSchema.index({ email: 1 });

module.exports = mongoose.model('UnsubscribedUser', UnsubscribedUserSchema, 'unsubscribed_users');
