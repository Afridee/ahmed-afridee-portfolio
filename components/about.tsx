'use client';

import { GraduationCap } from 'lucide-react';
import { profile, aboutStats, education } from '@/lib/content';
import { Reveal, StaggerGroup, StaggerItem } from './reveal';
import { SectionHeader } from './section-header';

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="container-page">
        <SectionHeader index="01 — about" title="About" />

        {/* Asymmetric split: narrative left, stats right */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <Reveal>
            <p className="prose-measure text-[1.125rem] leading-[1.7] text-ink">
              {profile.summary}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-lavender bg-branco px-5 py-4 shadow-whisper">
              <GraduationCap size={20} className="shrink-0 text-cobalt" />
              <div>
                <p className="text-small font-medium text-ink">
                  {education.degree}
                </p>
                <p className="font-mono text-[0.75rem] text-slate">
                  {education.school} · {education.period}
                </p>
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="rounded-lg border border-lavender bg-branco p-5 shadow-whisper"
              >
                <p className="font-mono text-[1.75rem] font-bold tracking-tight text-cobalt">
                  {stat.value}
                </p>
                <p className="mt-1 text-small text-slate">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
