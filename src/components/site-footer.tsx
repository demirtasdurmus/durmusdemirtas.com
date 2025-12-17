import * as React from 'react';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export const SiteFooter: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <footer className={cn(className)}>
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:hello@example.com">
            <span className="sr-only">Mail</span>
            <Icons.mail className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.x className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>

          <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
            <span className="sr-only">LinkedIn</span>
            <Icons.linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
