// backend/models/Seat.js
const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  screen: { type: Number, required: true },
  row: { type: String, required: true },
  number: { type: Number, required: true },
  isBooked: { type: Boolean, default: false },
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
