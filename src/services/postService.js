import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Add a new post
export const addPost = async (postData) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

// Update an existing post
export const updatePost = async (postId, postData) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${postId}`, postData);
    return response.data;
  } catch (error) {
    console.error(`Error updating post ${postId}:`, error);
    throw error;
  }
};

// Delete a post
export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_URL}/posts/${postId}`);
    return postId; // Return the id of the deleted post for state update
  } catch (error) {
    console.error(`Error deleting post ${postId}:`, error);
    throw error;
  }
};