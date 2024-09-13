import { Button } from "../ui/Button";
import { SVGProps } from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="sm:hidden"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      {isOpen ? (
        <CloseIcon className="h-5 w-5" />
      ) : (
        <MenuIcon className="h-5 w-5" />
      )}
      <span className="sr-only">Open menu</span>
    </Button>
  );
}

interface MenuIconProps extends SVGProps<SVGSVGElement> {}

const MenuIcon: React.FC<MenuIconProps> = (props) => {
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
};

interface CloseIconProps extends SVGProps<SVGSVGElement> {}

const CloseIcon: React.FC<CloseIconProps> = (props) => {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};
