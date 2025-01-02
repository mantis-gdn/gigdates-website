const express = require('express');
const router = express.Router();
const { venues } = require('../data/venues'); // Ensure correct path
const { events } = require('../data/events'); // Mocked events data source

// Route to get a specific venue by slug
router.get('/:slug', (req, res) => {
    const { slug } = req.params;

    // Get the venue by slug
    const venue = venues[slug];

    if (!venue) {
        return res.status(404).json({ error: 'Venue not found' });
    }

    // Filter events specifically for this venue
    const venueEvents = events.filter(event => event.venueId === slug);

    res.json({ venue, events: venueEvents });
});

module.exports = router;