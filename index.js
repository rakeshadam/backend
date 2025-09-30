const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

// Catch-all: serve index.html for frontend routing
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
