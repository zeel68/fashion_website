const express = require('express');
const router = express.Router();
const User = require('../modulas/user');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user: { username, email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user: { username: user.username, email } });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
