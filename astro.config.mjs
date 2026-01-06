import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // Esto hace que se consulte la DB en cada visita
  adapter: vercel(),
});