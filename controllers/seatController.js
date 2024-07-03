// backend/controllers/seatController.js
const Seat = require('../models/Seat');

exports.getSeats = async (req, res) => {
  try {
    const seats = await Seat.find();
    res.status(200).json(seats);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createSeat = async (req, res) => {
  const { screen, row, number } = req.body;
  try {
    const seat = new Seat({ screen, row, number });
    await seat.save();
    res.status(201).json(seat);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
