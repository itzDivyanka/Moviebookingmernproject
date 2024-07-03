// // backend/middlewares/seatMiddleware.js
// const Seat = require('../models/Seat');

// const lockSeats = async (req, res, next) => {
//     const { seats } = req.body;

//     const lockedSeats = await Seat.find({ _id: { $in: seats }, isBooked: false });

//     if (lockedSeats.length !== seats.length) {
//         return res.status(400).json({ message: 'One or more seats are already booked' });
//     }

//     lockedSeats.forEach(seat => seat.isBooked = true);
//     await Seat.bulkSave(lockedSeats);

//     req.lockedSeats = lockedSeats;
//     next();
// };

// const releaseSeats = async (req, res, next) => {
//     if (req.lockedSeats) {
//         req.lockedSeats.forEach(seat => seat.isBooked = false);
//         await Seat.bulkSave(req.lockedSeats);
//     }
//     next();
// };

// module.exports = { lockSeats, releaseSeats };
// backend/middleware/seatMiddleware.js
/*const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');

const checkSeatAvailability = asyncHandler(async (req, res, next) => {
    const { movieId, seats, showtime } = req.body;

    const movie = await Movie.findById(movieId);

    if (!movie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    const show = movie.showtimes.find((s) => s.time === showtime);

    if (!show) {
        res.status(400);
        throw new Error('Showtime not found');
    }

    const requestedSeats = seats.split(',').map(Number);
    const availableSeats = show.availableSeats;

    const allSeatsAvailable = requestedSeats.every((seat) => availableSeats.includes(seat));

    if (!allSeatsAvailable) {
        res.status(400);
        throw new Error('One or more seats are not available');
    }

    req.movie = movie;
    req.showtime = showtime;
    req.requestedSeats = requestedSeats;
    next();
});

module.exports = checkSeatAvailability;
*/
// backend/middleware/seatMiddleware.js
const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');

const checkSeatAvailability = asyncHandler(async (req, res, next) => {
    const { movieId, seats, showtime } = req.body;

    const movie = await Movie.findById(movieId);

    if (!movie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    const show = movie.showtimes.find((s) => s.time === showtime);

    if (!show) {
        res.status(400);
        throw new Error('Showtime not found');
    }

    const requestedSeats = seats.split(',').map(Number);
    const availableSeats = show.availableSeats;

    const allSeatsAvailable = requestedSeats.every((seat) => availableSeats.includes(seat));

    if (!allSeatsAvailable) {
        res.status(400);
        throw new Error('One or more seats are not available');
    }

    req.movie = movie;
    req.showtime = showtime;
    req.requestedSeats = requestedSeats;
    next();
});

module.exports = checkSeatAvailability;
