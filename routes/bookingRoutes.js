// backend/routes/bookingRoutes.js
const express = require('express');
const { createBooking } = require('../controllers/bookingController');
const checkSeatAvailability = require('../middleware/seatMiddleware');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, checkSeatAvailability, createBooking);

module.exports = router;
