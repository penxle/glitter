import { sveltekit } from '@sveltejs/kit/vite';
import { gql } from '@typie/gql/vite';
import { svg } from '@typie/lib/vite';
import icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svg(),
    icons({
      scale: 1,
      compiler: 'svelte',
    }),
    gql(),
    sveltekit(),
  ],
  server: {
    port: 4000,
    strictPort: true,
    fs: {
      allow: ['..'],
    },
  },
});
