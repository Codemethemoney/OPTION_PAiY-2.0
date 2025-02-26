const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON request bodies
app.use(express.json());

// Define routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// Create a simple API endpoint
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from OPTION_PAiY-2.0!',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API endpoints:`);
  console.log(`  - GET /api/status`);
  console.log(`  - GET /api/hello`);
});
