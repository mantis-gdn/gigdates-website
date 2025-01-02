const express = require('express');
const router = express.Router();
const { venues } = require('../data/venues');
const { events } = require('../data/events');

// Get specific venue by ID with its events
router.get('/:id', (req, res) => {
    const venueId = req.params.id;
    const venue = venues.find(v => v.id === venueId);

    if (!venue) {
        return res.status(404).json({ error: 'Venue not found' });
    }

    // Filter events for this venue
    const venueEvents = events.filter(event => event.venueId === venueId);

    res.json({ venue, events: venueEvents });
});

module.exports = router;
