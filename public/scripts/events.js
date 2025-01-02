document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');

    async function fetchEvents() {
        try {
            const response = await fetch('/api/events');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error('API did not return an array of events');
            }

            eventsContainer.innerHTML = data.map(event => `
                <div class="event-card" data-venue-id="${event.venueId}">
                    <h2 class="venue-name"><a href="/venues/${event.venueId}">${event.venue}</a></h2>
                    <p><strong>Date:</strong> ${event.schedule.date}</p>
                    <h3>${event.title}</h3>
                    <p><strong>Doors Open:</strong> ${event.schedule.doors}</p>
                    <p><strong>Show Starts:</strong> ${event.schedule.show}</p>
                </div>
            `).join('');

            // Add click event to the entire event card
            document.querySelectorAll('.event-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    // Prevent navigating twice if the link was clicked directly
                    if (e.target.tagName === 'A') return;
                    const venueId = card.getAttribute('data-venue-id');
                    window.location.href = `/venues/${venueId}`;
                });
            });

        } catch (error) {
            console.error('Error fetching events:', error);
            eventsContainer.innerHTML = `<p>Failed to load events. Error: ${error.message}</p>`;
        }
    }

    fetchEvents();
});
