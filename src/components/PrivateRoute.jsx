// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // The `loading` state here is from the initial hydration of the Zustand store.
  // While Zustand is reading from localStorage, isAuthenticated might be false initially.
  // This check prevents a flicker or premature redirect to /login.
  // In a real app with async auth checks, this loading state would be more crucial.
  // For our setup, this is good practice.
  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back to that page after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;