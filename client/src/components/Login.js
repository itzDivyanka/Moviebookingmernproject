// // frontend/src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const { email, password } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/auth/login', formData);
//       console.log(res.data);
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
    
//     <form onSubmit={onSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={onChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={onChange}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
// frontend/src/components/Login.js
/*
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      toast.success('Login successful!');
      console.log(res.data);
    } catch (err) {
      toast.error(err.response.data.message);
      console.error(err.response.data);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
*/
// frontend/src/components/Login.js
/*import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      toast.success('Login successful!');
      console.log(res.data);
    } catch (err) {
      toast.error(err.response.data.message);
      console.error(err.response.data);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
*/
// client/src/components/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import { toast } from 'react-toastify';
import { useAuthDispatch } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAuthDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const { data } = await API.post('/auth/login', values);
            localStorage.setItem('profile', JSON.stringify(data));
            dispatch({ type: 'LOGIN', payload: data });
            toast.success('Login successful!');
            navigate('/movies');
        } catch (error) {
            toast.error(error.response.data.message || 'Login failed!');
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
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
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
};

export default Login;
