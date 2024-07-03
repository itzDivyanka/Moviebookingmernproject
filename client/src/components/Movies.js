// client/src/components/Movies.js
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { toast } from 'react-toastify';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await API.get('/bookings/movies');
                setMovies(data);
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch movies');
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie._id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <p>{movie.showtimes.join(', ')}</p>
                    </div>
                ))
            ) : (
                <p>No movies available</p>
            )}
        </div>
    );
};

export default Movies;
