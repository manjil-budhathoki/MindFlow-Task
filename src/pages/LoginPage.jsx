import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaEnvelope, FaLock, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const LoginPage = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: 'test@example.com', password: 'password123' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    navigate('/stories');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
      
      {/* Main Wide Card Container */}
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* LEFT SIDE: Visual & Content (New Addition) */}
        <div className="hidden lg:flex flex-col justify-between p-12 relative bg-indigo-900/20">
          
          {/* Decorative Gradient Blob behind text */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-0"></div>
          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Back to the Flow.</h2>
            <p className="text-indigo-200">Resume your writing journey.</p>
          </div>

          {/* Testimonial / Quote Area */}
          <div className="relative z-10 mt-12">
            <FaQuoteLeft className="text-indigo-400/30 text-4xl mb-4" />
            <blockquote className="text-lg text-slate-300 font-light italic leading-relaxed">
              "Writing is the painting of the voice. MindFlow gives me the canvas I need to express myself clearly."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"></div>
              <div>
                <p className="text-sm font-bold text-white">Elena R.</p>
                <p className="text-xs text-slate-400">Top Contributor</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-slate-950/30">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2 lg:hidden">Welcome Back</h3>
            <h3 className="text-2xl font-bold text-white mb-2 hidden lg:block">Sign In</h3>
            <p className="text-slate-400">Enter your details to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center justify-center">
                {error}
              </div>
            )}

            {/* Email  */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <FaEnvelope size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Password  */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot Password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
                  <FaLock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-4 px-4 rounded-xl shadow-xl shadow-indigo-900/20 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 mt-4"
            >
              {loading ? (
                <span className="animate-pulse">Authenticating...</span>
              ) : (
                <>
                  Sign In <FaArrowRight className="ml-2" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-500">
              New to MindFlow?{' '}
              <Link to="/register" className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;