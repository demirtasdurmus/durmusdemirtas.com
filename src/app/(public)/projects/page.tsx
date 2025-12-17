import { Metadata } from 'next';

import { ProjectsContent } from '@/components/projects/projects-content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects I have worked on'
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
