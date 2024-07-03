// client/src/redux/actions/authActions.js
import API from '../../services/api';
import { toast } from 'react-toastify';

export const register = (formData) => async (dispatch) => {
    try {
        const { data } = await API.post('/auth/register', formData);
        dispatch({ type: 'AUTH_SUCCESS', payload: data });
        localStorage.setItem('profile', JSON.stringify(data));
        toast.success('Registration successful!');
    } catch (error) {
        dispatch({ type: 'AUTH_ERROR', payload: error.response.data.message });
        toast.error(error.response.data.message || 'Registration failed!');
    }
};

export const login = (formData) => async (dispatch) => {
    try {
        const { data } = await API.post('/auth/login', formData);
        dispatch({ type: 'AUTH_SUCCESS', payload: data });
        localStorage.setItem('profile', JSON.stringify(data));
        toast.success('Login successful!');
    } catch (error) {
        dispatch({ type: 'AUTH_ERROR', payload: error.response.data.message });
        toast.error(error.response.data.message || 'Login failed!');
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('profile');
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully!');
};
