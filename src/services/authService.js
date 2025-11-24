// src/services/authService.js

// This is a mock user database. In a real app, this would be on a server.
const mockUser = {
  id: 1,
  username: 'testuser',
  email: 'test@example.com',
  password: 'password123', // In a real app, never store plain text passwords
};

// This function simulates a registration API call.
export const registerUser = async (userData) => {
  console.log('Registering user:', userData);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real API, you would check if the email is already in use.
  if (userData.email === mockUser.email) {
    return Promise.reject({ message: 'Email already exists' });
  }

  // On success, return a dummy user and a JWT token.
  const newUser = { id: 2, username: userData.username, email: userData.email };
  const token = 'fake-jwt-token-for-new-user';
  return Promise.resolve({ user: newUser, token });
};

// This function simulates a login API call.
export const loginUser = async (credentials) => {
  console.log('Logging in with:', credentials);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Check if the email and password match our mock user.
  if (credentials.email === mockUser.email && credentials.password === mockUser.password) {
    const user = { id: mockUser.id, username: mockUser.username, email: mockUser.email };
    const token = 'fake-jwt-token-for-existing-user';
    return Promise.resolve({ user, token });
  } else {
    return Promise.reject({ message: 'Invalid email or password' });
  }
};