import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only use visualizer in development
    mode === 'development' &&
      visualizer({
        open: true,
        filename: 'bundle-stats.html'
      })
  ].filter(Boolean),
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chakra-vendor': [
            '@chakra-ui/react',
            '@emotion/react',
            '@emotion/styled'
          ],
          'form-vendor': ['react-hook-form']
        }
      }
    },
    minify: 'esbuild', // Use esbuild instead of terser
    chunkSizeWarningLimit: 1000
  },
  esbuild: {
    drop: ['console', 'debugger'] // Remove console.log and debugger in production
  }
}))
