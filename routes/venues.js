// routes/venues.js

const express = require('express');
const router = express.Router();
const venues = require('../data/venues');

// Get all venues
router.get('/', (req, res) => {
    res.json(venues);
});

// Get a single venue by ID
router.get('/:id', (req, res) => {
    const venue = venues[req.params.id];
    if (venue) {
        res.json(venue);
    } else {
        res.status(404).json({ error: 'Venue not found' });
    }
});

module.exports = router;
