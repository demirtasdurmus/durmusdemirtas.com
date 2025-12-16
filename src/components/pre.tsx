'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { CopyButton } from '@/components/copy-button';

type PreProps = React.HTMLAttributes<HTMLPreElement> & {
  'data-language'?: string;
  raw?: string;
};

export const Pre: React.FC<PreProps> = ({ className, children, raw, ...props }) => {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [codeText, setCodeText] = React.useState('');

  React.useEffect(() => {
    if (raw) {
      setCodeText(raw);
    } else if (preRef.current) {
      setCodeText(preRef.current.textContent ?? '');
    }
  }, [raw, children]);

  return (
    <div className="group relative">
      <CopyButton
        text={codeText}
        className="opacity-0 transition-opacity group-hover:opacity-100"
      />
      <pre
        ref={preRef}
        className={cn('mt-6 mb-4 overflow-x-auto rounded-lg border bg-black py-4', className)}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};
