const express = require('express');
const router = express.Router();
const { events } = require('../data/events');
const { venues } = require('../data/venues'); // Import venues

router.get('/', (req, res) => {
    if (Array.isArray(events)) {
        const enrichedEvents = events.map(event => ({
            ...event,
            venue: venues[event.venueId]?.name || 'Unknown Venue'
        }));
        res.json(enrichedEvents);
    } else {
        res.status(500).json({ error: 'Events data is not an array' });
    }
});

module.exports = router;
