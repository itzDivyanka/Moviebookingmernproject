// client/src/components/PrivateRoute.js
////import { Route, Redirect } from 'react-router-dom';
//import { useAuthState } from '../context/AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const { user } = useAuthState();

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 user ? <Component {...props} /> : <Redirect to="/login" />
//             }
//         />
//     );
// };

//export default PrivateRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuthState();

    return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

