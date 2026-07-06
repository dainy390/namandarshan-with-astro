const express = require('express');
const router = express.Router();
const Referral = require('../models/Referral');

// GET all referrals
router.get('/all', async (req, res) => {
    try {
        const referrals = await Referral.find().sort({ createdAt: -1 });
        res.json({ success: true, data: referrals });
    } catch (err) {
        console.error("Error fetching referrals:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET single referral by ID
router.get('/:id', async (req, res) => {
    try {
        const referral = await Referral.findById(req.params.id);
        if (!referral) return res.status(404).json({ success: false, message: 'Referral not found' });
        res.json({ success: true, data: referral });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// POST: Create a new referral (for manual or automated setup)
router.post('/', async (req, res) => {
    try {
        const { name, email, code } = req.body;
        if (!name || !email || !code) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const newReferral = new Referral({ name, email, code });
        const savedReferral = await newReferral.save();
        res.status(201).json({ success: true, data: savedReferral });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// POST: Generate or Fetch Referral Code
router.post('/generate', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!email || !name) {
            return res.status(400).json({ success: false, message: "Name and Email are required" });
        }

        // 1. Check if user already has a referral code
        let referral = await Referral.findOne({ email });

        if (referral) {
            return res.json({
                success: true,
                referralCode: referral.code,
                message: "Existing referral code retrieved"
            });
        }

        // 2. Generate a new unique code if one doesn't exist
        // Pattern: NAMAN + Name Prefix + Random/Deterministic Suffix
        const namePrefix = name.substring(0, 3).toUpperCase();
        const emailHash = email.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const seed = (emailHash % 10000).toString().padStart(4, '0');
        const newCode = `NAMAN-${namePrefix}${seed}`;

        // 3. Save to database for CRM to see
        referral = new Referral({
            name,
            email,
            code: newCode
        });

        await referral.save();

        res.status(201).json({
            success: true,
            referralCode: newCode,
            message: "New referral code generated and saved to CRM"
        });

    } catch (err) {
        console.error("Error in /generate:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// DELETE: Remove a referral record
router.delete('/:id', async (req, res) => {
    try {
        const deletedReferral = await Referral.findByIdAndDelete(req.params.id);
        if (!deletedReferral) return res.status(404).json({ success: false, message: 'Referral not found' });
        res.json({ success: true, message: 'Referral deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
