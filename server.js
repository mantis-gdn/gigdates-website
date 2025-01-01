// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Root Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

// About Route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'about.html'));
});

// Reviews Route
app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'reviews.html'));
});

app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/css', 'styles.css'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
