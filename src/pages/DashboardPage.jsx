// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import PostCard from '../components/PostCard';
import { FaPenNib, FaStream } from 'react-icons/fa';

const DashboardPage = () => {
  const { posts, loading, error, deletePost } = usePosts();

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to remove this story?')) {
      deletePost(postId);
    }
  };

  // 1. Loading State (Minimalist Pulse)
  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
      </div>
      <p className="mt-4 text-sm text-gray-500 font-medium uppercase tracking-widest">Curating Stories...</p>
    </div>
  );

  // 2. Error State
  if (error) return (
    <div className="max-w-2xl mx-auto mt-10 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-center">
      <p className="text-red-600 dark:text-red-400 font-medium">Unable to load stories.</p>
      <p className="text-sm text-red-500 dark:text-red-500 mt-1">{error}</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      
      {/* 3. Header Section */}
      <div className="mb-12 text-center md:text-left border-b border-gray-100 dark:border-slate-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Fresh Perspectives.
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
            Discover the latest thinking, ideas, and stories from the community.
          </p>
          
          {/* Post Count Badge */}
          <div className="mt-4 md:mt-0 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <FaStream className="text-indigo-500 mr-2" size={12} />
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              {posts.length} {posts.length === 1 ? 'Story' : 'Stories'} Published
            </span>
          </div>
        </div>
      </div>

      {/* 4. Content Grid */}
      {posts.length === 0 ? (
        // Empty State
        <div className="text-center py-24 bg-gray-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-slate-700">
          <div className="mx-auto w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
            <FaPenNib size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">It's quiet in here.</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            Be the first to share your thoughts with the world.
          </p>
          <Link 
            to="/create-post" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Start Writing
          </Link>
        </div>
      ) : (
        // The Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;