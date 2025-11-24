import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ThemeToggler from './ThemeToggler';
import { FaUserCircle, FaPenNib } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    // bg-skin-card/80 uses the variable + opacity
    <nav className="sticky top-0 z-50 bg-skin-card/80 backdrop-blur-md border-b border-skin-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-skin-text tracking-tight hover:text-skin-primary transition-colors">
            MindFlow<span className="text-skin-primary">.</span>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-6">
             <Link 
              to="/stories" 
              className={`text-sm font-medium transition-colors ${isActive('/stories') ? 'text-skin-primary' : 'text-skin-muted hover:text-skin-text'}`}
            >
              Stories
            </Link>
            
            <ThemeToggler />

            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/create-post"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-skin-primary text-white text-sm font-medium shadow-glow hover:opacity-90 transition-all"
                >
                  <FaPenNib size={12} /> Write
                </Link>
                <button onClick={logout} className="text-skin-muted hover:text-red-500">
                  <FaUserCircle size={24} />
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/login" className="text-skin-muted hover:text-skin-primary text-sm font-medium">Log in</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;