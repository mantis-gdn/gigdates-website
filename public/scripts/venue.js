document.addEventListener('DOMContentLoaded', async () => {
    const venueContainer = document.getElementById('venue-container');
    const slug = window.location.pathname.split('/').pop(); // Get the slug from URL

    async function fetchVenueDetails() {
        try {
            const response = await fetch(`/api/venues/${slug}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const { venue, events } = await response.json();

            // Render Venue Details
            venueContainer.innerHTML = `
                <div class="venue-header">
                    <h1>${venue.name}</h1>
                    <p><strong>Website:</strong> <a href="${venue.link}" target="_blank">${venue.link}</a></p>
                </div>
                <h2>Upcoming Events</h2>
                <div id="events-container">
                    ${events.map(event => `
                        <div class="event-card">
                            <h3>${event.title}</h3>
                            <p><strong>Date:</strong> ${event.schedule.date}</p>
                            <p><strong>Doors Open:</strong> ${event.schedule.doors}</p>
                            <p><strong>Show Starts:</strong> ${event.schedule.show}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } catch (error) {
            console.error('Error fetching venue details:', error);
            venueContainer.innerHTML = `<p>Failed to load venue details. Error: ${error.message}</p>`;
        }
    }

    fetchVenueDetails();
});
