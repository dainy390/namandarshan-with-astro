const mongoose = require('mongoose');

const WhatsAppLeadSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    messages: {
        type: [String],
        default: []
    },
    status: {
        type: String,
        enum: ['capturing', 'complete', 'converted'],
        default: 'capturing'
    },
    chat_mode: {
        type: String,
        enum: ['ai', 'agent'],
        default: 'ai'
    },
    last_agent_chat: {
        type: Date,
        default: null
    },
    unreadCount: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// We export the schema so we can use it with a specific connection
module.exports = WhatsAppLeadSchema;
