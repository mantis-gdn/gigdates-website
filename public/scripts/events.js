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
                <div class="event-card">
                    <h2>${event.title}</h2>
                    <p><strong>Date:</strong> ${event.schedule.date}</p>
                    <p><strong>Doors Open:</strong> ${event.schedule.doors}</p>
                    <p><strong>Show Starts:</strong> ${event.schedule.show}</p>
                    <p><strong>Venue:</strong> ${event.venue}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error fetching events:', error);
            eventsContainer.innerHTML = `<p>Failed to load events. Error: ${error.message}</p>`;
        }
    }

    fetchEvents();
});
