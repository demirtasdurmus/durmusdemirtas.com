import { Project } from '@/types';
import { _Translator } from 'next-intl';

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
    category: 'client'
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
    category: 'client'
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
    category: 'client'
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
    category: 'client'
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
    category: 'open-source'
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
    category: 'open-source'
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
    category: 'open-source'
  }
];

function getLocalizedProjects(t: _Translator): Project[] {
  return [
    {
      title: t('HomePage.featuredProjectsSection.projects.emparazon.title'),
      description: t('HomePage.featuredProjectsSection.projects.emparazon.description'),
      image: '/images/projects/emparazon-com.png',
      href: 'https://emparazon.com',
      github: '',
      tags: [
        t('HomePage.featuredProjectsSection.tags.saas'),
        t('HomePage.featuredProjectsSection.tags.ecommerce'),
        t('HomePage.featuredProjectsSection.tags.analytics')
      ],
      featured: false,
      category: 'client'
    },
    {
      title: t('HomePage.featuredProjectsSection.projects.udao.title'),
      description: t('HomePage.featuredProjectsSection.projects.udao.description'),
      image: '/images/projects/udao-org.png',
      href: 'https://udao.org',
      github: '',
      tags: [
        t('HomePage.featuredProjectsSection.tags.web3'),
        t('HomePage.featuredProjectsSection.tags.blockchain'),
        t('HomePage.featuredProjectsSection.tags.landingPage')
      ],
      featured: false,
      category: 'client'
    },
    {
      title: t('HomePage.featuredProjectsSection.projects.udaoPlatform.title'),
      description: t('HomePage.featuredProjectsSection.projects.udaoPlatform.description'),
      image: '/images/projects/app-udao-org.png',
      href: 'https://app.udao.org',
      github: '',
      tags: [
        t('HomePage.featuredProjectsSection.tags.dApp'),
        t('HomePage.featuredProjectsSection.tags.react'),
        t('HomePage.featuredProjectsSection.tags.typescript')
      ],
      featured: true,
      category: 'client'
    },
    {
      title: t('HomePage.featuredProjectsSection.projects.rexven.title'),
      description: t('HomePage.featuredProjectsSection.projects.rexven.description'),
      image: '/images/projects/rexven-com.png',
      href: 'https://rexven.com',
      github: '',
      tags: [
        t('HomePage.featuredProjectsSection.tags.fullStack'),
        t('HomePage.featuredProjectsSection.tags.saas'),
        t('HomePage.featuredProjectsSection.tags.logistics')
      ],
      featured: true,
      category: 'client'
    },
    {
      title: t('HomePage.featuredProjectsSection.projects.nexpresst.title'),
      description: t('HomePage.featuredProjectsSection.projects.nexpresst.description'),
      image: '/images/projects/npm.jpg',
      href: 'https://www.npmjs.com/package/nexpresst',
      github: 'https://github.com/demirtasdurmus/nexpresst',
      stars: '2',
      tags: [
        t('HomePage.featuredProjectsSection.tags.nextjs'),
        t('HomePage.featuredProjectsSection.tags.api'),
        t('HomePage.featuredProjectsSection.tags.middleware'),
        t('HomePage.featuredProjectsSection.tags.typescript')
      ],
      featured: true,
      category: 'open-source'
    },
    {
      title: t('HomePage.featuredProjectsSection.projects.localBranchCleanup.title'),
      description: t('HomePage.featuredProjectsSection.projects.localBranchCleanup.description'),
      image: '/images/projects/npm.jpg',
      href: 'https://www.npmjs.com/package/local-branch-cleanup',
      github: 'https://github.com/demirtasdurmus/local-branch-cleanup',
      stars: '7',
      tags: [
        t('HomePage.featuredProjectsSection.tags.cli'),
        t('HomePage.featuredProjectsSection.tags.git'),
        t('HomePage.featuredProjectsSection.tags.nodejs')
      ],
      featured: false,
      category: 'open-source'
    },
    {
      title: t('HomePage.featuredProjectsSection.projects.todoQuill.title'),
      description: t('HomePage.featuredProjectsSection.projects.todoQuill.description'),
      image: '/images/projects/todo-quill.png',
      href: 'https://apps.apple.com/us/app/todo-quill/id6751898106',
      github: 'https://github.com/demirtasdurmus/todo-quill',
      stars: '1',
      tags: [
        t('HomePage.featuredProjectsSection.tags.reactNative'),
        t('HomePage.featuredProjectsSection.tags.expo'),
        t('HomePage.featuredProjectsSection.tags.typescript')
      ],
      featured: false,
      category: 'open-source'
    }
  ];
}

export function getTranslatedFeaturedProjects(t: _Translator) {
  return getLocalizedProjects(t).filter((p) => p.featured);
}
export function getTranslatedClientProjects(t: _Translator) {
  return getLocalizedProjects(t).filter((p) => p.category === 'client');
}
export function getTranslatedOpenSourceProjects(t: _Translator) {
  return getLocalizedProjects(t).filter((p) => p.category === 'open-source');
}

export const featuredProjects = projects.filter((p) => p.featured);
export const clientProjects = projects.filter((p) => p.category === 'client');
export const openSourceProjects = projects.filter((p) => p.category === 'open-source');
