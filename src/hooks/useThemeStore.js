// src/hooks/useThemeStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark', // Default preference
      
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        
        // Directly update the DOM here for instant switching
        document.documentElement.setAttribute('data-theme', newTheme);
        
        return { theme: newTheme };
      }),

      // Helper to initialize on app load
      initTheme: () => {
        // This gets the current state from localStorage (via persist)
        // We can't access 'state' directly here easily in basic Zustand, 
        // so we usually handle this in a useEffect in App.jsx
      }
    }),
    {
      name: 'mindflow-theme',
    }
  )
);

export default useThemeStore;