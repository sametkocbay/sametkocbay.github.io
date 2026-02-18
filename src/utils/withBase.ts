const ABSOLUTE_URL_REGEX = /^https?:\/\//i;

export function withBase(path: string): string {
  if (!path || path === '/') {
    return import.meta.env.BASE_URL;
  }

  if (ABSOLUTE_URL_REGEX.test(path) || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
