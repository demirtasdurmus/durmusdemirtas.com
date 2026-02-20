import { Metadata } from 'next';

import { generateMetadata as genMeta } from '@/lib/seo';
import { ProjectsContent } from '@/components/projects/projects-content';

export const metadata: Metadata = genMeta({
  title: 'Projects',
  description: 'Explore a collection of projects I have built and contributed to',
  path: '/projects',
  type: 'website',
  keywords: ['Projects', 'Portfolio', 'Web Apps', 'Open Source', 'Development']
});

export default function ProjectsPage() {
  return <ProjectsContent />;
}
