'use client';

import { ArrowUpRight, BookOpen } from 'lucide-react';
import { publication } from '@/lib/content';
import { Reveal } from './reveal';
import { SectionHeader } from './section-header';

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20">
      <div className="container-page">
        <SectionHeader index="04 — publications" title="Publications" />

        <Reveal>
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-lavender bg-branco p-6 shadow-whisper transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-px hover:shadow-whisper-lift md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-canvas text-cobalt">
                  <BookOpen size={18} />
                </span>
                <div>
                  <h3 className="prose-measure text-h2 text-ink transition-colors duration-200 group-hover:text-cobalt">
                    {publication.title}
                  </h3>
                  <p className="mt-3 font-mono text-small text-slate">
                    {publication.venue} · {publication.date}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-small font-semibold text-cobalt transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                Read article
                <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
