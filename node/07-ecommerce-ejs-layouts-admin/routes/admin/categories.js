const express = require('express');
const router = express.Router();
const Category = require('../../models/Category');

// --- Categories CRUD ---
router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('admin/categories/index', { title: 'Manage Categories', categories });
});

router.get('/add', (req, res) => {
    res.render('admin/categories/add', { title: 'Add Category' });
});

router.post('/add', async (req, res) => {
    await Category.create({ name: req.body.name });
    res.redirect('/admin/categories');
});

router.get('/edit/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.render('admin/categories/edit', { title: 'Edit Category', category });
});

router.post('/edit/:id', async (req, res) => {
    await Category.findByIdAndUpdate(req.params.id, { name: req.body.name });
    res.redirect('/admin/categories');
});

router.post('/delete/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin/categories');
});

module.exports = router;
