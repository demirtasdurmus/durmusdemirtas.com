import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/config/i18n';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'never',
  pathnames: {
    '/': '/',
    '/blog': {
      en: '/blog',
      tr: '/blog'
    },
    '/blog/[...slug]': {
      en: '/blog/[...slug]',
      tr: '/blog/[...slug]'
    },
    '/about': {
      en: '/about',
      tr: '/hakkımda'
    },
    '/projects': {
      en: '/projects',
      tr: '/projeler'
    }
  }
});
