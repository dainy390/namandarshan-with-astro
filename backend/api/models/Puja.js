const mongoose = require("mongoose");

const PujaSchema = new mongoose.Schema(
    {
        pujaId: { type: String, required: true, unique: true },
        templeId: { type: String, required: true },
        templeName: { type: String, required: true },
        pujaName: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        currency: { type: String, default: "INR" },
        available: { type: Boolean, default: true },
        imageUrl: String,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

module.exports = PujaSchema;