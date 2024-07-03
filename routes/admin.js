// backend/routes/admin.js
const express = require('express');
const router = express.Router();
const { createScreen, getScreens, updateScreen, deleteScreen } = require('../controllers/adminController');
const { protect } = require('../middlewares/authMiddleware');

router.route('/screens')
    .post(protect, createScreen)
    .get(protect, getScreens);

router.route('/screens/:id')
    .put(protect, updateScreen)
    .delete(protect, deleteScreen);

module.exports = router;
