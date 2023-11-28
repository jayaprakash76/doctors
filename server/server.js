const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the Angular dist folder
app.use(express.static(path.join(__dirname, '../doximity/dist/doximity')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../doximity/dist/doximity/index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`); // Use backticks for string interpolation
});
