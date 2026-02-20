import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import type { PromiseParams } from '@/types';
import { posts } from '#site/content';

import { generateStructuredData, generateMetadata as genMeta } from '@/lib/seo';
import { HeroSection } from '@/components/home/hero-section';

export const metadata: Metadata = genMeta({
  path: '/',
  type: 'website',
  keywords: [
    'Durmuş Demirtaş',
    'Software Engineer',
    'Full Stack Developer',
    'Portfolio',
    'Web Development',
    'Next.js',
    'React',
    'TypeScript'
  ]
});

const structuredData = generateStructuredData('person');

const HighlightsSection = dynamic(
  () =>
    import('@/components/home/highlights-section').then((mod) => ({
      default: mod.HighlightsSection
    })),
  {
    ssr: true
  }
);
const FeaturedProjects = dynamic(
  () =>
    import('@/components/home/featured-projects').then((mod) => ({
      default: mod.FeaturedProjects
    })),
  {
    ssr: true
  }
);
const LatestPosts = dynamic(
  () => import('@/components/home/latest-posts').then((mod) => ({ default: mod.LatestPosts })),
  {
    ssr: true
  }
);
const HomeCTA = dynamic(
  () => import('@/components/home/home-cta').then((mod) => ({ default: mod.HomeCTA })),
  {
    ssr: true
  }
);

type HomePageProps = PromiseParams<{ locale: string }>;

export default async function HomePage(props: HomePageProps) {
  const { locale } = await props.params;
  const latestPosts = getLatestPosts(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <HighlightsSection />
      <FeaturedProjects />
      <LatestPosts posts={latestPosts} />
      <HomeCTA />
    </>
  );
}

function getLatestPosts(locale: string) {
  return posts
    .filter((post) => post.published && post.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)
    .map((post) => ({
      slug: post.slug,
      slugAsParams: post.slugAsParams,
      title: post.title,
      description: post.description,
      date: post.date
    }));
}
