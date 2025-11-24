// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPenNib, FaHashtag, FaUserFriends } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">
      
      {/* 1. Main Hero Content (Centered) */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4 z-10 -mt-10 animate-fade-in-up">
        
        {/* Subtle 'New' Pill */}
        <div className="inline-flex items-center justify-center mb-8">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md">
            v2.0 Now Live
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          Share your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">untold stories.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed font-light">
          Join a growing community of thinkers and creators. 
          <br className="hidden md:block"/>
          Read insightful articles or publish your own today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <Link
            to="/stories"
            className="group relative px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-indigo-50 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center"
          >
            Start Reading
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-indigo-600" size={14} />
          </Link>
          
          <Link
            to="/create-post"
            className="px-8 py-4 rounded-full text-slate-400 font-medium text-lg hover:text-white transition-colors flex items-center gap-2 group"
          >
            <FaPenNib className="text-xs group-hover:text-indigo-400 transition-colors" />
            Start Writing
          </Link>
        </div>

        {/* 2. Trending Topics (New Context) */}
        <div className="flex flex-col items-center space-y-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Trending Now</span>
          <div className="flex flex-wrap justify-center gap-3">
            {['Technology', 'Mindfulness', 'Design', 'Future', 'Coding'].map((tag) => (
              <Link 
                key={tag} 
                to="/stories" 
                className="px-4 py-1.5 rounded-full text-sm text-slate-400 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-indigo-300 transition-all backdrop-blur-sm"
              >
                <span className="opacity-50 mr-1">#</span>{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Stats Bar (Social Proof) */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between md:justify-center md:gap-20 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-indigo-500" />
            <span><strong className="text-slate-300">2.5k+</strong> Writers</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHashtag className="text-purple-500" />
            <span><strong className="text-slate-300">10k+</strong> Stories</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>System <strong className="text-emerald-400">Online</strong></span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;