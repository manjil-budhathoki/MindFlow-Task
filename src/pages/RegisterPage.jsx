import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaUser, FaEnvelope, FaLock, FaRocket, FaStar } from 'react-icons/fa';

const RegisterPage = () => {
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    navigate('/stories');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      
      {/* Main Wide Card Container */}
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* LEFT SIDE: Visual & Context (The Pitch) */}
        <div className="hidden lg:flex flex-col justify-between p-12 relative bg-purple-900/20">
          
          {/* Decorative Gradient Blob */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 to-indigo-500/10 z-0"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Join the Community.</h2>
            <p className="text-purple-200">Turn your ideas into stories.</p>
          </div>

          {/* Feature/Quote Area */}
          <div className="relative z-10 mt-12">
            <div className="flex gap-1 mb-4">
               {[1,2,3,4,5].map(i => <FaStar key={i} className="text-yellow-500 text-sm" />)}
            </div>
            <blockquote className="text-lg text-slate-300 font-light italic leading-relaxed">
              "The scariest moment is always just before you start. MindFlow made taking that step effortless."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></div>
              <div>
                <p className="text-sm font-bold text-white">Marcus T.</p>
                <p className="text-xs text-slate-400">Joined last week</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-slate-950/30">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2 lg:hidden">Join MindFlow</h3>
            <h3 className="text-2xl font-bold text-white mb-2 hidden lg:block">Create Account</h3>
            <p className="text-slate-400">Get started with your free account today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center justify-center">
                {error}
              </div>
            )}

            {/* Username */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider ml-1">Username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-400 transition-colors">
                  <FaUser size={18} />
                </div>
                <input
                  id="username" name="username" type="text" value={formData.username} onChange={handleChange} required
                  className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="johndoe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-400 transition-colors">
                  <FaEnvelope size={18} />
                </div>
                <input
                  id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                  className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-300 uppercase tracking-wider ml-1">Password</label>
               <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-400 transition-colors">
                  <FaLock size={18} />
                </div>
                <input
                  id="password" name="password" type="password" value={formData.password} onChange={handleChange} required
                  className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-4 px-4 rounded-xl shadow-xl shadow-purple-900/20 text-base font-bold text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 mt-4"
            >
              {loading ? (
                <span className="animate-pulse">Creating Account...</span>
              ) : (
                <>
                  Get Started <FaRocket className="ml-2" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-500">
              Already a member?{' '}
              <Link to="/login" className="font-bold text-purple-400 hover:text-purple-300 transition-colors">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;