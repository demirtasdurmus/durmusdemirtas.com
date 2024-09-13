import Image from "next/image";
import { Heading2 } from "./ui/Heading";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 pt-24 sm:pt-32"
    >
      <div className="grid grid-cols-1 items-center lg:gap-8 lg:grid-cols-2">
        {/* About Me Image */}
        <div>
          <Image
            src="/about-me.jpg"
            width="400"
            height="400"
            alt="About Durmuş Demirtaş"
            className="mx-auto rounded-lg hidden lg:block"
            priority
          />
        </div>

        {/* About Me Content */}
        <div>
          <Heading2 className="font-bold tracking-tight text-primary-200">
            About Me
          </Heading2>

          <p className="mt-4 text-lg text-neutral-400">
            I&apos;m a full stack developer with a passion for creating
            beautiful and functional user interfaces. I have experience working
            with a variety of technologies, including React, Next.js, Node.js,
            and Tailwind CSS.
          </p>

          <p className="mt-4 text-lg text-neutral-400">
            In my free time, I enjoy exploring new technologies, reading about
            the latest industry trends, and contributing to open source
            projects. Im always eager to learn and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
