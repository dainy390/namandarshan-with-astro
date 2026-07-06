const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userAvatar: {
        type: String,
        default: ''
    },
    userEmail: {
        type: String,
        trim: true
    },
    templeName: {
        type: String,
        trim: true
    },
    placeName: {
        type: String,
        trim: true
    },
    stateName: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String // S3 URL
    },
    postType: {
        type: String,
        enum: ['temple_suggestion', 'devotee_story', 'general'],
        default: 'devotee_story'
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'approved' // Automatically approved for now
    },
    likes: {
        type: Number,
        default: 0
    },
    targetLikes: {
        type: Number,
        default: 0 // Will be randomized on creation if not provided
    },
    comments: [{
        user: String, // Legacy ID
        userId: { type: String, trim: true },
        userName: { type: String, trim: true },
        userAvatar: { type: String, default: '' },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }]
}, {
    timestamps: true
});

// Index for performance
PostSchema.index({ createdAt: -1 });
PostSchema.index({ postType: 1 });

module.exports = mongoose.model('Post', PostSchema);
