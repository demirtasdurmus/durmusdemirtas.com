import { MainNavItem } from '@/types';

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: 'About Me',
      href: '/about'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Projects',
      href: '/projects'
    }
  ]
};
