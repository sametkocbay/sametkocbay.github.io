# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Samet Kocbay, built with Astro + TypeScript + Tailwind CSS and deployed to GitHub Pages via GitHub Actions. The codebase is written to work unchanged for both GitHub Pages hosting modes (user site `username.github.io` and project site `username.github.io/repo/`).

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

- Use `withBase(path)` from `src/utils/withBase.ts` for internal links and asset paths. It prepends `import.meta.env.BASE_URL`, but passes through absolute URLs (`http(s)://`), `mailto:`, and `#` anchors untouched.
- For files in `public/` referenced directly (e.g. the CV), use `${import.meta.env.BASE_URL}cv.pdf`.

When adding new links or images, prefer `withBase()` rather than hardcoding a leading `/`.

## Content & data model

Two distinct content sources:

1. **Projects** — Astro Content Collection of markdown files in `src/content/projects/*.md`. The frontmatter schema is enforced in `src/content/config.ts` (Zod): `title`, `description`, `date`, `featured`, `tags[]`, `image`, optional `links: { github, demo, writeup }` (each a valid URL). A schema mismatch fails the build. Projects are fetched with `getCollection('projects')` and the file basename becomes the slug for `/projects/[slug]`.

2. **Site/profile data** — plain TypeScript exports in `src/data/`: `site.ts` (name, tagline, email, social links, CV path, hero chips, SEO/OG metadata), `profile.ts`, `experience.ts`, `education.ts`, `tech.ts`. Edit these to change page content rather than touching components.

## Layout & routing

- `src/layouts/BaseLayout.astro` wraps every page (head/SEO/global styles).
- Pages in `src/pages/`: `index.astro` (homepage — hero, featured projects, stack, experience, education), `projects/index.astro` (all projects with a client-side tag filter), `projects/[slug].astro` (per-project detail, generated from the collection).
- Reusable pieces in `src/components/` (`Navbar`, `Footer`, `Hero`, `ProjectCard`, `TagFilter`, `Timeline`, `SectionHeader`). Tag filtering and card-height equalization run as inline client-side `<script>` blocks in the project pages.
- Styling is Tailwind (`tailwind.config.cjs`, `postcss.config.cjs`) plus `src/styles/global.css`, which defines reused utility classes such as `container-page` and `section-spacing`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci` + `npm run build` and publishes `./dist` to GitHub Pages. The Pages source must be set to "GitHub Actions" in repo settings. No manual deploy step is needed.
