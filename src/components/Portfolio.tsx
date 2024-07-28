import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/cardd";
import { Heading2, Heading4 } from "./ui/Heading";
import { Button } from "./ui/buttonn";

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <Heading2 className="font-bold tracking-tight text-primary-200">
        My Projects
      </Heading2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <PortfolioItem
          name="Project 1"
          description="A brief description of the first project."
          image="/portfolio-placeholder.webp"
          href="#"
        />

        <PortfolioItem
          name="Project 2"
          description="A brief description of the second project."
          image="/portfolio-placeholder.webp"
          href="#"
        />

        <PortfolioItem
          name="Project 3"
          description="A brief description of the third project."
          image="/portfolio-placeholder.webp"
          href="#"
        />
      </div>
    </section>
  );
}

function PortfolioItem(props: {
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
          <Heading4 className="font-bold text-primary-200">
            {props.name}
          </Heading4>

          <p className="mt-2 text-neutral-400">{props.description}</p>

          <div className="mt-4 flex justify-end">
            <Link href={props.href} prefetch={false}>
              <Button>View Project</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
