// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import inlineSVGs from "./astro-inline-svgs.mjs";
import { sidebar } from "./src/sidebar";
import { bundledLanguages } from 'shiki'

// TODO: make this a submodule and track the latest version.
import tqlLang from './tql.tmLanguage.json' assert { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: 'https://tenzir.github.io',
  base: 'docs-starlight',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    starlight({
      pagination: false,
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: 'hidden'
          },
          navLinks: {
            leading: { useSidebarLabelled: 'navbar' }
          }
        }),
      ],
      title: 'Tenzir',
      logo: {
        light: './src/assets/tenzir-light.svg',
        dark: './src/assets/tenzir-dark.svg',
        replacesTitle: true,
      },
      customCss: ['./src/assets/styles.css'],
      social: {
        github: 'https://github.com/tenzir/tenzir',
        discord: 'https://discord.tenzir.com',
        linkedin: 'https://linkedin.com/company/tenzir',
      },
      sidebar,
      lastUpdated: true,
    }),
    inlineSVGs(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      langs: [
        {
          id: 'tql',
          scopeName: 'source.tql',
          ...tqlLang,
        },
        ...Object.keys(bundledLanguages),
      ],
    },
  },
  // Disable built-in image optimization.
  image: {
    service: passthroughImageService(),
  },
});
