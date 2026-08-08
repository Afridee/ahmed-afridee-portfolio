'use client';

import { useEffect, useRef } from 'react';

// Decorative layer behind the hero content: slow-drifting aurora gradients plus
// a dot grid whose dots brighten around the cursor. The spotlight is driven by
// the --mx/--my custom properties (updated directly on the DOM — no re-renders)
// and the aurora drift is pure CSS keyframes, so the whole layer is GPU-cheap.
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // The backdrop itself is pointer-events-none, so track the pointer on the
    // hero section that contains it.
    const host = el.parentElement;
    if (!host) return;

    const handleMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      el.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    const handleLeave = () => {
      el.style.setProperty('--mx', '-999px');
      el.style.setProperty('--my', '-999px');
    };

    host.addEventListener('pointermove', handleMove);
    host.addEventListener('pointerleave', handleLeave);
    return () => {
      host.removeEventListener('pointermove', handleMove);
      host.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ '--mx': '-999px', '--my': '-999px' } as React.CSSProperties}
    >
      <div className="hero-aurora hero-aurora-1" />
      <div className="hero-aurora hero-aurora-2" />
      <div className="hero-aurora hero-aurora-3" />
      <div className="hero-dots" />
      <div className="hero-dots hero-dots-glow" />
    </div>
  );
}
