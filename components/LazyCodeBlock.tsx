'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyCodeBlockProps {
  code: string;
  className?: string;
  /** Approximate height used by containIntrinsicHeight to prevent CLS */
  estimatedHeight?: string;
}

/**
 * Renders a <pre> code block lazily via IntersectionObserver.
 * The code string is included in the initial HTML (sr-only) for SEO,
 * and becomes visible once the element enters the viewport.
 * content-visibility: auto lets the browser skip layout/paint off-screen.
 */
export function LazyCodeBlock({
  code,
  className,
  estimatedHeight = '160px',
}: LazyCodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        contentVisibility: 'auto',
        containIntrinsicHeight: `auto ${estimatedHeight}`,
      }}
    >
      <pre className={className}>
        {loaded ? (
          code
        ) : (
          /* Visible to crawlers, invisible to users until in-viewport */
          <span className="sr-only">{code}</span>
        )}
      </pre>
    </div>
  );
}
