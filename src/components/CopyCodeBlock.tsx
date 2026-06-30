'use client';

import { ReactNode, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface CopyCodeBlockProps {
  children: ReactNode;
  eventContext?: string;
}

export default function CopyCodeBlock({ children, eventContext = 'day_content' }: CopyCodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = preRef.current?.textContent?.trim() || '';

    if (!code) {
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      trackEvent('copy_code', {
        context: eventContext,
        length: code.length,
      });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative group my-6">
      <pre
        ref={preRef}
        onClick={handleCopy}
        className="bg-slate-900 border border-slate-700 rounded-xl p-5 overflow-x-auto text-sm shadow-lg cursor-copy hover:bg-slate-800/80 transition-colors"
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          handleCopy();
        }}
        className="absolute top-2 right-2 px-2 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs rounded-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  );
}
