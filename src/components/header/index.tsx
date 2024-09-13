"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export const navigationLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-neutral-100 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" prefetch={false}>
          <Image src={"/logo.png"} alt="logo" width={35} height={35} />
        </Link>

        {/* Navigation */}
        <nav className="hidden space-x-4 sm:flex">
          {navigationLinks.map(({ title, href }) => (
            <NavLink key={title} title={title} href={href} />
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}
