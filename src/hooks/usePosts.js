import { useEffect } from 'react';
import usePostsStore from './usePostsStore';
import * as postService from '../services/postService';

const usePosts = () => {
  const {
    posts,
    loading,
    error,
    setPosts,
    addPost: addPostToStore,
    updatePost: updatePostInStore,
    removePost: removePostFromStore,
    setLoading,
    setError,
  } = usePostsStore();

  // Effect to fetch posts when the hook is first used
  useEffect(() => {
    // Fetch only if posts are not already loaded
    if (posts.length === 0) {
      fetchAllPosts();
    }
  }, [posts.length]); 

  const fetchAllPosts = async () => {
    setLoading(true);
    try {
      const fetchedPosts = await postService.fetchPosts();
      setPosts(fetchedPosts);
      setError(null);
    } catch (err) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    setLoading(true);
    try {
      const newPost = await postService.addPost(postData);
      addPostToStore(newPost);
      setError(null);
    } catch (err) {
      setError('Failed to create post.');
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (postId, postData) => {
    setLoading(true);
    try {
      const updatedPost = await postService.updatePost(postId, postData);
      updatePostInStore(updatedPost);
      setError(null);
    } catch (err) {
      setError('Failed to update post.');
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (postId) => {
    setLoading(true);
    try {
      await postService.deletePost(postId);
      removePostFromStore(postId);
      setError(null);
    } catch (err) {
      setError('Failed to delete post.');
    } finally {
      setLoading(false);
    }
  };


  return {
    posts,
    loading,
    error,
    fetchAllPosts,
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePosts;