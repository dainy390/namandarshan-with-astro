const express = require('express');
const router = express.Router();
const Chadhava = require('../models/Chadhava');
const mongoose = require('mongoose');

// Get all
router.get('/', async (req, res) => {
    try {
        const chadhavas = await Chadhava.find().sort({ id: 1 });
        res.json(chadhavas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one
router.get('/:idOrSlug', async (req, res) => {
    try {
        const param = req.params.idOrSlug;
        const query = { $or: [{ id: param }, { slug: param }] };
        const chadhava = await Chadhava.findOne(query);

        if (!chadhava) return res.status(404).json({ message: 'Chadhava not found' });
        res.json(chadhava);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create
router.post('/', async (req, res) => {
    try {
        // Generate ID if not provided? Usually Chadhava IDs are numeric strings in data.ts "1", "2".
        // But for new ones, maybe we use UUID or timestamp or similar if not provided.
        // Let's rely on client sending ID or generate one.
        if (!req.body.id) {
            const count = await Chadhava.countDocuments();
            req.body.id = (count + 1).toString();
        }

        const newChadhava = new Chadhava(req.body);
        const savedChadhava = await newChadhava.save();
        res.status(201).json(savedChadhava);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (!updateData.slug && updateData.name) {
            const base = updateData.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            updateData.slug = base.endsWith('-chadhava') ? base : base + '-chadhava';
        }

        const updatedChadhava = await Chadhava.findOneAndUpdate(
            { id: req.params.id },
            updateData,
            { new: true }
        );
        if (!updatedChadhava) return res.status(404).json({ message: 'Chadhava not found' });
        res.json(updatedChadhava);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedChadhava = await Chadhava.findOneAndDelete({ id: req.params.id });
        if (!deletedChadhava) return res.status(404).json({ message: 'Chadhava not found' });
        res.json({ message: 'Chadhava deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
