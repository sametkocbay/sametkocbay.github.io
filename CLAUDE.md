# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Samet Kocbay — a dark "phosphor terminal" design (Space Grotesk + IBM Plex Mono, cyan-on-near-black, interactive gravity-mesh hero) built with Astro + TypeScript and deployed to GitHub Pages via GitHub Actions. The codebase is written to work unchanged for both GitHub Pages hosting modes (user site `username.github.io` and project site `username.github.io/repo/`). The original design handoff (reference HTML + assets) lives in `design/`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server (astro dev)
npm run build      # production build into ./dist
npm run preview    # serve the built ./dist locally
```

There is no test suite, linter, or formatter configured — `npm run build` is the de-facto check (it runs Astro's type/content-schema validation and fails on errors).

## Base-path architecture (the thing most likely to break)

`astro.config.mjs` derives `site` and `base` from environment variables, falling back to `GITHUB_REPOSITORY` / `GITHUB_REPOSITORY_OWNER` (set automatically in CI), and finally to local defaults. A repo ending in `.github.io` gets `base=/`; any other repo gets `base=/<repo>/`. To reproduce a project-site build locally, override explicitly:

```bash
SITE=https://your-username.github.io BASE=/your-repo/ npm run build
```

Because `base` is not always `/`, **every asset and internal link must be base-prefixed** or it breaks on project-site deploys:

- Use `withBase(path)` from `src/utils/withBase.ts` for internal links and asset paths in `.astro` files. It prepends `import.meta.env.BASE_URL`, but passes through absolute URLs (`http(s)://`), `mailto:`, and `#` anchors untouched.
- Inside markdown content, write root-relative paths (`/assets/foo.png`); a rehype plugin in `astro.config.mjs` prefixes `base` onto root-relative `src`/`href` attributes — including those inside raw HTML blocks.
- **Cache caveat:** Astro's content layer caches rendered markdown in `.astro/`. After changing `BASE` locally, run `rm -rf .astro node_modules/.astro` before rebuilding or markdown pages keep the previous base prefix. CI always builds cold, so deploys are unaffected.

## Design system

All tokens are CSS custom properties in `src/styles/global.css` (`--bg`, `--card`, `--inset`, `--text`, `--sec`, `--muted`, `--cyan`, `--red`, borders, `--mono`, `--sans`). Shared structural CSS (nav, footer, cards, article typography, detail headers, blog rows, filter pills) also lives there; page-specific CSS (hero, home sections) is scoped in the page files. Fonts come from Google Fonts (linked in `BaseLayout.astro`). Reference values for pixel-perfect checks: `design/README.md` and `design/design_references/*.dc.html` (all styles inline in the markup).

## Content & data model

Two content collections (schemas in `src/content/config.ts`, Zod-enforced — a mismatch fails the build):

1. **Projects** — `src/content/projects/*.md`. The file basename is the URL slug and the breadcrumb/prev-next label (`<slug>.md`). Frontmatter carries two card variants (home: `title`/`year`/`tagline`/`summary`/`cardSlug`; projects page: `description`/`tags` + year badge), the detail header (`detailTitle`, `metaLine`, `dek`, `detailTags`, optional `codeUrl`), an optional hero figure (`heroImage`/`heroAlt`/`heroCaption`), and ordering (`featuredOrder` for the home grid, `listOrder` for the projects page, explicit `prevSlug`/`nextSlug` for the detail-page chain). Bodies are markdown; `## headings` render with the cyan `##` prefix via CSS, and equation boxes / figures / the publication card are raw HTML using the `eq`, `frame` (+ `white`), and `pub-card` classes from `global.css`.

2. **Blog** — `src/content/blog/*.md` with `title`, `date` (display string, `YYYY-MM-DD`), `tag`, `summary` (index row), `dek` (article header).

Site/profile data are plain TypeScript exports in `src/data/`: `site.ts` (identity, links, `cvPath`, hero pills, SEO), `experience.ts`, `education.ts`, `tech.ts`. Edit these to change page content rather than touching components.

## Layout & routing

- `src/layouts/BaseLayout.astro` wraps every page (head/SEO/fonts/global styles).
- Pages: `index.astro` (hero with canvas gravity mesh + photo-node tooltips, featured projects, notes strip, skills, experience/education/personal), `projects/index.astro` (client-side single-select tag filter), `projects/[slug].astro`, `blog/index.astro`, `blog/[slug].astro`.
- Components: `Navbar` (props: `active` page key, `icons` for the home-only GitHub/LinkedIn icons), `Footer` (props: `showCv`, `spaced`), `ProjectCard` (props: `project`, `variant: 'home' | 'list'`).
- The hero mesh is one vanilla-JS `<script define:vars>` block in `index.astro` (grid density 18, mouse force 9, attract radius 220px, 4 red photo nodes with preloaded tooltip images); the tag filter is a small inline script in `projects/index.astro`.

## Assets

Images and the CV live in `public/assets/` (referenced as `/assets/…` through `withBase` or the markdown rehype prefix). The originals were copied from `design/assets/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` + `npm run build` and publishes `./dist` to GitHub Pages. The Pages source must be set to "GitHub Actions" in repo settings. No manual deploy step is needed.
