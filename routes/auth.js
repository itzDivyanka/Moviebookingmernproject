/*const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user
    user = new User({ name, email, password });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the user
    await user.save();

    // Create a token
    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// User login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create a token
    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
// backend/routes/booking.js
const validate = require('../middlewares/validateMiddleware');
const { bookingSchema } = require('../validationSchemas');

router.post('/', protect, validate(bookingSchema), lockSeats, createBooking, releaseSeats);


module.exports = router;
*/
// backend/routes/auth.js
// backend/routes/auth.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser); // Ensure registerUser is correctly imported
router.post('/login', loginUser); // Ensure loginUser is correctly imported
router.route('/profile')
    .get(protect, getUserProfile) // Ensure getUserProfile is correctly imported
    .put(protect, updateUserProfile); // Ensure updateUserProfile is correctly imported

module.exports = router;

