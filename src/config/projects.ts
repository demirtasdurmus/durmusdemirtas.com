import { Project } from '@/types';
import { _Translator } from 'next-intl';

function getTranslatedProjects(t: _Translator): Project[] {
  return [
    {
      title: t('ProjectsPage.projects.emparazon.title'),
      description: t('ProjectsPage.projects.emparazon.description'),
      image: '/images/projects/emparazon-com.png',
      href: 'https://emparazon.com',
      github: '',
      tags: [
        t('ProjectsPage.tags.saas'),
        t('ProjectsPage.tags.ecommerce'),
        t('ProjectsPage.tags.analytics')
      ],
      featured: false,
      category: 'client'
    },
    {
      title: t('ProjectsPage.projects.udao.title'),
      description: t('ProjectsPage.projects.udao.description'),
      image: '/images/projects/udao-org.png',
      href: 'https://udao.org',
      github: '',
      tags: [
        t('ProjectsPage.tags.web3'),
        t('ProjectsPage.tags.blockchain'),
        t('ProjectsPage.tags.landingPage')
      ],
      featured: false,
      category: 'client'
    },
    {
      title: t('ProjectsPage.projects.udaoPlatform.title'),
      description: t('ProjectsPage.projects.udaoPlatform.description'),
      image: '/images/projects/app-udao-org.png',
      href: 'https://app.udao.org',
      github: '',
      tags: [
        t('ProjectsPage.tags.dApp'),
        t('ProjectsPage.tags.react'),
        t('ProjectsPage.tags.typescript')
      ],
      featured: true,
      category: 'client'
    },
    {
      title: t('ProjectsPage.projects.rexven.title'),
      description: t('ProjectsPage.projects.rexven.description'),
      image: '/images/projects/rexven-com.png',
      href: 'https://rexven.com',
      github: '',
      tags: [
        t('ProjectsPage.tags.fullStack'),
        t('ProjectsPage.tags.saas'),
        t('ProjectsPage.tags.logistics')
      ],
      featured: true,
      category: 'client'
    },
    {
      title: t('ProjectsPage.projects.nexpresst.title'),
      description: t('ProjectsPage.projects.nexpresst.description'),
      image: '/images/projects/npm.jpg',
      href: 'https://www.npmjs.com/package/nexpresst',
      github: 'https://github.com/demirtasdurmus/nexpresst',
      stars: '2',
      tags: [
        t('ProjectsPage.tags.nextjs'),
        t('ProjectsPage.tags.api'),
        t('ProjectsPage.tags.middleware'),
        t('ProjectsPage.tags.typescript')
      ],
      featured: true,
      category: 'open-source'
    },
    {
      title: t('ProjectsPage.projects.localBranchCleanup.title'),
      description: t('ProjectsPage.projects.localBranchCleanup.description'),
      image: '/images/projects/npm.jpg',
      href: 'https://www.npmjs.com/package/local-branch-cleanup',
      github: 'https://github.com/demirtasdurmus/local-branch-cleanup',
      stars: '7',
      tags: [t('ProjectsPage.tags.cli'), t('ProjectsPage.tags.git'), t('ProjectsPage.tags.nodejs')],
      featured: false,
      category: 'open-source'
    },
    {
      title: t('ProjectsPage.projects.todoQuill.title'),
      description: t('ProjectsPage.projects.todoQuill.description'),
      image: '/images/projects/todo-quill.png',
      href: 'https://apps.apple.com/us/app/todo-quill/id6751898106',
      github: 'https://github.com/demirtasdurmus/todo-quill',
      stars: '1',
      tags: [
        t('ProjectsPage.tags.reactNative'),
        t('ProjectsPage.tags.expo'),
        t('ProjectsPage.tags.typescript')
      ],
      featured: false,
      category: 'open-source'
    }
  ];
}

export function getTranslatedFeaturedProjects(t: _Translator) {
  return getTranslatedProjects(t).filter((p) => p.featured);
}
export function getTranslatedClientProjects(t: _Translator) {
  return getTranslatedProjects(t).filter((p) => p.category === 'client');
}
export function getTranslatedOpenSourceProjects(t: _Translator) {
  return getTranslatedProjects(t).filter((p) => p.category === 'open-source');
}
