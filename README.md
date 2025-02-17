# Tenzir Documenation

This repository hosts the documentation of Tenzir.

## 🚧 WORK IN PROGRESS 🚧  

The content in this repository is not authoritative. If you look for the Tenzir
documentation, go to [docs.tenzir.com](https://docs.tenzir.com). We are
currently testing Starlight as documentation framework, and if successful,
migrate over from Docusaurus.

## ☑️ TODOs

### Structure

- [x] Split nav at the top
- [x] Render API docs based on OpenAPI spec
- [ ] Auto-update OpenAPI spec via CI
- [x] Generate a sitemap at build time
- [x] Publish to GitHub Pages
- [x] Check for broken links
- [ ] Enable link checking in CI
- [ ] Display the Changelog
- [ ] Integrate release notes as a blog

### Style

- [x] Hoist SVGs and apply auto-darkmode
- [x] TQL syntax highlighting
- [ ] Fix github-{light,dark} syntax theme selection
- [ ] Do CSS magic to fuse subsequent TQL code blocks
- [ ] Apply Tailwind CSS and get a facelift

### Content

- [x] Landing page
- [x] FAQs
- [ ] Integrations
- [ ] Explanations
- [ ] Tutorials
- [ ] Guides
- [ ] Reference

## ✊ Usage

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🙋 Help

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro
documentation](https://docs.astro.build), or jump into the [Astro Discord
server](https://astro.build/chat).
