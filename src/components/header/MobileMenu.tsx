"use client";

import { navigationLinks } from ".";
import NavLink from "./NavLink";

type Props = {
  toggleMenu: () => void;
};

export default function MobileMenu({ toggleMenu }: Props) {
  return (
    <div
      className="absolute left-0 right-0 top-16 z-30 flex flex-col items-center space-y-6 self-end bg-neutral-100 py-8 font-bold drop-shadow-md sm:w-auto sm:self-center md:hidden"
      onClick={toggleMenu}
    >
      {navigationLinks.map(({ title, href }) => (
        <NavLink key={title} title={title} href={href} onClick={toggleMenu} />
      ))}
    </div>
  );
}
