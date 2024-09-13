import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Durmuş Demirtaş. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <SocialLink
              href="https://github.com/demirtasdurmus"
              icon={<GithubIcon className="h-5 w-5" />}
              label="GitHub"
            />

            <SocialLink
              href="https://www.linkedin.com/in/durmu%C5%9F-demirta%C5%9F-793a981ab/"
              icon={<LinkedinIcon className="h-5 w-5" />}
              label="LinkedIn"
            />

            <SocialLink
              href="https://x.com/drmsdmrts"
              icon={<XIcon className="h-5 w-5" />}
              label="Twitter"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-300 hover:text-neutral-400 transition-colors duration-200"
      prefetch={false}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
};

interface GithubIconProps extends React.SVGProps<SVGSVGElement> {}

const GithubIcon: React.FC<GithubIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.06c-3.2.69-3.88-1.39-3.88-1.39-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.48.11-3.09 0 0 .96-.31 3.15 1.19A10.96 10.96 0 0 1 12 5.8c.97 0 1.94.13 2.86.37 2.2-1.5 3.15-1.19 3.15-1.19.62 1.61.23 2.8.11 3.09.73.81 1.18 1.84 1.18 3.1 0 4.43-2.68 5.41-5.23 5.7.41.35.77 1.03.77 2.08v3.08c0 .3.21.65.78.55A11.47 11.47 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
};

interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {}

const LinkedinIcon: React.FC<LinkedinIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

interface XIconProps extends React.SVGProps<SVGSVGElement> {}

const XIcon: React.FC<XIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};
