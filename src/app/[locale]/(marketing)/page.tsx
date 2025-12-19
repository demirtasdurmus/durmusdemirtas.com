import { posts } from '#site/content';

import type { PromiseParams } from '@/types';
import { HeroSection } from '@/components/home/hero-section';
import { HighlightsSection } from '@/components/home/highlights-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { LatestPosts } from '@/components/home/latest-posts';
import { HomeCTA } from '@/components/home/home-cta';

type HomePageProps = PromiseParams<{ locale: string }>;

export default async function HomePage(props: HomePageProps) {
  const { locale } = await props.params;
  const latestPosts = getLatestPosts(locale);

  return (
    <>
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
