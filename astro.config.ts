import { defineConfig } from 'astro/config';
import uno from "@unocss/astro";
import NetlifyCMS from "astro-netlify-cms";
import cmsConfig from "./netlifycms.config";
import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
// TODO: image

export default defineConfig({
  site: process.env.URL || "http://localhost:3000/",
  experimental: {
    assets: true
  },
  integrations: [
    uno(),
    NetlifyCMS({
      config: cmsConfig,
      adminPath: "/cms"
    }),
    alpine(),
    sitemap(),
  ]
});
