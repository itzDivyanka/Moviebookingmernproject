// backend/routes/booking.js
// const express = require('express');
// const { createBooking, getBookings } = require('../controllers/bookingController');

// const router = express.Router();

// router.post('/', createBooking);
// router.get('/', getBookings);

// module.exports = router;
// backend/routes/booking.js
// const express = require('express');
// const router = express.Router();
// const { getMovies, createBooking, getBooking } = require('../controllers/bookingController');
// const { protect } = require('../middlewares/authMiddleware');

// router.get('/movies', getMovies);
// router.post('/', protect, createBooking);
// router.get('/:id', protect, getBooking);

// module.exports = router;
// backend/routes/bookingRoutes.js
// const express = require('express');
// const { createBooking } = require('../controllers/bookingController');
// const checkSeatAvailability = require('../middleware/seatMiddleware');
// const { protect } = require('../middleware/authMiddleware');

// const router = express.Router();

// router.post('/', protect, checkSeatAvailability, createBooking);

// module.exports = router;
// backend/routes/booking.js
// backend/routes/booking.js
const express = require('express');
const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(protect, createBooking)
    .get(protect, getBookings);

router.route('/:id')
    .get(protect, getBookingById)
    .put(protect, admin, updateBooking)
    .delete(protect, admin, deleteBooking);

module.exports = router;

