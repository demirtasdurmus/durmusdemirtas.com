import { Heading2 } from "./ui/Heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
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
            <li className="flex items-center">
              <MailIcon className="mr-2 h-5 w-5 text-text-neutral-400" />
              <span>demirtasdurmus@gmail.com</span>
            </li>
            {/* <li className="flex items-center">
              <PhoneIcon className="mr-2 h-5 w-5 text-text-neutral-400" />
              <span>+9 (555) </span>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
