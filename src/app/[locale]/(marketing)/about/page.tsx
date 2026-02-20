import type { Metadata } from 'next';

import { generateMetadata as genMeta } from '@/lib/seo';
import { AboutContent } from '@/components/about/about-content';

export const metadata: Metadata = genMeta({
  title: 'About Me',
  description:
    'Learn more about Durmuş Demirtaş, a passionate software engineer specializing in full-stack web development',
  path: '/about',
  type: 'website',
  keywords: ['About', 'Software Engineer', 'Biography', 'Experience', 'Skills']
});

export default function AboutPage() {
  return <AboutContent />;
}
