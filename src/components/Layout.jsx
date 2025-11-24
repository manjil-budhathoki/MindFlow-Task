import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    // bg-skin-base handles both white (light) and dark blue (dark) automatically
    <div className="min-h-screen relative overflow-x-hidden bg-skin-base text-skin-text transition-colors duration-300">
      
      {/* Background Glow (Uses CSS variable for color) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-skin-primary rounded-full blur-[100px] opacity-10"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;