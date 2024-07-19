const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;  // Use the PORT environment variable (for deployment) or 3000 by default

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve the React app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
