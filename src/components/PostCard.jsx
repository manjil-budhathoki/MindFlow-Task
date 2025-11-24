// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaUser, FaClock } from 'react-icons/fa';

// Helper: Generates a pleasing gradient based on the Post ID
// This makes the blog look colorful and designed without needing real images.
const getGradient = (id) => {
  const gradients = [
    "from-rose-400 to-orange-300",
    "from-indigo-400 to-cyan-400",
    "from-emerald-400 to-teal-300",
    "from-fuchsia-500 to-pink-500",
    "from-amber-400 to-orange-500",
    "from-sky-400 to-indigo-500",
  ];
  return gradients[id % gradients.length];
};

const PostCard = ({ post, onDelete }) => {
  const gradientClass = getGradient(post.id);

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* 1. Visual Header (Dynamic Gradient) */}
      <Link to={`/edit-post/${post.id}`} className="relative h-48 overflow-hidden block">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-80 group-hover:scale-105 transition-transform duration-700`}></div>
        
        {/* Overlay Decoration */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[2px]"></div>
        
        {/* Category Tag (Mocked) */}
        <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 shadow-sm">
          Article
        </span>
      </Link>

      {/* 2. Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        
        {/* Title */}
        <Link to={`/edit-post/${post.id}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          </h3>
        </Link>

        {/* Excerpt (Body) */}
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {post.body.charAt(0).toUpperCase() + post.body.slice(1)}...
        </p>

        {/* 3. Footer / Meta Data */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
          
          {/* Author Info */}
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-400">
              <FaUser size={10} />
            </div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              User {post.userId}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
             <Link 
              to={`/edit-post/${post.id}`} 
              className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-full transition-colors"
              title="Edit Story"
            >
              <FaEdit size={14} />
            </Link>
            <button 
              onClick={() => onDelete(post.id)}
              className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-800 rounded-full transition-colors"
              title="Delete Story"
            >
              <FaTrash size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;