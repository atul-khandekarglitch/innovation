/**
 * server.js - Node.js Express REST API Entrypoint
 * Jharkhand Societal Innovation Collaboration Portal
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static frontend root
app.use(express.static(path.join(__dirname, '../')));

// Mock API Route Interceptors (Translates API contract matrix)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/challenges', require('./routes/challenges'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/gis', require('./routes/gis'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/universities', require('./routes/universities'));
app.use('/api/analytics', require('./routes/analytics'));

// Fallback SPA Router wildcard
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  Jharkhand Innovation Collaboration Portal Server`);
  console.log(`  Running on: http://localhost:${PORT}`);
  console.log(`====================================================`);
});
