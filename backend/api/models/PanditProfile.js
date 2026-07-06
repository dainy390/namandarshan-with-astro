const mongoose = require('mongoose');

const PanditProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      sparse: true,
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
    },
    displayName: {
      type: String,
      trim: true,
      default: '',
    },
    expertise: {
      type: String,
      trim: true,
      default: '',
    },
    bio: {
      type: String,
      trim: true,
      default: '',
    },
    languages: {
      type: [String],
      default: [],
    },
    modes: {
      type: [String],
      enum: ['chat', 'call'],
      default: ['chat', 'call'],
    },
    pricePerMinute: {
      type: Number,
      default: 13,
      min: 1,
    },
    experienceYears: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ['online', 'busy', 'offline'],
      default: 'online',
    },
    avatar: {
      type: String,
      trim: true,
      default: '',
    },
    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = PanditProfileSchema;
