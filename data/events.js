const events = [
    // The Met RI Events
    {
        id: 1,
        title: "Brothers All Band – An Allman Brothers Experience",
        schedule: { date: "2024-12-28", doors: "7:00 PM", show: "8:00 PM" },
        venueId: "met_ri",
        venue: "The Met RI"
    },
    {
        id: 2,
        title: "New Year's Eve with Bearly Dead",
        schedule: { date: "2024-12-31", doors: "8:00 PM", show: "9:00 PM" },
        venueId: "met_ri",
        venue: "The Met RI"
    },
    {
        id: 4,
        title: "Jazz Fusion Night",
        schedule: { date: "2025-02-14", doors: "6:00 PM", show: "7:00 PM" },
        venueId: "met_ri",
        venue: "The Met RI"
    },

    // News Cafe Events
    {
        id: 3,
        title: "The Lousekateers and Billy Batts & The Made Men",
        schedule: { date: "2025-01-18", doors: "8:00 PM", show: "9:00 PM" },
        venueId: "news_cafe",
        venue: "News Cafe"
    },
    {
        id: 5,
        title: "Acoustic Sunday Brunch",
        schedule: { date: "2025-03-09", doors: "10:00 AM", show: "11:00 AM" },
        venueId: "news_cafe",
        venue: "News Cafe"
    },

    // Machines with Magnets Events
    {
        id: 6,
        title: "Experimental Noise Night",
        schedule: { date: "2025-04-21", doors: "7:30 PM", show: "8:30 PM" },
        venueId: "machines_with_magnets",
        venue: "Machines with Magnets"
    },
    {
        id: 7,
        title: "Indie Rock Revival",
        schedule: { date: "2025-05-11", doors: "6:00 PM", show: "7:00 PM" },
        venueId: "machines_with_magnets",
        venue: "Machines with Magnets"
    },

    // The Strand Events
    {
        id: 8,
        title: "Hip Hop Explosion",
        schedule: { date: "2025-06-15", doors: "7:00 PM", show: "8:00 PM" },
        venueId: "strand_ballroom",
        venue: "The Strand Ballroom"
    },
    {
        id: 9,
        title: "Classical Music Evening",
        schedule: { date: "2025-07-05", doors: "5:00 PM", show: "6:00 PM" },
        venueId: "strand_ballroom",
        venue: "The Strand Ballroom"
    },

    // Fête Music Hall Events
    {
        id: 10,
        title: "Folk Fest Saturday",
        schedule: { date: "2025-08-10", doors: "3:00 PM", show: "4:00 PM" },
        venueId: "fete_music_hall",
        venue: "Fête Music Hall"
    },
    {
        id: 11,
        title: "Electronic Beats Night",
        schedule: { date: "2025-09-18", doors: "9:00 PM", show: "10:00 PM" },
        venueId: "fete_music_hall",
        venue: "Fête Music Hall"
    }
];

module.exports = { events };
