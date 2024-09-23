import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './UserAuthContext';

const ProtectedRoute = () => {
  const { token } = useContext(UserContext);

  return token ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedRoute;