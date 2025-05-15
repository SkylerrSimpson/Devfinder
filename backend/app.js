const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes/profileRoutes');
const cors = require('cors');

// Create Express server
const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB database
mongoose.connect(process.env.ATLAS_URI);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/profile', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
