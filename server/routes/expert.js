const express = require('express');
const router = express.Router();
const ExpertRequest = require('../models/ExpertRequest');

// Submit expert consultation request
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, city, requirement } = req.body;

    // Validation
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    const expertRequest = new ExpertRequest({
      name,
      phone,
      email,
      city,
      requirement
    });

    await expertRequest.save();

    // Here you can add notification logic
    // sendNotification(expertRequest);

    res.status(201).json({ 
      message: 'Thank you! Our expert will contact you soon.',
      request: expertRequest 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all expert requests (for admin)
router.get('/', async (req, res) => {
  try {
    const requests = await ExpertRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
