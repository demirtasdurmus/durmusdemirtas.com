"use client";

import { useEffect, useRef } from "react";
import { navigationLinks } from ".";
import NavLink from "./NavLink";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MobileMenu({ toggleMenu, isOpen }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 top-16 z-50 bg-neutral-100 p-4 shadow-lg"
    >
      <nav className="flex flex-col space-y-4">
        {navigationLinks.map(({ title, href }) => (
          <NavLink key={title} title={title} href={href} onClick={toggleMenu} />
        ))}
      </nav>
    </div>
  );
}
