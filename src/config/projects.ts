import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Emparazon',
    description:
      'Amazon keyword ranking tool that helps sellers discover high-converting keywords and improve sales performance.',
    image: '/images/projects/emparazon-com.png',
    href: 'https://emparazon.com',
    github: '',
    tags: ['SaaS', 'E-commerce', 'Analytics'],
    featured: true
  },
  {
    title: 'Udao',
    description:
      'Udao platform website providing information about the decentralized education platform and token.',
    image: '/images/projects/udao-org.png',
    href: 'https://udao.org',
    github: '',
    tags: ['Web3', 'Blockchain', 'Landing Page'],
    featured: false
  },
  {
    title: 'Udao Platform',
    description:
      'Decentralized education and learning platform leveraging blockchain for transparent, verifiable credentials.',
    image: '/images/projects/app-udao-org.png',
    href: 'https://app.udao.org',
    github: '',
    tags: ['dApp', 'React', 'TypeScript'],
    featured: true
  },
  {
    title: 'Rexven',
    description:
      'Global e-commerce fulfillment platform enabling inventory-free selling through unified sourcing and shipping.',
    image: '/images/projects/rexven-com.png',
    href: 'https://rexven.com',
    github: '',
    tags: ['Full-Stack', 'SaaS', 'Logistics'],
    featured: true
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
