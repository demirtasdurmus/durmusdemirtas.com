import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/config/i18n';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'never',
  pathnames: {
    '/': '/',
    '/blog': '/blog',
    '/about': {
      en: '/about',
      tr: '/hakkimda'
    },
    '/projects': {
      en: '/projects',
      tr: '/projeler'
    }
  }
});
