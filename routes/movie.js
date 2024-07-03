// backend/routes/movie.js
// const express = require('express');
// const { getMovies, createMovie } = require('../controllers/movieController');

// const router = express.Router();

// router.get('/', getMovies);
// router.post('/', createMovie);

// module.exports = router;
// backend/controllers/bookingController.js
const Movie = require('../models/Movie');
const Booking = require('../models/Booking');
const Seat = require('../models/Seat');

exports.getMovies = async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
};

exports.createBooking = async (req, res) => {
    const { movieId, seats, showtime, totalPrice } = req.body;

    const booking = new Booking({
        user: req.user._id,
        movie: movieId,
        seats,
        showtime,
        totalPrice,
    });

    const bookedSeats = await Seat.find({ _id: { $in: seats } });
    bookedSeats.forEach(seat => seat.isBooked = true);
    await Seat.bulkSave(bookedSeats);

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
};

exports.getBooking = async (req, res) => {
    const booking = await Booking.findById(req.params.id)
        .populate('user', 'name email')
        .populate('movie', 'title')
        .populate('seats', 'seatNumber');
    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
};
