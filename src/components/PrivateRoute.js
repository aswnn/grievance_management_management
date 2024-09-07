import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, password }) => {
  const storedUser = JSON.parse(localStorage.getItem(localStorage.key(0))); // Retrieve user data
  
  // Check if Supervisor or Assignee is logged in based on default email
  if (storedUser && storedUser.email === 'admin@admin.com' && password === 1234) {
    return children;
  } else if (storedUser && storedUser.email === 'assignee@gmail.com' && password===1234) {
    return children;
  } else if (storedUser ) {
    return children;
  } else {
    return <Navigate to="/auth" replace />;
  }
};

export default PrivateRoute;