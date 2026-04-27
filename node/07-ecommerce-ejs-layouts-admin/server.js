const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/techstore')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Models
const Product = require('./models/Product');
const Category = require('./models/Category');

const app = express();
const PORT = process.env.PORT || 3000;

// Body Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static('public'));

// Admin Routes
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.render('products', { title: 'Products', products });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Server Error');
    }
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
