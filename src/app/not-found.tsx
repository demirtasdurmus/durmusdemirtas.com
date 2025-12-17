import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="-mt-44 flex min-h-screen flex-col items-center justify-center space-y-4 px-6">
      <p className="text-muted-foreground text-sm font-semibold tracking-[0.2em] uppercase">
        404 — Not Found
      </p>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Lost in the stack?</h1>

      <p className="text-muted-foreground text-center text-lg leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
        back on track.
      </p>

      <Link href="/" className={cn(buttonVariants({ size: 'lg' }))}>
        Go Home
      </Link>
    </div>
  );
}
