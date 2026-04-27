const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const Category = require('../../models/Category');
const Product = require('../../models/Product');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../../public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage: storage });

// --- Products CRUD ---
router.get('/', async (req, res) => {
    const products = await Product.find().populate('category');
    res.render('admin/products/index', { title: 'Manage Products', products });
});

router.get('/add', async (req, res) => {
    const categories = await Category.find();
    res.render('admin/products/add', { title: 'Add Product', categories });
});

router.post('/add', upload.single('image'), async (req, res) => {
    const { name, price, category } = req.body;
    let imageUrl = '';
    if (req.file) {
        imageUrl = '/uploads/' + req.file.filename;
    }
    await Product.create({ name, price, category, image: imageUrl });
    res.redirect('/admin/products');
});

router.get('/edit/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    const categories = await Category.find();
    res.render('admin/products/edit', { title: 'Edit Product', product, categories });
});

router.post('/edit/:id', upload.single('image'), async (req, res) => {
    const { name, price, category } = req.body;
    const updateData = { name, price, category };
    
    if (req.file) {
        updateData.image = '/uploads/' + req.file.filename;
    }

    await Product.findByIdAndUpdate(req.params.id, updateData);
    res.redirect('/admin/products');
});

router.post('/delete/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
});

module.exports = router;
