import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn'); // check if user is logged in
  return (
    <Route {...rest} render={props => (
      isAuthenticated
        ? <Component {...props} />
        : <Navigate to={{ pathname: '/', state: { from: props.location } }} />
    )} />
  );
};

export default PrivateRoute;
