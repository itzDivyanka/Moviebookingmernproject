// backend/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  seats: [{ type: String, required: true }],
  showtime: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
  isPaid: { type: Boolean, default: false },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
