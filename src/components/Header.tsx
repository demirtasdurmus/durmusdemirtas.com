import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-100 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" prefetch={false}>
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        </Link>

        {/* Navigation */}
        <nav className="hidden space-x-4 sm:flex">
          <NavLink title="About" href="#about" />

          <NavLink title="Projects" href="#projects" />

          <NavLink title="Blog" href="#blog" />

          <NavLink title="Contact" href="#contact" />
        </nav>

        {/* Mobile Hamburger Menu */}
        <Button variant="outline" size="sm" className="sm:hidden">
          <MenuIcon className="h-5 w-5 animate-bounce" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
    </header>
  );
}

function NavLink(props: { title: string; href: string }) {
  return (
    <Link
      href={props.href}
      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-200"
      prefetch={false}
    >
      {props.title}
    </Link>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
