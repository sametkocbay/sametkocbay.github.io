# Handoff: Samet Kocbay Portfolio — Dark "Phosphor Terminal" Redesign

## Overview
Full portfolio redesign for an M.Sc. Computational Science & Engineering student (ML + physics simulation). Dark terminal aesthetic with an interactive gravity-mesh hero. 10 pages: home, projects index, 6 project detail pages, blog index, 1 blog article.

**Target: implement as an Astro site.** Content pages (project details, blog posts) map naturally to Astro content collections + markdown; the hero mesh is one client-side `<canvas>` script island.

## About the Design Files
Files in `design_references/` are **HTML design references** built in a prototyping environment — not production code. They open in a browser directly (each embeds a small runtime, `support.js`-based; ignore that machinery). The task is to **recreate these designs in Astro** using its idioms (layouts, components, content collections), not to copy the HTML wholesale. All styles are inline in the reference files, so every exact value can be read straight from the markup.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-perfectly.

## Design Tokens
Colors (no CSS vars in the references; hardcoded everywhere — turn into tokens in Astro):
- `#0b0d12` page background
- `#11141b` card background
- `#0e1524` inset/media background (figures, code-ish blocks)
- `#e8eaf0` primary text / headings
- `#b6bdcb` article body text
- `#8b93a5` secondary text
- `#465064` muted text / comments ("# …")
- `#6ee7dc` accent cyan (links, prompts, borders, mesh) · hover variant `#8ff0e6`
- `#ff6b6b` photo-node red (hero only) · hover `#ff8f8f`
- Borders: `rgba(139,147,165,.22)` neutral · `rgba(110,231,220,.14)` nav/footer · `rgba(110,231,220,.25)` accent boxes
- Selection: `rgba(110,231,220,.25)`

Typography:
- Headings/UI: **Space Grotesk** (400–700, Google Fonts)
- Mono (labels, terminal strings, captions, meta): **IBM Plex Mono** (400–600)
- Scale: h1 42–66px/700/-.02em · h2 26–34px/600–700 · card title 18–19px/600 · article body 15.5px/1.75 · mono meta 10.5–12.5px

Radii: 4px (buttons, pills) · 6px (cards, figures). No shadows except photo tooltip: `0 12px 32px rgba(0,0,0,.5)`.

## Page Structure (all pages share nav + footer)
- **Nav** (sticky, blur): `~/samet-kocbay` brand · links index / projects / blog / experience · GitHub + LinkedIn icons (home only) · `cv.pdf ↓` outline button → /assets/cv.pdf. Active page link is cyan, rest `#8b93a5`.
- **Footer**: © line + github / linkedin / email links.
- Content max-width: 1280px (index pages), 860px (article/detail pages), padding 0 40px.

## Screens
### 1. Home (`1b Home.dc.html`)
- **Hero** (560px, canvas mesh behind, text bottom-left): h1 66px name; mono subtitle; 4 outlined keyword pills; two buttons (`./explore-research` solid cyan → projects, `cv.pdf` outline); mono contact row. Top-right mono micro-caption explains the mesh.
- **Hero mesh (canvas)**: grid of points (density prop, default **18** cols), spring-return to home positions, idle sine wobble. Cursor **attracts** like gravity (radius 220px, force default **9**, clamped ~1/d). Lines + dots cyan, opacity scales with displacement. **4 red photo nodes** (pulsing, at grid fractions (.16,.3) (.38,.62) (.62,.28) (.84,.55)): hover within 28px → tooltip card (300px wide, image 200px cover, mono caption, red border) positioned above/below node, images preloaded + decode() before reveal to avoid stale-frame flash. Captions in the reference JS.
- **Research highlights**: 3-col card grid (6 cards). Card: 150px image header (cover, `#0e1524` under), meta line `[year] tagline`, title, mono description, `cat slug.md →` footer pinned bottom. Hover: cyan border + translateY(-3px).
- **Notes strip**: single-row list linking to blog article (date / title / tag).
- **Skills** (`cat /proc/skills`): 4 path-labeled pill groups.
- **Experience** (id=experience): 5 entries, left mono date column, bullets.
- **Education + Personal**: education cards; personal card is fake YAML (languages / passions incl. "2× german national champion · multiple-time landesmeister"); hiking photo figure below (300px tall cover, caption `# somewhere in the bavarian alps`).

### 2. Projects (`1b Projects.dc.html`)
Header + tag filter row (mono pills, `all` default, client-side filter) + same card grid as home listing all 6 projects.

### 3. Project detail pages (6 files, all same template)
Breadcrumb `~/projects / slug.md` → header (mono meta line `[years] tags · role @ org`, 42px title, mono dek, tag pills with `white-space:nowrap`) → optional hero figure (bordered, 6px radius, mono caption below) → article: h2s prefixed with cyan mono `##`, 15.5px body, `<strong>` in `#e8eaf0`, equation boxes (cyan border, `#0e1524` bg, centered mono cyan), bullet lists with bold leads → prev/next footer links (mono). Fusion page adds a **Publication** citation card (DOI-linked, author "Kocbay, S." highlighted). Detail pages & their images:
- Fusion: `Reactor_wendelstein_greifswald.jpeg` + publication card (doi 10.1088/1741-4326/ae6790)
- KA RaceIng: `karacein.jpg` hero, `DJI_0135.jpg`, `FS_CZECH_Win.jpeg`
- GP Acoustics: `gp-posterior.png` (generated GP plot)
- Thermal NN: `wrc-car.jpg` hero, `tnn-schema.png` (white bg figure)
- PINNs: `pIV.jpg`
- PDE-Transformer: `energy-spectrum.png` card image; detail page has equation boxes

### 4. Blog (`1b Blog.dc.html`) + article (`1b Post Barnes-Hut.dc.html`)
Blog index: header (`cat blog.log | sort -r`), rows date / title+summary / tag → article page in the same layout as project details. Only one post exists.

## Interactions & Behavior
- Card hover: border → `rgba(110,231,220,.5)`, translateY(-3px), transition .2s
- Link hover: → cyan. Buttons: solid cyan hover `#8ff0e6`; outline hover cyan border/text, faint cyan bg
- Hero fade-up entrance (.55s ease-out), blinking-cursor keyframes available
- Projects page tag filter: single-select state
- Mesh canvas: rAF loop, dpr-capped at 2, cleanup on unmount; mouse tracked on hero container
- Tooltips: opacity/transform .18s; clamp x within canvas; flip above when node y > 310

## State Management
Minimal: tag filter (projects page), hovered photo node (hero). Everything else static. In Astro: mesh + tooltip as one vanilla JS island; filter as tiny island or `:target`/JS toggle.

## Assets (`assets/`)
All referenced images + cv.pdf are in `assets/` (flattened; references use `assets/…` or `uploads/…` paths — remap to your public dir). `gp-posterior.png` was generated for this design; all photos are the owner's. Fonts from Google Fonts.

## Files
- `design_references/*.dc.html` — the 10 pages (open in browser to inspect; all styles inline)
- `assets/` — images + CV
