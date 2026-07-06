const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Prasadam = require('../models/Prasadam');

// Get all
router.get('/', async (req, res) => {
    try {
        const prasadams = await Prasadam.find().sort({ id: 1 });
        res.json(prasadams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one
router.get('/:idOrSlug', async (req, res) => {
    try {
        const param = req.params.idOrSlug;
        // Search by ID or Slug (with various suffix possibilities for robustness)
        const query = {
            $or: [
                { id: param },
                { slug: param },
                { slug: param + '-prasadam' },
                { slug: param.replace(/-prasadam$/, '') }
            ]
        };
        const prasadam = await Prasadam.findOne(query);

        if (!prasadam) return res.status(404).json({ message: 'Prasadam not found' });
        res.json(prasadam);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create
router.post('/', async (req, res) => {
    try {
        // Generate ID if not provided, based on title
        if (!req.body.id) {
            req.body.id = req.body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        if (!req.body.slug && req.body.title) {
            const base = req.body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            req.body.slug = base.endsWith('-prasadam') ? base : base + '-prasadam';
        }

        const newPrasadam = new Prasadam(req.body);
        const savedPrasadam = await newPrasadam.save();
        res.status(201).json(savedPrasadam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (!updateData.slug && updateData.title) {
            const base = updateData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            updateData.slug = base.endsWith('-prasadam') ? base : base + '-prasadam';
        }

        const updatedPrasadam = await Prasadam.findOneAndUpdate(
            { id: req.params.id },
            updateData,
            { new: true }
        );
        if (!updatedPrasadam) return res.status(404).json({ message: 'Prasadam not found' });
        res.json(updatedPrasadam);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedPrasadam = await Prasadam.findOneAndDelete({ id: req.params.id });
        if (!deletedPrasadam) return res.status(404).json({ message: 'Prasadam not found' });
        res.json({ message: 'Prasadam deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
