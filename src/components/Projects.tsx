import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#6c5ce7]">
        My Projects
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Project
          name="Project 1"
          description="A brief description of the first project."
          image="/portfolio-placeholder.webp"
          href="#"
        />

        <Project
          name="Project 2"
          description="A brief description of the second project."
          image="/portfolio-placeholder.webp"
          href="#"
        />

        <Project
          name="Project 3"
          description="A brief description of the third project."
          image="/portfolio-placeholder.webp"
          href="#"
        />
      </div>
    </section>
  );
}

function Project(props: {
  name: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Card className="animate-fade-in-up h-[550px]">
      <CardContent className="pt-8">
        <Image
          src={props.image}
          width="400"
          height="300"
          alt="Project 1"
          className="rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-[#6c5ce7]">{props.name}</h3>

          <p className="mt-2 text-[#7b7b7b]">{props.description}</p>

          <div className="mt-4 flex justify-end">
            <Link
              href={props.href}
              className="inline-flex items-center rounded-md bg-[#6c5ce7] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#5a49c5] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 animate-pulse"
              prefetch={false}
            >
              View Project
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
