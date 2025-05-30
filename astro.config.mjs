// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless'; 

// https://astro.build/config
export default defineConfig({
    adapter: vercel({}),
    integrations: [icon()]
});