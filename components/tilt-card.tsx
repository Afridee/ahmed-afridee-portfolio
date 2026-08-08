'use client';

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

const MAX_TILT_DEG = 6;
const SPRING = { stiffness: 220, damping: 20 };

// Pointer-tracked 3D tilt with a soft glare highlight. Only reacts to mouse
// pointers (no-op on touch) and stays flat under prefers-reduced-motion.
// Pass the card's border-radius via className so the glare clips to it.
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const rotateX = useSpring(0, SPRING);
  const rotateY = useSpring(0, SPRING);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(0, SPRING);

  const glare = useMotionTemplate`radial-gradient(320px circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.16), transparent 70%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - py) * MAX_TILT_DEG * 2);
    rotateY.set((px - 0.5) * MAX_TILT_DEG * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
      }}
      className={`relative ${className ?? ''}`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{ backgroundImage: glare, opacity: glareOpacity }}
      />
    </motion.div>
  );
}
