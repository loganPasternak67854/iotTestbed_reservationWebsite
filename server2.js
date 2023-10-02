const express = require('express');
const app = express();
const path = require('path');

const port = 8080; // Port number to listen on

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Serve the "Testbed Website.html" file
app.get('/', (req, res) => {
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

