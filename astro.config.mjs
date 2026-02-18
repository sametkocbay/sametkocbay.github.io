import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repositoryName.endsWith('.github.io');

const base = process.env.BASE ?? (repositoryName ? (isUserSite ? '/' : `/${repositoryName}/`) : '/');
const site = process.env.SITE ?? (owner ? `https://${owner}.github.io` : 'https://example.com');

export default defineConfig({
  site,
  base,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
