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
  github?: string;
  tags: string[];
  featured?: boolean;
};
