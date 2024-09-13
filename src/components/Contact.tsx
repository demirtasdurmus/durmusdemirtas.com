import { Heading2 } from "./ui/Heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 pt-24 sm:pt-32"
    >
      <Heading2 className="font-bold tracking-tight text-primary-200">
        Get in Touch
      </Heading2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p className="text-lg text-neutral-400">
            Feel free to reach out to me if you have any questions or would like
            to discuss a project.
          </p>
          <ul className="mt-4 space-y-2 animate-fade-in-up">
            <li>
              <a
                href="mailto:demirtasdurmus@gmail.com"
                className="flex items-center text-neutral-300 hover:text-neutral-400 transition-colors duration-200"
              >
                <MailIcon className="mr-2 h-5 w-5" />
                <span>demirtasdurmus@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

interface MailIconProps extends React.SVGProps<SVGSVGElement> {}

const MailIcon: React.FC<MailIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};
