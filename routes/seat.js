
// backend/routes/seat.js
const express = require('express');
const { getSeats, createSeat } = require('../controllers/seatController');

const router = express.Router();

router.get('/', getSeats);
router.post('/', createSeat);

module.exports = router;
