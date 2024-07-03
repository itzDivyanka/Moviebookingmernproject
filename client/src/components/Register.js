import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const { data } = await axios.post('/api/auth/register', values);
            localStorage.setItem('profile', JSON.stringify(data));
            toast.success('Registration successful!');
            navigate('/movies');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Registration failed!');
            console.error(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </>
    );
};

export default Register;
