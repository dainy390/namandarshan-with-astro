const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const WalletSchema = require('../models/Wallet');
const User = require('../models/User');
const { readAuthSession } = require('../middleware/auth');

const Wallet = mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema);

function requireUserSession(req, res) {
    const session = readAuthSession(req);
    if (!session) {
        res.status(401).json({ success: false, message: 'Please login first.' });
        return null;
    }

    if (session.role !== 'user') {
        res.status(403).json({ success: false, message: 'Only customer accounts can access wallets.' });
        return null;
    }

    return session;
}

// Get the authenticated user's wallet balance
router.get('/balance', async (req, res) => {
    const session = requireUserSession(req, res);
    if (!session) return;

    try {
        const wallet = await Wallet.findOne({ userId: session.id }).lean();
        res.status(200).json({
            success: true,
            balance: Number(wallet?.balance) || 0,
            wallet: wallet || { userId: session.id, balance: 0 }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching wallet balance', error });
    }
});

// Create a new wallet for a user
router.post('/create', async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const wallet = new Wallet({ userId });
        await wallet.save();
        res.status(201).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error creating wallet', error });
    }
});

// Get wallet details for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const wallet = await Wallet.findOne({ userId });
        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        }
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallet', error });
    }
});

// Update wallet balance for a user
router.put('/:userId', async (req, res) => {
    const { userId } = req.params; 
    const { balance } = req.body;
    try {
        const wallet = await Wallet.findOneAndUpdate(
            { userId },
            { balance },
            { new: true }
        );
        if (!wallet) {
            return res.status(404).json({ message: 'Wallet not found' });
        }
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error updating wallet', error });
    }
});

// Recharge the wallet balance for a user
router.post('/recharge', async (req, res) => {
    const session = requireUserSession(req, res);
    if (!session) return;

    const amount = Number(req.body.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
        return res.status(400).json({ success: false, message: 'Invalid recharge amount' });
    }

    try {
        const wallet = await Wallet.findOneAndUpdate(
            { userId: session.id },
            { $inc: { balance: amount } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        res.status(200).json({ success: true, balance: wallet.balance, wallet });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error recharging wallet', error });
    }
});

module.exports = router;
