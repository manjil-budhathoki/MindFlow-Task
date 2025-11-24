import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from './useAuthStore';
import * as authService from '../services/authService';

const useAuth = () => {
  const { login: setLogin, logout: setLogout, ...authState } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuthAction = async (action, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await action(...args);
      setLogin(response.user, response.token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const register = (userData) => handleAuthAction(authService.registerUser, userData);
  const login = (credentials) => handleAuthAction(authService.loginUser, credentials);

  const logout = () => {
    setLogout();
    navigate('/login'); 
  };

  return {
    ...authState,
    loading,
    error,
    register,
    login,
    logout,
  };
};

export default useAuth;