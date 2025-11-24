import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const CreatePostPage = () => {
  const { createPost } = usePosts();
  const navigate = useNavigate();

  const handleCreatePost = async (postData) => {
    try {
      
      const newPost = { ...postData, userId: 1 };
      await createPost(newPost);
      navigate('/stories');
    } catch (err) {
      console.error("Failed to create post:", err);
      alert("Failed to publish story.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PostForm onSubmit={handleCreatePost} />
      </div>
    </div>
  );
};

export default CreatePostPage;