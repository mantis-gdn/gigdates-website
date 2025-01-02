const events = [
    // The Met RI Events
    {
        id: 1,
        title: "Brothers All Band – An Allman Brothers Experience",
        schedule: {
            date: "2024-12-28",
            doors: "7:00 PM",
            show: "8:00 PM"
        },
        venueId: "met_ri"
    },
    {
        id: 2,
        title: "New Year's Eve with Bearly Dead",
        schedule: {
            date: "2024-12-31",
            doors: "8:00 PM",
            show: "9:00 PM"
        },
        venueId: "met_ri"
    },

    // News Cafe Events
    {
        id: 3,
        title: "The Lousekateers and Billy Batts & The Made Men",
        schedule: {
            date: "2025-01-18",
            doors: "8:00 PM",
            show: "9:00 PM"
        },
        venueId: "news_cafe"
    },

    // Machines with Magnets Events
    {
        id: 4,
        title: "Darklands – Indie Rock Night",
        schedule: {
            date: "2025-01-19",
            doors: "7:00 PM",
            show: "8:00 PM"
        },
        venueId: "machines_with_magnets"
    },

    {
        id: 5,
        title: "Experimental Noise Night",
        schedule: {
            date: "2025-01-25",
            doors: "8:00 PM",
            show: "9:00 PM"
        },
        venueId: "machines_with_magnets"
    },

    // The Parlor Events
    {
        id: 6,
        title: "Soul Sunday Brunch",
        schedule: {
            date: "Every Sunday",
            doors: "10:00 AM",
            show: "11:00 AM"
        },
        venueId: "the_parlor"
    },
    {
        id: 7,
        title: "Funk Friday Night",
        schedule: {
            date: "Every Friday",
            doors: "8:00 PM",
            show: "9:00 PM"
        },
        venueId: "the_parlor"
    }
];

module.exports = { events };
