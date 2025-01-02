document.addEventListener('DOMContentLoaded', async () => {
    const venueContainer = document.getElementById('venue-container');
    const venueEventsContainer = document.getElementById('venue-events');
    const venueSlug = window.location.pathname.split('/').pop(); // Get the venue slug

    async function fetchVenueDetails() {
        try {
            const response = await fetch(`/api/venues/${venueSlug}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Venue Details
            venueContainer.querySelector('.venue-header').innerHTML = `
                <h1>${data.venue.name}</h1>
                <p><a href="${data.venue.link}" target="_blank">Visit Venue Website</a></p>
            `;

            // Event Cards
            venueEventsContainer.innerHTML = data.events.map(event => `
                <div class="event-card" data-event-id="${event.id}">
                    <h3 class="event-title">${event.title}</h3>
                    <p><strong>Date:</strong> ${event.schedule.date}</p>
                    <p><strong>Doors Open:</strong> ${event.schedule.doors}</p>
                    <p><strong>Show Starts:</strong> ${event.schedule.show}</p>
                </div>
            `).join('');

            // Add click listener to event cards
            document.querySelectorAll('.event-card').forEach(card => {
                card.addEventListener('click', () => {
                    const eventId = card.getAttribute('data-event-id');
                    window.location.href = `/events/${eventId}`;
                });
            });
        } catch (error) {
            console.error('Error fetching venue details:', error);
            venueContainer.innerHTML = `<p>Failed to load venue details. Error: ${error.message}</p>`;
        }
    }

    fetchVenueDetails();
});
