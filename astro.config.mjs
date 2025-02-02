// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightVersions from 'starlight-versions'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightVersions({
          versions: [
            { slug: 'v4.27' },
          ],
        }),
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
                { label: 'Example Guide', slug: 'guides/example' },
              ],
            },
            {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
            },
            {
              label: 'Explanations',
              autogenerate: { directory: 'explanations' },
              //items: [
              //	'pipelines',
              //],
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
            { label: "Docs", link: "guides/example" },
            { label: "Integrations", link: "integrations/amazon/security-lake" },
            { label: "API", link: "api" },
          ]
        },
      ],
    }),
  ],
});
