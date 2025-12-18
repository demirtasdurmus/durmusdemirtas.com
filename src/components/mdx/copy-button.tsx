'use client';

import * as React from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

type CopyButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const CopyButton: React.FC<CopyButtonProps> = ({ text, className, ...props }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      className={cn(
        'bg-background hover:bg-muted absolute top-3 right-3 z-10 size-8 rounded-md border p-1.5 backdrop-blur-sm transition-all',
        className
      )}
      onClick={copy}
      aria-label={isCopied ? 'Copied' : 'Copy code'}
      {...props}
    >
      {isCopied ? (
        <Check className="text-success size-full" />
      ) : (
        <Copy className="text-muted-foreground size-full" />
      )}
    </button>
  );
};
