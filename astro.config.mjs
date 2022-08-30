import { defineConfig } from 'astro/config';
import uno from "astro-uno";
import alpine from "@astrojs/alpinejs"; // TODO: image
// https://astro.build/config

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.URL,
  integrations: [uno({
    presets: []
  }), alpine(), sitemap()]
});