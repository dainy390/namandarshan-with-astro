const mongoose = require('mongoose');

const WalletTransactionSchema = new mongoose.Schema(
    {
        transactionId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        userId: {
            type: String,
            required: true,
            index: true
        },
        type: {
            type: String,
            enum: ['baseline', 'credit', 'debit'],
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        balanceAfter: {
            type: Number,
            required: true
        },
        source: {
            type: String,
            default: 'system'
        },
        sourceId: String,
        description: String,
        metadata: mongoose.Schema.Types.Mixed,
        signature: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

WalletTransactionSchema.index({ userId: 1, createdAt: 1 });

module.exports = WalletTransactionSchema;
