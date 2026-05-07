const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');
const jwtAuth = require('../middlewares/jwtAuth');
const config = require('config');

// API Login - Get JWT
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

    // Create and assign a token
    const token = jwt.sign({ _id: user._id, username: user.username }, config.get('jwtSecret'), { expiresIn: '1h' });
    res.json({ token, message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// API Protected Route - Get Products
router.get('/products', jwtAuth, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// API Protected Route - Create Product
router.post('/products', jwtAuth, async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const newProduct = new Product({ name, price, description });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
