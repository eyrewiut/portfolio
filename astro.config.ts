import { defineConfig } from 'astro/config';
import uno from "@unocss/astro";
import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import { netlifyFunctions } from "@astrojs/netlify";
import react from "@astrojs/react";

// TODO: image

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlifyFunctions(),
  site: process.env.URL || "http://localhost:3000/",
  experimental: {
    assets: true
  },
  integrations: [uno(), alpine(), sitemap(), react(), markdoc()]
});