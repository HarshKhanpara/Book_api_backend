const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
