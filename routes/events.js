const express = require('express');
const router = express.Router();
const { events } = require('../data/events');
const { venues } = require('../data/venues'); // Import venues

// Get all events with enriched venue names
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

// Get details of a specific event by event_id
router.get('/:event_id', (req, res) => {
    const { event_id } = req.params;
    const event = events.find(event => event.id === parseInt(event_id));

    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }

    // Enrich event details with venue information
    const enrichedEvent = {
        ...event,
        venue: venues[event.venueId]?.name || 'Unknown Venue',
        venueLink: venues[event.venueId]?.link || '#'
    };

    res.json(enrichedEvent);
});

module.exports = router;
