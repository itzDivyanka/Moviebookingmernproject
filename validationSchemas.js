// backend/validationSchemas.js
const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const bookingSchema = Joi.object({
    movieId: Joi.string().required(),
    seats: Joi.array().items(Joi.string()).required(),
    showtime: Joi.string().required(),
    totalPrice: Joi.number().required(),
});

module.exports = { registerSchema, loginSchema, bookingSchema };
