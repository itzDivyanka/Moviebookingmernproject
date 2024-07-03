// backend/models/Screen.js
const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    screenNumber: { type: Number, required: true },
    seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
});

const Screen = mongoose.model('Screen', screenSchema);
module.exports = Screen;
