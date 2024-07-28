import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Heading1 } from "./ui/Heading";

export default function Hero() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <Heading1 className="text-primary-200 font-bold tracking-tight">
            Hi, I&apos;m Durmus Demirtas
          </Heading1>

          <p className="mt-4 text-lg text-neutral-400">
            I&apos;m a passionate full stack developer with a focus on creating
            beautiful and functional user interfaces.
          </p>

          <div className="mt-6 flex space-x-4">
            <Link href="#about" prefetch={false}>
              <Button className="animate-pulse">About Me</Button>
            </Link>

            <Link href="#projects" prefetch={false}>
              <Button variant={"outline"} className="animate-pulse">
                My Projects
              </Button>
            </Link>

            <Link href="#blog" prefetch={false}>
              <Button variant={"outline"} className="animate-pulse">
                My Blog
              </Button>
            </Link>
          </div>
        </div>

        <div className="justify-self-center">
          <Image
            src="/profile-picture.png"
            alt="Durmus Demirtas"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-full h-full w-96"
            priority
          />
        </div>
      </div>
    </section>
  );
}
