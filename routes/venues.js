const express = require('express');
const router = express.Router();
const { venues } = require('../data/venues');
const { events } = require('../data/events');

// Route to get a specific venue by slug
router.get('/:slug', (req, res) => {
    const { slug } = req.params;

    // Find the venue by slug
    const venue = venues[slug];

    if (!venue) {
        return res.status(404).json({ error: 'Venue not found' });
    }

    // Get events for this venue
    const venueEvents = events.filter(event => event.venueId === slug);

    res.json({
        venue,
        events: venueEvents
    });
});

module.exports = router;
