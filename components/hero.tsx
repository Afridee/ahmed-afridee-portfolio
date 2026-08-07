'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, MapPin } from 'lucide-react';
import { profile } from '@/lib/content';
import { fadeUp, staggerContainer } from './reveal';

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100dvh-4rem)] items-center bg-gradient-to-b from-ink to-preto text-branco"
    >
      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
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

          <motion.h1 variants={fadeUp} className="text-hero text-branco">
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-mono text-body font-medium text-cobalt"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="prose-measure mt-6 text-body text-silver"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download="Ahmed-Afridee-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-pill bg-cobalt px-6 py-3 text-small font-semibold text-branco shadow-whisper transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-px hover:bg-cobalt-dark hover:shadow-whisper-lift active:translate-y-px"
            >
              <Download size={16} strokeWidth={2.5} />
              Download Resume
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-square overflow-hidden rounded-[24px] shadow-whisper ring-1 ring-white/15">
            <Image
              src="/profile.png"
              alt="Portrait of Ahmed Afridee"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-top"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-pill bg-ink/85 px-4 py-1.5 font-mono text-[0.75rem] text-branco backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-pill bg-cobalt" />
              Open to Flutter &amp; AI roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
