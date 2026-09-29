// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tocadoleao-landingpage.pages.dev',
  trailingSlash: 'ignore',
  build: {
    // Preserve the original deployment paths and inline stylesheet delivery.
    assets: 'assets',
    inlineStylesheets: 'always',
  },
});
