import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'hybrid', // Usa híbrido para mejor compatibilidad con Vercel
  adapter: vercel(),
});
