const express = require('express');
const router = express.Router();
const { events } = require('../data/events');
const { venues } = require('../data/venues'); // Import venues

router.get('/', (req, res) => {
    if (Array.isArray(events)) {
        const enrichedEvents = events.map(event => ({
            ...event,
            venue: venues.find(venue => venue.id === event.venueId)?.name || 'Unknown Venue'
        }));
        res.json(enrichedEvents);
    } else {
        res.status(500).json({ error: 'Events data is not an array' });
    }
});

// Get event by ID
router.get('/:id', (req, res) => {
    const eventId = parseInt(req.params.id); // Ensure eventId is parsed as an integer
    const event = events.find(e => e.id === eventId);

    if (event) {
        res.json(event);
    } else {
        res.status(404).json({ error: 'Event not found' });
    }
});


module.exports = router;
