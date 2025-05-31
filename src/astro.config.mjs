// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import remarkAlert from 'remark-github-blockquote-alert';

// https://astro.build/config
export default defineConfig({
    site: "https://unhingedcogs.com",
  integrations: [preact(), icon(), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      remarkAlert
    ],
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});