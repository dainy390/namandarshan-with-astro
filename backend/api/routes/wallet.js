const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const BookingSchema = require('../models/Booking');
const PanditProfileSchema = require('../models/PanditProfile');
const User = require('../models/User');
const { readAuthSession } = require('../middleware/auth');
const { notifyPanditBookingRequest } = require('../services/panditRequestNotifications');
const {
    PANDIT_JOIN_GRACE_MS,
    schedulePanditJoinTimeout,
} = require('../services/consultationAutoEnd');
const {
    creditWallet,
    getVerifiedWalletBalance,
} = require('../services/walletIntegrity');

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
const PanditProfile =
    mongoose.models.PanditProfile || mongoose.model('PanditProfile', PanditProfileSchema);

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

function createBookingId() {
    return `AST-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now()
        .toString()
        .slice(-4)}`;
}

function normalizeDuration(value) {
    const duration = Number.parseInt(value, 10);
    if (!Number.isFinite(duration)) return 5;
    return Math.min(60, Math.max(5, duration));
}

function isMongoReady(req) {
    return Boolean(req.app.locals.mongoReady) || mongoose.connection.readyState === 1;
}

async function findPanditProfile(astrologerId) {
    const id = String(astrologerId || '').trim();
    if (!id) return null;

    const lookup = [{ email: id.toLowerCase() }];
    if (mongoose.Types.ObjectId.isValid(id)) {
        lookup.push({ _id: id }, { userId: id });
    }

    return PanditProfile.findOne({ $or: lookup, isActive: true, status: { $ne: 'offline' } }).lean();
}

function toSerializableBooking(booking) {
    const item = typeof booking?.toObject === 'function' ? booking.toObject() : booking;

    return {
        bookingId: item.bookingId,
        astrologerId: item.astrologerId,
        astrologerName: item.astrologerName,
        customerId: item.customerId,
        customerEmail: item.customerEmail,
        customerName: item.customerName,
        concern: item.concern,
        mode: item.mode,
        durationMinutes: item.durationMinutes,
        bookingFee: item.bookingFee,
        pricePerMinute: item.pricePerMinute,
        paymentStatus: item.paymentStatus,
        status: item.status,
        sessionStartedAt: item.sessionStartedAt?.toISOString?.() || item.sessionStartedAt || null,
        sessionEndsAt: item.sessionEndsAt?.toISOString?.() || item.sessionEndsAt || null,
        panditJoinedAt: item.panditJoinedAt?.toISOString?.() || item.panditJoinedAt || null,
        endedReason: item.endedReason || '',
        autoEndedAt: item.autoEndedAt?.toISOString?.() || item.autoEndedAt || null,
    };
}

function sessionSnapshot(booking) {
    const startedAt = new Date(booking.sessionStartedAt || booking.createdAt || Date.now());
    const endsAt = new Date(
        booking.sessionEndsAt ||
        startedAt.getTime() + Math.max(1, Number(booking.durationMinutes) || 5) * 60 * 1000
    );
    const remainingSeconds = Math.max(0, Math.ceil((endsAt.getTime() - Date.now()) / 1000));
    const panditJoinedAt = booking.panditJoinedAt ? new Date(booking.panditJoinedAt) : null;
    const hasPanditJoined = panditJoinedAt && !Number.isNaN(panditJoinedAt.getTime());
    const status = booking.status === 'completed' || remainingSeconds <= 0 ? 'completed' : 'active';

    return {
        startedAt: startedAt.toISOString(),
        endsAt: endsAt.toISOString(),
        autoEndAt: hasPanditJoined || status === 'completed'
            ? null
            : new Date(startedAt.getTime() + PANDIT_JOIN_GRACE_MS).toISOString(),
        panditJoinedAt: hasPanditJoined ? panditJoinedAt.toISOString() : null,
        waitingForPandit: !hasPanditJoined && status !== 'completed',
        remainingSeconds,
        durationMinutes: Math.max(1, Number(booking.durationMinutes) || 5),
        status,
    };
}

