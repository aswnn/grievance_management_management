import React from 'react';
import {  Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const storedUser = JSON.parse(localStorage.getItem(localStorage.key(0))); // Retrieve user data

  // Check if the user is logged in and has the correct role
  if (storedUser && storedUser.role === role) {
    return children; 
  } else {
    return <Navigate to="/" replace />; 
  }
};

export default PrivateRoute;


