export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  github?: string;
  stars?: string;
  featured?: boolean;
  openSource?: boolean;
};

export type PromiseParams<T> = Promise<{ [K in keyof T]: T[K] }>;
