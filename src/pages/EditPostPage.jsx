// src/pages/EditPostPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const EditPostPage = () => {
  const { id } = useParams();
  const { posts, updatePost } = usePosts();
  const navigate = useNavigate();

  // Find the post to edit from the local state
  const postToEdit = posts.find(post => post.id === parseInt(id));

  const handleUpdatePost = async (postData) => {
    try {
      await updatePost(id, postData);
      navigate('/stories');
    } catch (err) {
      console.error("Failed to update post:", err);
      alert("Failed to update story.");
    }
  };

  if (!postToEdit) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-slate-500">
        <p>Searching for story...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PostForm 
          initialData={postToEdit} 
          onSubmit={handleUpdatePost} 
          isEditing={true} 
        />
      </div>
    </div>
  );
};

export default EditPostPage;