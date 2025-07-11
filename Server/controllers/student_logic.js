const User = require('../modulas/user');
const jwt = require('jsonwebtoken');

// Register
exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json({ message: 'User created', user: { username: saved.username, email: saved.email } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', user: { username: user.username }, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
