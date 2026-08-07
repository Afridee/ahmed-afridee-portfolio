'use client';

import { Briefcase, ChevronRight, MapPin } from 'lucide-react';
import { experience } from '@/lib/content';
import { Reveal, StaggerGroup, StaggerItem } from './reveal';
import { SectionHeader } from './section-header';

// The one headline metric per bullet that a skimming reader should catch.
// Wording stays untouched — we only add emphasis.
const HEADLINE_METRICS = [
  '4,500+ field agents',
  '99%',
  '50,000+ daily writes',
  '257 employees',
  '0 incidents post-launch',
  '98%+ delivery reliability',
  '10+ releases',
  'zero manual deployment overhead',
];

function BulletText({ text }: { text: string }) {
  let best: { index: number; metric: string } | null = null;
  for (const metric of HEADLINE_METRICS) {
    const index = text.indexOf(metric);
    if (index !== -1 && (best === null || index < best.index)) {
      best = { index, metric };
    }
  }
  if (!best) return <>{text}</>;

  const end = best.index + best.metric.length;
  return (
    <>
      {text.slice(0, best.index)}
      <strong className="font-semibold">{text.slice(best.index, end)}</strong>
      {text.slice(end)}
    </>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="container-page">
        <SectionHeader
          index="02 — experience"
          title="Work Experience"
          lead="Five years of production Flutter — offline-first architecture, sync engines, and apps maintained solo from first commit to App Store."
        />

        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="rounded-lg border border-lavender bg-branco p-6 shadow-whisper md:p-10">
                {/* Asymmetric header: meta left, period right */}
                <div className="flex flex-col gap-4 border-b border-lavender pb-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-canvas text-cobalt">
                      <Briefcase size={18} />
                    </span>
                    <div>
                      <h3 className="text-h2 text-ink">{job.company}</h3>
                      <p className="mt-1 text-small font-medium text-slate">
                        {job.role} · {job.type}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-small text-slate">
                        <MapPin size={13} className="text-silver" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit shrink-0 rounded-pill border border-lavender bg-canvas px-4 py-1.5 font-mono text-small text-slate">
                    {job.period}
                  </span>
                </div>

                <StaggerGroup className="mt-6 flex flex-col gap-4">
                  {job.bullets.map((bullet) => (
                    <StaggerItem key={bullet} className="flex gap-3">
                      <ChevronRight
                        size={16}
                        className="mt-1.5 shrink-0 text-cobalt"
                      />
                      <p className="prose-measure text-body text-ink">
                        <BulletText text={bullet} />
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
