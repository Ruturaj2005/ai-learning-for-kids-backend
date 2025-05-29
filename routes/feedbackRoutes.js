const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/submit-feedback', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving feedback' });
  }
});

module.exports = router;
