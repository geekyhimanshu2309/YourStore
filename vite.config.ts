import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import Pages from 'vite-plugin-pages';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Pages(),
    // ViteComponents({
    //   customComponentResolvers: ViteIconsResolver(),
    // }),
    // ViteIcons(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss , autoprefixer],
    },
  },
  server: {
    port: 5174,
  },
});
