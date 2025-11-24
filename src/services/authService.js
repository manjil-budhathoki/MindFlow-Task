const mockUser = {
  id: 1,
  username: 'testuser',
  email: 'test@example.com',
  password: 'password123', 
};

export const registerUser = async (userData) => {
  console.log('Registering user:', userData);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (userData.email === mockUser.email) {
    return Promise.reject({ message: 'Email already exists' });
  }

  const newUser = { id: 2, username: userData.username, email: userData.email };
  const token = 'fake-jwt-token-for-new-user';
  return Promise.resolve({ user: newUser, token });
};

export const loginUser = async (credentials) => {
  console.log('Logging in with:', credentials);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (credentials.email === mockUser.email && credentials.password === mockUser.password) {
    const user = { id: mockUser.id, username: mockUser.username, email: mockUser.email };
    const token = 'fake-jwt-token-for-existing-user';
    return Promise.resolve({ user, token });
  } else {
    return Promise.reject({ message: 'Invalid email or password' });
  }
};