import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  title: string;
  className?: string;
}

export default function NavLink({
  title,
  className,
  href,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-200",
        className
      )}
      prefetch={false}
      {...props}
    >
      {title}
    </Link>
  );
}
