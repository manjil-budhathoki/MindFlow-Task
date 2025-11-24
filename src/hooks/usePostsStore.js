// src/hooks/usePostsStore.js
import { create } from 'zustand';

const usePostsStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  updatePost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    })),
  removePost: (postId) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default usePostsStore;