import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <Image
            src="/full-stack.jpg"
            width="400"
            height="400"
            alt="About Durmus Demirtas"
            className="mx-auto rounded-lg animate-fade-in"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#6c5ce7]">
            About Me
          </h2>
          <p className="mt-4 text-lg text-[#7b7b7b]">
            I&apos;m a full stack developer with a passion for creating
            beautiful and functional user interfaces. I have experience working
            with a variety of technologies, including React, Next.js, Node.js,
            and Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-[#7b7b7b]">
            In my free time, I enjoy exploring new technologies, reading about
            the latest industry trends, and contributing to open source
            projects. Im always eager to learn and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
