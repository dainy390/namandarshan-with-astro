const mongoose = require('mongoose');

const ChatHistorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    user_message: {
        type: String,
        required: true
    },
    bot_response: {
        type: String,
        required: false
    },
    intent: {
        type: String,
        default: 'info'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// We export the schema so we can use it with a specific connection
module.exports = ChatHistorySchema;
