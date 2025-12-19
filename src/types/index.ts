export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type ProjectCategory = 'client' | 'open-source';

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  github?: string;
  stars?: string;
  featured?: boolean;
  category: ProjectCategory;
};

export type PromiseParams<T> = { params: Promise<{ [K in keyof T]: T[K] }> };
