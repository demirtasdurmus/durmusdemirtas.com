import Image from "next/image";
import { Heading2 } from "./ui/Heading";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
    >
      <div className="grid grid-cols-1 items-center lg:gap-8 lg:grid-cols-2">
        {/* About Me Image */}
        <div className="relative w-full max-w-[500px] mx-auto hidden lg:block">
          <Image
            src="/about-me.jpg"
            alt="About Durmus Demirtas"
            width={500}
            height={400}
            className="rounded-lg object-cover"
            sizes="(max-width: 1023px) 100vw, 500px"
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
