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
    featured: false,
    openSource: false
  },
  {
    title: 'Udao',
    description:
      'Udao platform website providing information about the decentralized education platform and token.',
    image: '/images/projects/udao-org.png',
    href: 'https://udao.org',
    github: '',
    tags: ['Web3', 'Blockchain', 'Landing Page'],
    featured: false,
    openSource: false
  },
  {
    title: 'Udao Platform',
    description:
      'Decentralized education and learning platform leveraging blockchain for transparent, verifiable credentials.',
    image: '/images/projects/app-udao-org.png',
    href: 'https://app.udao.org',
    github: '',
    tags: ['dApp', 'React', 'TypeScript'],
    featured: true,
    openSource: false
  },
  {
    title: 'Rexven',
    description:
      'Global e-commerce fulfillment platform enabling inventory-free selling through unified sourcing and shipping.',
    image: '/images/projects/rexven-com.png',
    href: 'https://rexven.com',
    github: '',
    tags: ['Full-Stack', 'SaaS', 'Logistics'],
    featured: true,
    openSource: false
  },
  {
    title: 'Nexpresst',
    description: 'A lightweight package for building Express-like APIs in Next.js App Router.',
    image: '/images/projects/npm.jpg',
    href: 'https://www.npmjs.com/package/nexpresst',
    github: 'https://github.com/demirtasdurmus/nexpresst',
    stars: '2',
    tags: ['Next.js', 'API', 'Middleware', 'TypeScript'],
    featured: true,
    openSource: true
  },
  {
    title: 'Local Branch Cleanup',
    description: 'CLI to delete unused local git branches interactively.',
    image: '/images/projects/npm.jpg',
    href: 'https://www.npmjs.com/package/local-branch-cleanup',
    github: 'https://github.com/demirtasdurmus/local-branch-cleanup',
    stars: '7',
    tags: ['CLI', 'Git', 'Node.js'],
    featured: false,
    openSource: true
  },
  {
    title: 'Todo Quill',
    description: 'A simple and elegant task manager built with React Native and Expo.',
    image: '/images/projects/todo-quill.png',
    href: 'https://apps.apple.com/us/app/todo-quill/id6751898106',
    github: 'https://github.com/demirtasdurmus/todo-quill',
    stars: '1',
    tags: ['React Native', 'Expo', 'TypeScript'],
    featured: false,
    openSource: true
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const openSourceProjects = projects.filter((p) => p.openSource);
