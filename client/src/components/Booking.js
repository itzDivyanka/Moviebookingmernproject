// // client/src/components/Booking.js
// import React, { useState } from 'react';
// import API from '../services/api';

// const Booking = ({ movie }) => {
//     const [seats, setSeats] = useState([]);
//     const [showtime, setShowtime] = useState('');
//     const [totalPrice, setTotalPrice] = useState(0);

//     const handleBooking = async (e) => {
//         e.preventDefault();

//         try {
//             const { data } = await API.post('/bookings', { movieId: movie._id, seats, showtime, totalPrice });
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleBooking}>
//             <label>
//                 Select Seats:
//                 <input type="text" value={seats.join(', ')} onChange={(e) => setSeats(e.target.value.split(', '))} />
//             </label>
//             <label>
//                 Select Showtime:
//                 <input type="text" value={showtime} onChange={(e) => setShowtime(e.target.value)} />
//             </label>
//             <label>
//                 Total Price:
//                 <input type="number" value={totalPrice} onChange={(e) => setTotalPrice(Number(e.target.value))} />
//             </label>
//             <button type="submit">Book</button>
//         </form>
//     );
// };

// export default Booking;
// client/src/components/Booking.js
/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API from '../services/api';
import { toast } from 'react-toastify';

const Booking = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const { data } = await API.get(`/movies/${id}`);
                setMovie(data);
            } catch (error) {
                toast.error('Failed to load movie details');
            }
        };

        fetchMovie();
    }, [id]);

    const validationSchema = Yup.object().shape({
        seats: Yup.string().required('Seats are required'),
        showtime: Yup.string().required('Showtime is required'),
        totalPrice: Yup.number().required('Total price is required').positive('Total price must be a positive number'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await API.post('/bookings', { movieId: id, ...values });
            toast.success('Booking successful!');
            setMessage('Booking successful');
            resetForm();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Booking failed');
            setMessage('Booking failed');
        }
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <Formik
            initialValues={{ seats: '', showtime: '', totalPrice: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Select Seats</label>
                    <Field name="seats" type="text" />
                    <ErrorMessage name="seats" component="div" />
                </div>
                <div>
                    <label>Select Showtime</label>
                    <Field name="showtime" type="text" />
                    <ErrorMessage name="showtime" component="div" />
                </div>
                <div>
                    <label>Total Price</label>
                    <Field name="totalPrice" type="number" />
                    <ErrorMessage name="totalPrice" component="div" />
                </div>
                <button type="submit">Book</button>
                {message && <p>{message}</p>}
            </Form>
        </Formik>
    );
};

export default Booking;
*/
// client/src/components/Booking.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API from '../services/api';
import { toast } from 'react-toastify';

const Booking = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');

    const validationSchema = Yup.object().shape({
        seats: Yup.string().required('Seats are required'),
        showtime: Yup.string().required('Showtime is required'),
        totalPrice: Yup.number().required('Total price is required').positive('Total price must be a positive number'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            await API.post('/bookings', { movieId: id, ...values });
            toast.success('Booking successful!');
            setMessage('Booking successful');
            resetForm();
        } catch (error) {
            toast.error('Booking failed');
            setMessage('Booking failed');
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={{ seats: '', showtime: '', totalPrice: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Select Seats</label>
                    <Field name="seats" type="text" />
                    <ErrorMessage name="seats" component="div" />
                </div>
                <div>
                    <label>Select Showtime</label>
                    <Field name="showtime" type="text" />
                    <ErrorMessage name="showtime" component="div" />
                </div>
                <div>
                    <label>Total Price</label>
                    <Field name="totalPrice" type="number" />
                    <ErrorMessage name="totalPrice" component="div" />
                </div>
                <button type="submit">Book</button>
                {message && <p>{message}</p>}
            </Form>
        </Formik>
    );
};

export default Booking;
