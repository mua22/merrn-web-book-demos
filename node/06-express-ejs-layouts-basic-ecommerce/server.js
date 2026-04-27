const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set Templating Engine
app.use(expressLayouts);
app.set('layout', './layout');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Premium Wireless Headphones', price: 199.99, image: '/images/headphones.jpg' },
        { id: 2, name: 'Smart Fitness Watch', price: 149.50, image: '/images/watch.jpg' },
        { id: 3, name: 'Mechanical Keyboard', price: 120.00, image: '/images/keyboard.jpg' },
        { id: 4, name: 'Ergonomic Mouse', price: 79.99, image: '/images/mouse.jpg' }
    ];
    res.render('products', { title: 'Products', products });
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
