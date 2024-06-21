const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit new feedback
router.post('/', async (req, res) => {
  const feedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  try {
    const newFeedback = await feedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
