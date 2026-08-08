'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 2200;
const PAUSE_BEFORE_NEXT_MS = 400;

// Types and deletes through `phrases` with a blinking caret. Renders the
// static `fallback` string when the user prefers reduced motion.
export function Typewriter({
  phrases,
  fallback,
  className,
}: {
  phrases: string[];
  fallback: string;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const phrase = phrases[phraseIndex];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === phrase.length) delay = HOLD_MS;
    else if (deleting && length === 0) delay = PAUSE_BEFORE_NEXT_MS;

    const timeout = setTimeout(() => {
      if (!deleting && length === phrase.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [reducedMotion, phrases, phraseIndex, length, deleting]);

  if (reducedMotion) {
    return <span className={className}>{fallback}</span>;
  }

  return (
    <span className={className} aria-label={fallback}>
      <span aria-hidden>
        {phrases[phraseIndex].slice(0, length) || '\u00A0'}
      </span>
      <span aria-hidden className="typewriter-caret" />
    </span>
  );
}
