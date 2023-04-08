import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID, SANITY_USE_CDN } from './sanity.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: SANITY_USE_CDN,
    }),
  ]
});