const mongoose = require("mongoose");

const ChadhavaSchema = new mongoose.Schema(
    {
        chadhavaId: { type: String, required: true, unique: true },
        templeId: { type: String, required: true },
        templeName: { type: String, required: true },
        chadhavaName: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        currency: { type: String, default: "INR" },
        available: { type: Boolean, default: true },
        imageUrl: String,
        stock: { type: Number, default: 0 },
        soldCount: { type: Number, default: 0 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

module.exports = ChadhavaSchema;