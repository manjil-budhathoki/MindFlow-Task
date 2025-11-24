import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark', 
      
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        
        // Directly update the DOM here for instant switching
        document.documentElement.setAttribute('data-theme', newTheme);
        
        return { theme: newTheme };
      }),

      // Helper to initialize on app load
      initTheme: () => {
      }
    }),
    {
      name: 'mindflow-theme',
    }
  )
);

export default useThemeStore;