// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import inlineSVGs from "./astro-inline-svgs.mjs";
import { sidebar } from "./src/sidebar";

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
      sidebar,
    }),
    inlineSVGs(),
  ],
  // Disable built-in image optimization.
  image: {
    service: passthroughImageService(),
  },
});
