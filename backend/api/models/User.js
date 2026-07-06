const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin', 'manager', 'astrologer', 'pandit'],
    },
    authProvider: {
      type: String,
      default: 'local',
    },
    socialId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);
