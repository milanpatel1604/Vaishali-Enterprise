const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await contact.save();

    // Here you can add email sending logic using nodemailer
    // sendEmail(contact);

    res.status(201).json({ 
      message: 'Thank you for contacting us! We will get back to you soon.',
      contact 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
