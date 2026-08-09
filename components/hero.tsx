'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import { ArrowDown, ArrowRight, Github, MapPin } from 'lucide-react';
import { heroProof, heroRoles, profile } from '@/lib/content';
import { fadeUp, staggerContainer } from './reveal';
import { HeroBackdrop } from './hero-backdrop';
import { Typewriter } from './typewriter';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Per-word blur-to-sharp reveal for the name headline.
const wordStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export function Hero() {
  const nameWords = profile.name.split(' ');

  // Portrait drifts gently as the hero scrolls out of view.
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [0, 36],
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-gradient-to-b from-ink to-preto text-branco"
    >
      <HeroBackdrop />
      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-pill border border-white/15 px-4 py-1.5 font-mono text-small text-silver"
          >
            <MapPin size={13} className="text-cobalt" />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={wordStagger}
            className="text-hero text-branco"
            aria-label={profile.name}
          >
            {nameWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={wordReveal}
                aria-hidden
                className="inline-block"
              >
                {word}
                {index < nameWords.length - 1 ? '\u00A0' : null}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-mono text-body font-medium text-cobalt"
          >
            <Typewriter phrases={heroRoles} fallback={profile.role} />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="prose-measure mt-6 text-body text-silver"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-sheen inline-flex items-center gap-2 rounded-pill bg-cobalt px-6 py-3 text-small font-semibold text-branco shadow-whisper transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-px hover:bg-cobalt-dark hover:shadow-whisper-lift active:translate-y-px"
            >
              View Projects
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-white/25 px-6 py-3 text-small font-semibold text-branco transition-colors duration-200 ease-out hover:bg-white/10"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-small text-silver"
          >
            {heroProof.map((item, index) => (
              <li key={item.label} className="flex items-center gap-3">
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="h-1 w-1 rounded-pill bg-white/25"
                  />
                ) : null}
                <span>
                  <span className="font-semibold text-branco">
                    {item.value}
                  </span>{' '}
                  {item.label}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.a
            variants={fadeUp}
            href="#about"
            className="mt-12 inline-flex items-center gap-2 font-mono text-small text-slate transition-colors duration-200 hover:text-silver"
          >
            <ArrowDown size={14} />
            scroll to explore
          </motion.a>
        </motion.div>

        <motion.div
          style={{ y: portraitY }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.24,
            }}
          >
            {/* Portrait composition: the cutout sits in a glowing cobalt disc,
                head breaking above its top edge (clipping handled by the
                .hero-cutout mask in globals.css — geometry must stay in sync). */}
            <div className="relative mx-auto aspect-square w-full max-w-[30rem] select-none">
              <div
                aria-hidden
                className="hero-orbit absolute left-[1.5%] top-[9%] aspect-square w-[97%] rounded-pill border border-dashed border-white/15"
              />
              <div
                aria-hidden
                className="hero-disc absolute bottom-0 left-[7.5%] aspect-square w-[85%] rounded-pill"
              />

              <div className="hero-cutout absolute inset-0">
                <Image
                  src="/profile-cutout.png"
                  alt="Portrait of Ahmed Afridee"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-bottom"
                />
              </div>

              {/* Hand-drawn-style emphasis strokes beside the head */}
              <svg
                aria-hidden
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
                className="absolute right-[10%] top-[1%] h-10 w-10 text-cobalt"
              >
                <path d="M8 40 L15 29" />
                <path d="M23 35 L27 22" />
                <path d="M35 27 L44 18" />
              </svg>

              <span className="hero-badge hero-badge-1 absolute left-[-3%] top-[34%] inline-flex items-center rounded-pill bg-ink/85 px-4 py-1.5 font-mono text-[0.75rem] text-branco ring-1 ring-white/15 backdrop-blur">
                Flutter
              </span>
              <span className="hero-badge hero-badge-2 absolute right-[-2%] top-[54%] inline-flex items-center rounded-pill bg-ink/85 px-4 py-1.5 font-mono text-[0.75rem] text-branco ring-1 ring-white/15 backdrop-blur">
                On-device AI
              </span>
              <span className="hero-badge hero-badge-3 absolute bottom-[5%] left-[1%] inline-flex items-center gap-2 rounded-pill bg-ink/85 px-4 py-1.5 font-mono text-[0.75rem] text-branco ring-1 ring-white/15 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-pill bg-cobalt" />
                Open to Flutter &amp; AI roles
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
