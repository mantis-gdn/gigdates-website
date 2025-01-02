// server.js

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes


// Events Page
app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'events.html'));
});

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'about.html'));
});

// Reviews Page
app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'reviews.html'));
});

// Serve CSS
app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/css', 'styles.css'));
});

// API Routes (For Dynamic Events)
app.use('/api/events', require('./routes/events'));
app.use('/api/venues', require('./routes/venues'));

// 404 Fallback
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
