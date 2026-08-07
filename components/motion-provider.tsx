'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

// Honors the OS-level prefers-reduced-motion setting: framer-motion drops the
// translate/stagger transforms and keeps only opacity changes.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
