const express = require('express');
const router = express.Router();
const User = require('../models/User');
const sessionAuth = require('../middlewares/sessionAuth');
const bcrypt = require('bcryptjs');

// Render login page
router.get('/login', (req, res) => {
  if (req.session.userId) return res.redirect('/dashboard');
  res.render('login', { error: null });
});

// Handle login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.render('login', { error: 'Invalid username or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('login', { error: 'Invalid username or password' });
    }
    
    // Set session
    req.session.userId = user._id;
    req.session.username = user.username;
    res.redirect('/dashboard');
  } catch (error) {
    res.render('login', { error: 'An error occurred' });
  }
});

// Render register page
router.get('/register', (req, res) => {
  if (req.session.userId) return res.redirect('/dashboard');
  res.render('register', { error: null });
});

// Handle register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('register', { error: 'Username already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    
    res.redirect('/login');
  } catch (error) {
    res.render('register', { error: 'An error occurred during registration' });
  }
});

// Render dashboard (protected)
router.get('/dashboard', sessionAuth, (req, res) => {
  res.render('dashboard', { username: req.session.username });
});

// Handle logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Root route
router.get('/', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
