document.addEventListener('DOMContentLoaded', async () => {
    const eventContainer = document.getElementById('event-container');
    const eventId = window.location.pathname.split('/').pop();

    async function fetchEventDetails() {
        try {
            const response = await fetch(`/api/events/${eventId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const event = await response.json();

            eventContainer.innerHTML = `
                <div class="event-details">
                    <h1>${event.title}</h1>
                    <p><strong>Date:</strong> ${event.schedule.date}</p>
                    <p><strong>Doors Open:</strong> ${event.schedule.doors}</p>
                    <p><strong>Show Starts:</strong> ${event.schedule.show}</p>
                    <p><strong>Venue:</strong> <a href="/venues/${event.venueId}">${event.venue}</a></p>
\                </div>
            `;
        } catch (error) {
            console.error('Error fetching event details:', error);
            eventContainer.innerHTML = `<p>Failed to load event details. Error: ${error.message}</p>`;
        }
    }

    fetchEventDetails();
});
