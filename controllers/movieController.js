// backend/controllers/movieController.js
const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createMovie = async (req, res) => {
  const { title, genre, showtimes } = req.body;
  try {
    const movie = new Movie({ title, genre, showtimes });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
