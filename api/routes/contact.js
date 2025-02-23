const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Ensure this path is correct

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, query } = req.body;

  try {
    const newContact = new Contact({ name, email, query });
    await newContact.save();
    res.status(201).json({ message: 'Contact data saved successfully' });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


