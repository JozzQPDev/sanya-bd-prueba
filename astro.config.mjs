import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // Consulta la DB en cada visita (SSR)
  adapter: vercel(),
});
