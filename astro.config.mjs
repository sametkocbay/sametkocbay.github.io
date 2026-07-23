import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repositoryName.endsWith('.github.io');

const base = process.env.BASE ?? (repositoryName ? (isUserSite ? '/' : `/${repositoryName}/`) : '/');
const site = process.env.SITE ?? (owner ? `https://${owner}.github.io` : 'https://example.com');

// Markdown bodies contain raw HTML (figures, equation boxes) whose src/href are
// root-relative; prefix them with `base` so project-site deploys keep working.
function rehypeBasePrefix() {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      for (const key of ['src', 'href']) {
        const value = node.properties[key];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
          node.properties[key] = `${prefix}${value}`;
        }
      }
    }
    // Raw HTML blocks in markdown reach rehype as unparsed `raw` nodes.
    if (node.type === 'raw' && typeof node.value === 'string') {
      node.value = node.value.replace(/(src|href)="\/(?!\/)/g, `$1="${prefix}/`);
    }
    for (const child of node.children ?? []) walk(child);
  };
  return (tree) => {
    walk(tree);
  };
}

export default defineConfig({
  site,
  base,
  devToolbar: {
    enabled: false
  },
  markdown: {
    rehypePlugins: [rehypeBasePrefix]
  }
});
