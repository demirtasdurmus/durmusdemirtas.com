import { MetadataRoute } from 'next';
import { posts } from '#site/content';

import { locales } from '@/config/i18n';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes that exist for all locales
  const staticRoutes = ['/', '/about', '/projects', '/blog'] as const;

  // Generate sitemap entries for static routes with all locale variations
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) => {
    return locales.map((locale) => {
      // Get localized pathname from routing config
      const localizedPath = getLocalizedPath(route, locale);

      return {
        url: `${baseUrl}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}${getLocalizedPath(route, loc)}`])
          )
        }
      } as MetadataRoute.Sitemap[number];
    });
  });

  // Generate sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = posts
    .filter((post) => post.published)
    .map((post) => {
      const locale = post.locale;
      const blogPath = `/blog/${post.slugAsParams}`;

      return {
        url: `${baseUrl}${blogPath}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            [locale]: `${baseUrl}${blogPath}`,
            // Add alternate language version if it exists
            ...Object.fromEntries(
              locales
                .filter((loc) => loc !== locale)
                .map((loc) => {
                  const alternatePost = posts.find(
                    (p) => p.slugAsParams === post.slugAsParams && p.locale === loc
                  );
                  return [
                    loc,
                    alternatePost ? `${baseUrl}/blog/${alternatePost.slugAsParams}` : undefined
                  ];
                })
                .filter(([, url]) => url !== undefined)
            )
          }
        }
      } as MetadataRoute.Sitemap[number];
    });

  return [...staticEntries, ...blogEntries];
}

/**
 * Get localized path for a given route and locale
 */
function getLocalizedPath(route: string, locale: string): string {
  const pathnames = routing.pathnames as Record<string, string | Record<string, string>>;
  const pathname = pathnames[route];

  if (!pathname) return route;

  // If pathname is a string, it's the same for all locales
  if (typeof pathname === 'string') {
    return pathname;
  }

  // If pathname is an object, get the localized version
  return pathname[locale] || route;
}
