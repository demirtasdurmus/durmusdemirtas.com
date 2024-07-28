import { cn } from "@/utils/cn";
import { forwardRef, HTMLAttributes } from "react";

export const Heading1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("scroll-m-20 text-4xl sm:text-5xl", className)}
    {...props}
  />
));
Heading1.displayName = "Heading1";

export const Heading2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("scroll-m-20 text-3xl sm:text-4xl", className)}
    {...props}
  />
));
Heading2.displayName = "Heading2";

export const Heading3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("scroll-m-20 text-2xl sm:text-3xl", className)}
    {...props}
  />
));
Heading3.displayName = "Heading3";

export const Heading4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("scroll-m-20 text-xl sm:text-2xl", className)}
    {...props}
  />
));
Heading4.displayName = "Heading4";
