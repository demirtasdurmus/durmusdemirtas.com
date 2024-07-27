import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#6c5ce7]">
            Hi, I&apos;m Durmus Demirtas
          </h1>

          <Button variant={"outline"}>Content</Button>
          <h1 className="bg-foreground">Test</h1>

          <p className="mt-4 text-lg text-[#7b7b7b]">
            I&apos;m a passionate full stack developer with a focus on creating
            beautiful and functional user interfaces.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              href="#"
              className="inline-flex items-center rounded-md bg-[#6c5ce7] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#5a49c5] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 animate-pulse"
              prefetch={false}
            >
              About Me
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-md border border-[#e6e6e6] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#7b7b7b] shadow-sm transition-colors hover:bg-[#e6e6e6] hover:text-[#333] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 animate-bounce"
              prefetch={false}
            >
              My Projects
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-md border border-[#e6e6e6] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#7b7b7b] shadow-sm transition-colors hover:bg-[#e6e6e6] hover:text-[#333] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 animate-pulse"
              prefetch={false}
            >
              My Blog
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <Image
            src="/profile-pic.png"
            width="400"
            height="400"
            alt="Durmus Demirtas"
            className="mx-auto rounded-full animate-spin-slow"
            priority
          />
        </div>
      </div>
    </section>
  );
}
