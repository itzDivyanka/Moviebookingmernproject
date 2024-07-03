// backend/middlewares/authMiddleware.js
// backend/middleware/authMiddleware.js
/*
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { encryptData, decryptData } = require('../utils/encryption');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

const encryptSensitiveData = asyncHandler(async (req, res, next) => {
    if (req.body.password) {
        req.body.password = encryptData(req.body.password);
    }

    if (req.body.sensitiveField) {
        req.body.sensitiveField = encryptData(req.body.sensitiveField);
    }

    next();
});

const decryptSensitiveData = asyncHandler(async (req, res, next) => {
    if (req.user) {
        req.user.password = decryptData(req.user.password);
    }

    if (req.user.sensitiveField) {
        req.user.sensitiveField = decryptData(req.user.sensitiveField);
    }

    next();
});

module.exports = { protect, encryptSensitiveData, decryptSensitiveData };

*/
// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');
const { encryptData, decryptData } = require('../utils/encryption');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

module.exports = { protect,admin, encryptData, decryptData };
