import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Include React plugin for Vite
  plugins: [react()],
  
  optimizeDeps: {
    // Exclude 'lucide-react' from dependency pre-bundling
    exclude: ['lucide-react'],
  },
});
