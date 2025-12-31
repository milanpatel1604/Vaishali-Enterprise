const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category, grade, search } = req.query;
    let query = {};

    if (category) query.category = category;
    if (grade) query.grade = grade;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { code: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create product (for admin)
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get featured products
router.get('/featured/new', async (req, res) => {
  try {
    const products = await Product.find({ isNew: true }).limit(8);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get best sellers
router.get('/featured/bestsellers', async (req, res) => {
  try {
    const products = await Product.find({ isBestSeller: true }).limit(6);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
