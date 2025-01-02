### GET /api/events
- **Description:** Fetches all events.
- **Response Example:**
```json
[
    {
        "id": 1,
        "title": "Brothers All Band",
        "schedule": { "date": "2024-12-28", "doors": "7:00 PM", "show": "8:00 PM" },
        "venueId": "met_ri"
    }
]

### GET /api/venues
- **Description:** Fetches all venues
- **Response Example:**
```json
{
    "met_ri": {
        "id": "met_ri",
        "name": "The Met RI",
        "link": "https://themetri.com/events"
    }
}


---

## 🎯 **Step 2: Frontend Integration with API**  
Currently, your pages (`index.html`, `about.html`, `reviews.html`) are static. Let’s make them dynamic:

### 📌 Goals:
1. **Dynamic Event Listing**: Fetch event data via `/api/events` and render dynamically on the frontend.  
2. **Dynamic Venue Details**: Populate venue links and names dynamically using `/api/venues`.  
3. **Search & Filter Functionality**: Allow searching and filtering events/venues.  
