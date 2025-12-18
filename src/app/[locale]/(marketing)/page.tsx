import { posts } from '#site/content';

import { HeroSection } from '@/components/home/hero-section';
import { HighlightsSection } from '@/components/home/highlights-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { LatestPosts } from '@/components/home/latest-posts';
import { HomeCTA } from '@/components/home/home-cta';

function getLatestPosts() {
  return posts
    .filter((post) => post.published)
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

export default function HomePage() {
  const latestPosts = getLatestPosts();

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
