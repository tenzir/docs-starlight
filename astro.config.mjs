// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import inlineSVGs from "./astro-inline-svgs.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
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
      sidebar: [
        {
          label: 'Docs',
          items: [
            {
              label: 'Guides',
              items: [
                { label: 'Quickstart', slug: 'guides/quickstart' },
              ],
            },
            {
              label: 'Tutorials',
              items: [
                { label: 'Map Data to OCSF', slug: 'tutorials/map-data-to-ocsf' },
              ],
            },
            {
              label: 'Explanations',
              autogenerate: { directory: 'explanations' },
            },
            {
              label: 'Reference',
              items: [
                {
                  label: 'Language',
                  items: [
                    { label: 'Statements', slug: 'reference/language/statements' },
                    { label: 'Expressions', slug: 'reference/language/expressions' },
                    { label: 'Types', slug: 'reference/language/types' },
                  ]
                },
              ]
            },
          ]
        },
        {
          label: 'Integrations',
          items: [
            {
              label: 'Amazon',
              autogenerate: { directory: 'integrations/amazon' },
            }
          ]
        },
        // NB: this needs to come *last* in the array. Otherwise the
        // auto-switching isn't working!
        {
          label: "navbar",
          items: [
            { label: "Docs", link: "/" },
            { label: "Integrations", link: "integrations/amazon/security-lake" },
            { label: "API", link: "api" },
          ]
        },
      ],
    }),
    inlineSVGs(),
  ],
  // Disable built-in image optimization.
  image: {
    service: passthroughImageService(),
  },
});
