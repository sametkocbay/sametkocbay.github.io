# Astro Portfolio (GitHub Pages Ready)

Clean, modern portfolio built with Astro + TypeScript + Tailwind CSS, configured to deploy correctly for both GitHub Pages modes:

- User site: `https://<username>.github.io/`
- Project site: `https://<username>.github.io/<repo>/`

## Tech Stack

- Astro (TypeScript)
- Tailwind CSS
- Astro Content Collections for project posts
- GitHub Actions deployment workflow

## Run Locally

```bash
npm install
npm run dev
```

Build preview:

```bash
npm run build
npm run preview
```

## GitHub Pages Setup

1. Push to your GitHub repository.
2. In GitHub: `Settings -> Pages -> Build and deployment -> Source`, choose `GitHub Actions`.
3. Ensure your default branch is `main` (or adjust workflow trigger).

The workflow in `.github/workflows/deploy.yml` sets:

- `SITE=https://<owner>.github.io`
- `BASE=/` for `<username>.github.io` repos
- `BASE=/<repo>/` for project repos

This is consumed by `astro.config.mjs`, so one codebase works for both hosting modes.

## Manual site/base overrides (optional)

You can also override locally or in CI:

```bash
SITE=https://your-username.github.io BASE=/your-repo/ npm run build
```

Examples:

- User site repo (`your-username.github.io`):
  - `SITE=https://your-username.github.io`
  - `BASE=/`
- Project repo (`portfolio`):
  - `SITE=https://your-username.github.io`
  - `BASE=/portfolio/`

## Content Model

Projects live in `src/content/projects/*.md` with frontmatter:

- `title`
- `description`
- `date`
- `featured`
- `tags`
- `image`
- `links: { github, demo, writeup }`

Experience and education data live in:

- `src/data/experience.ts`
- `src/data/education.ts`

## Key Routes

- `/` Homepage with hero, featured projects, stack, experience, education
- `/projects` All projects with client-side tag filter
- `/projects/[slug]` Project detail page

## Base Path Safety

- CV download uses `${import.meta.env.BASE_URL}cv.pdf`
- Profile and thumbnails are prefixed via `import.meta.env.BASE_URL`/`withBase()`
- Internal links use `withBase()` where needed

## Customize Quickly

Edit these files first:

- `src/data/site.ts` (name, bio, links, email)
- `src/data/experience.ts`
- `src/data/education.ts`
- `src/data/tech.ts`
- `src/content/projects/*.md`
- `public/cv.pdf`
- `public/images/profile.jpg`

## Deploy

Push to `main`:

```bash
git add .
git commit -m "Initial portfolio setup"
git push
```

GitHub Actions will build and publish to Pages automatically.
