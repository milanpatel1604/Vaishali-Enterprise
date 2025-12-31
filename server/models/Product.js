const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['A Grade', 'B Grade', 'High Gloss', 'Matte Finish', 'Textured', 'Wood Finish', 'Solid Colors', 'Digital Print']
  },
  grade: {
    type: String,
    required: true,
    enum: ['A', 'B']
  },
  finish: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  specifications: {
    size: String,
    thickness: String,
    material: String
  },
  features: [{
    type: String
  }],
  inStock: {
    type: Boolean,
    default: true
  },
  isNew: {
    type: Boolean,
    default: false
  },
  isBestSeller: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);
