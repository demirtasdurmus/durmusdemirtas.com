import { Metadata } from 'next';

import { siteConfig } from '@/config/site';

type GenerateMetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  locale?: string;
  keywords?: string[];
};

/**
 * Generate comprehensive metadata for SEO
 */
export function generateMetadata({
  title,
  description = siteConfig.description,
  image,
  path = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  locale = 'en',
  keywords = []
}: GenerateMetadataProps = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const pageTitle = title ? `${title} | ${siteConfig.author}` : siteConfig.author;

  // Use default OG image if none provided
  const ogImage = image || `${siteConfig.url}/og-image.png`;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}${path}`,
        tr: `${siteConfig.url}${path}`
      }
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.author,
      locale: locale === 'en' ? 'en_US' : 'tr_TR',
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.author
        }
      ],
      ...(type === 'article' && publishedTime
        ? {
            publishedTime,
            modifiedTime,
            authors: authors || [siteConfig.author]
          }
        : {})
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      creator: '@drmsdmrts',
      images: [ogImage]
    }
  };

  return metadata;
}

type ArticleData = {
  title?: string;
  description?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  url?: string;
};

/**
 * Generate structured data (JSON-LD) for SEO
 */
export function generateStructuredData(type: 'person' | 'article' | 'website', data?: ArticleData) {
  const baseStructuredData = {
    '@context': 'https://schema.org'
  };

  switch (type) {
    case 'person':
      return {
        ...baseStructuredData,
        '@type': 'Person',
        name: siteConfig.author,
        url: siteConfig.url,
        email: siteConfig.email,
        jobTitle: 'Software Engineer',
        sameAs: [siteConfig.links.twitter, siteConfig.links.github, siteConfig.links.linkedin]
      };

    case 'article':
      return {
        ...baseStructuredData,
        '@type': 'BlogPosting',
        headline: data?.title,
        description: data?.description,
        image: data?.image,
        datePublished: data?.publishedTime,
        dateModified: data?.modifiedTime || data?.publishedTime,
        author: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.url
        },
        publisher: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.url
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data?.url
        }
      };

    case 'website':
      return {
        ...baseStructuredData,
        '@type': 'WebSite',
        name: siteConfig.author,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
          '@type': 'Person',
          name: siteConfig.author,
          url: siteConfig.url
        }
      };

    default:
      return baseStructuredData;
  }
}
