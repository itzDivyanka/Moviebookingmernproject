// // backend/controllers/bookingController.js
// const Booking = require('../models/Booking');
// const Seat = require('../models/Seat');

// exports.createBooking = async (req, res) => {
//   const { user, movie, seats, showtime, totalPrice } = req.body;
//   try {
//     const booking = new Booking({ user, movie, seats, showtime, totalPrice });
//     await booking.save();

//     // Mark seats as booked
//     await Seat.updateMany({ _id: { $in: seats } }, { isBooked: true });

//     res.status(201).json(booking);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
// // 
// exports.getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate('user').populate('movie');
//     res.status(200).json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// backend/controllers/bookingController.js
/*const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendBookingConfirmation = async (booking) => {
    const msg = {
        to: booking.user.email,
        from: 'your_email@example.com',
        subject: 'Booking Confirmation',
        text: `Your booking for ${booking.movie.title} is confirmed. Seats: ${booking.seats.map(seat => seat.seatNumber).join(', ')}`,
    };

    await sgMail.send(msg);
};

exports.createBooking = async (req, res) => {
    // Existing code...

    if (createdBooking) {
        await sendBookingConfirmation(createdBooking);
    }
};

*/
// backend/controllers/bookingController.js
/*
const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const createBooking = asyncHandler(async (req, res) => {
    const { movie, showtime, requestedSeats } = req;
    const { userId, totalPrice } = req.body;

    // Reserve seats
    const show = movie.showtimes.find((s) => s.time === showtime);
    show.availableSeats = show.availableSeats.filter((seat) => !requestedSeats.includes(seat));
    await movie.save();

    const booking = await Booking.create({
        userId,
        movieId: movie._id,
        seats: requestedSeats,
        showtime,
        totalPrice,
    });

    res.status(201).json({
        success: true,
        data: booking,
    });
});

module.exports = { createBooking };

*/
// backend/controllers/bookingController.js
// backend/controllers/bookingController.js
const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const createBooking = asyncHandler(async (req, res) => {
    const { user, movie, seats, totalPrice } = req.body;

    const booking = new Booking({
        user,
        movie,
        seats,
        totalPrice
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});

const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id });
    res.json(bookings);
});

const getBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        res.json(booking);
    } else {
        res.status(404);
        throw new Error('Booking not found');
    }
});

const updateBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        booking.seats = req.body.seats || booking.seats;
        booking.totalPrice = req.body.totalPrice || booking.totalPrice;

        const updatedBooking = await booking.save();
        res.json(updatedBooking);
    } else {
        res.status(404);
        throw new Error('Booking not found');
    }
});

const deleteBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        await booking.remove();
        res.json({ message: 'Booking removed' });
    } else {
        res.status(404);
        throw new Error('Booking not found');
    }
});

module.exports = {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
};
