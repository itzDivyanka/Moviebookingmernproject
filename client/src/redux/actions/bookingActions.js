// client/src/redux/actions/bookingActions.js
import API from '../../services/api';
import { toast } from 'react-toastify';

export const createBooking = (formData) => async (dispatch) => {
    try {
        const { data } = await API.post('/bookings', formData);
        dispatch({ type: 'CREATE_BOOKING_SUCCESS', payload: data });
        toast.success('Booking created successfully!');
    } catch (error) {
        dispatch({ type: 'CREATE_BOOKING_FAIL', payload: error.response.data.message });
        toast.error(error.response.data.message || 'Booking failed!');
    }
};