async function startWalletSession(req, res) {
    const session = requireUserSession(req, res);
    if (!session) return;

    if (!isMongoReady(req)) {
        return res.status(503).json({ success: false, message: 'Consultation sessions are temporarily unavailable.' });
    }

    try {
        const { balance } = await getVerifiedWalletBalance(session.id);

        if (!Number.isFinite(balance) || balance <= 0) {
            return res.status(403).json({ success: false, message: 'Add money to your wallet to start this consultation.' });
        }

        const { astrologerId, mode, name, concern, birthDate, birthTime, place, durationMinutes } = req.body;
        const consultationMode = String(mode || '').trim();

        if (!['chat', 'call'].includes(consultationMode)) {
            return res.status(400).json({ success: false, message: 'A valid consultation mode is required.' });
        }

        const profile = await findPanditProfile(astrologerId);
        if (!profile) {
            return res.status(404).json({ success: false, message: 'Pandit profile not found.' });
        }

        const modes = profile.modes?.length ? profile.modes : ['chat', 'call'];
        if (!modes.includes(consultationMode)) {
            return res.status(400).json({
                success: false,
                message: `${profile.displayName} is not available for ${consultationMode}.`,
            });
        }

        const duration = normalizeDuration(durationMinutes);
        const pricePerMinute = Number(profile.pricePerMinute || 0);
        const bookingFee = pricePerMinute * duration;

        if (bookingFee <= 0) {
            return res.status(400).json({ success: false, message: 'Unable to calculate consultation fees.' });
        }

        const startedAt = new Date();
        const booking = await Booking.create({
            bookingId: createBookingId(),
            astrologerId: String(profile.userId || profile._id),
            astrologerName: profile.displayName,
            customerId: session.id,
            customerEmail: session.email,
            customerName: String(name || session.name || '').trim() || 'Devotee',
            concern: String(concern || `Live ${consultationMode} consultation`).trim() || `Live ${consultationMode} consultation`,
            mode: consultationMode,
            durationMinutes: duration,
            bookingFee,
            pricePerMinute,
            amountPaid: 0,
            currency: process.env.RAZORPAY_CURRENCY || 'INR',
            paymentStatus: 'wallet_pending',
            birthDate,
            birthTime,
            place,
            etaMinutes: 0,
            status: 'active',
            sessionStartedAt: startedAt,
            sessionEndsAt: new Date(startedAt.getTime() + duration * 60 * 1000),
        });

        void notifyPanditBookingRequest(req, booking, {
            panditEmail: profile.email,
            panditName: profile.displayName,
        });
        schedulePanditJoinTimeout(req, booking, Booking);

        res.status(201).json({
            success: true,
            message: 'Consultation session started.',
            booking: toSerializableBooking(booking),
            session: sessionSnapshot(booking),
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error starting consultation session', error });
    }
}

// Get the authenticated user's wallet balance
router.get('/balance', async (req, res) => {
    const session = requireUserSession(req, res);
    if (!session) return;

    try {
        const { balance, wallet } = await getVerifiedWalletBalance(session.id);
        res.status(200).json({
            success: true,
            balance,
            wallet
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

        const { wallet } = await getVerifiedWalletBalance(userId);
        res.status(201).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error creating wallet', error });
    }
});

// Get wallet details for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const { wallet } = await getVerifiedWalletBalance(userId);
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallet', error });
    }
});

// Update wallet balance for a user
router.put('/:userId', async (req, res) => {
    res.status(403).json({
        success: false,
        message: 'Direct wallet balance edits are disabled. Use a signed recharge or spend transaction.'
    });
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
        const result = await creditWallet({
            userId: session.id,
            amount,
            source: 'manual-recharge-route',
            description: 'Wallet recharge route'
        });
        res.status(200).json({ success: true, balance: result.balance, wallet: result.wallet });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error recharging wallet', error });
    }
});

router.post('/session', startWalletSession);
router.post('/wallet-session', startWalletSession);

module.exports = router;
