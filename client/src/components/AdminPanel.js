// frontend/src/components/AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ title: '', genre: '', showtimes: '' });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get('/api/movies');
                setMovies(res.data);
            } catch (err) {
                toast.error('Failed to fetch movies');
                console.error(err.response ? err.response.data : err.message);
            }
        };

        fetchMovies();
    }, []);

    const onChange = (e) => setNewMovie({ ...newMovie, [e.target.name]: e.target.value });

    const addMovie = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/movies', newMovie);
            setMovies([...movies, res.data]);
            setNewMovie({ title: '', genre: '', showtimes: '' });
            toast.success('Movie added successfully!');
        } catch (err) {
            toast.error('Failed to add movie');
            console.error(err.response ? err.response.data : err.message);
        }
    };

    return (
        <div>
            <ToastContainer />
            <h2>Admin Panel</h2>
            <form onSubmit={addMovie}>
                <input
                    type="text"
                    name="title"
                    value={newMovie.title}
                    onChange={onChange}
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="genre"
                    value={newMovie.genre}
                    onChange={onChange}
                    placeholder="Genre"
                    required
                />
                <input
                    type="text"
                    name="showtimes"
                    value={newMovie.showtimes}
                    onChange={onChange}
                    placeholder="Showtimes"
                    required
                />
                <button type="submit">Add Movie</button>
            </form>

            <h3>Movies</h3>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        {movie.title} - {movie.genre} - {new Date(movie.showtimes[0]).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
