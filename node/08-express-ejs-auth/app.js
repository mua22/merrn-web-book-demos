const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const config = require('config');

// Routes
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const app = express();

// Connect to MongoDB
mongoose.connect(config.get('dbURI'))
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json()); // For parsing application/json (API)
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded (Web forms)

// Session Middleware
app.use(session({
  secret: config.get('sessionSecret'),
  resave: false,
  saveUninitialized: false
}));

// Route Middlewares
app.use('/', webRoutes);
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
