const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Product = require('../models/Product');

// Admin Layout Middleware
router.use((req, res, next) => {
    res.locals.layout = 'admin/layout';
    next();
});

// Admin Dashboard
router.get('/', async (req, res) => {
    const productCount = await Product.countDocuments();
    const categoryCount = await Category.countDocuments();
    res.render('admin/dashboard', { title: 'Dashboard', productCount, categoryCount });
});

// Seed Database Route
router.post('/seed', async (req, res) => {
    try {
        await Product.deleteMany({});
        await Category.deleteMany({});

        const electronics = await Category.create({ name: 'Electronics' });
        const accessories = await Category.create({ name: 'Accessories' });

        await Product.insertMany([
            { name: 'Premium Wireless Headphones', price: 199.99, image: '/images/headphones.jpg', category: electronics._id },
            { name: 'Smart Fitness Watch', price: 149.50, image: '/images/watch.jpg', category: electronics._id },
            { name: 'Mechanical Keyboard', price: 120.00, image: '/images/keyboard.jpg', category: accessories._id },
            { name: 'Ergonomic Mouse', price: 79.99, image: '/images/mouse.jpg', category: accessories._id }
        ]);

        res.redirect('/admin');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error seeding database');
    }
});

// Mount modular admin routes
const categoriesRouter = require('./admin/categories');
const productsRouter = require('./admin/products');

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);

module.exports = router;
