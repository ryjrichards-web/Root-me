import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  test: { environment: 'jsdom', setupFiles: './src/test-setup.ts' },
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icon.svg'],
    manifest: {
      name: 'ROOT ME — Plant Tracker', short_name: 'ROOT ME', description: 'Get dirty. Grow stuff.',
      theme_color: '#153f2e', background_color: '#f5eedf', display: 'standalone', start_url: '/',
      icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }]
    }
  })],
});
