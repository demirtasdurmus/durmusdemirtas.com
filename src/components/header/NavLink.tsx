import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

type Props = {
  title: string;
  className?: string;
} & LinkProps;

export default function NavLink({ title, className, href, ...props }: Props) {
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
