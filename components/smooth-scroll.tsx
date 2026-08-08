'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

// Inertia-based smooth scrolling. Lenis animates the native window scroll, so
// scroll-linked effects (Framer Motion useScroll, IntersectionObserver
// scrollspy) keep working. Skipped entirely under prefers-reduced-motion.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      // Take over in-page anchor links; -80px matches the sections'
      // scroll-mt-20 clearance under the sticky nav.
      anchors: { offset: -80 },
    });

    let frame = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
