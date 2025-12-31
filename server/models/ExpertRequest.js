const mongoose = require('mongoose');

const ExpertRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  city: {
    type: String,
    trim: true
  },
  requirement: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ExpertRequest', ExpertRequestSchema);
