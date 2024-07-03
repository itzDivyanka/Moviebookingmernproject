// backend/controllers/adminController.js
const Screen = require('../models/Screen');
const Seat = require('../models/Seat');

exports.createScreen = async (req, res) => {
    const { screenNumber, seats } = req.body;

    const screen = new Screen({ screenNumber, seats });
    const createdScreen = await screen.save();
    res.status(201).json(createdScreen);
};

exports.getScreens = async (req, res) => {
    const screens = await Screen.find({}).populate('seats', 'seatNumber');
    res.json(screens);
};

exports.updateScreen = async (req, res) => {
    const { screenNumber, seats } = req.body;
    const screen = await Screen.findById(req.params.id);

    if (screen) {
        screen.screenNumber = screenNumber || screen.screenNumber;
        screen.seats = seats || screen.seats;
        const updatedScreen = await screen.save();
        res.json(updatedScreen);
    } else {
        res.status(404).json({ message: 'Screen not found' });
    }
};

exports.deleteScreen = async (req, res) => {
    const screen = await Screen.findById(req.params.id);

    if (screen) {
        await screen.remove();
        res.json({ message: 'Screen removed' });
    } else {
        res.status(404).json({ message: 'Screen not found' });
    }
};
