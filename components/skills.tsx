'use client';

import { Smartphone, BrainCircuit, Workflow } from 'lucide-react';
import { coreSkills, skillGroups } from '@/lib/content';
import { Reveal, StaggerGroup, StaggerItem } from './reveal';
import { SectionHeader } from './section-header';

const groupIcons = [Smartphone, BrainCircuit, Workflow];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="container-page">
        <SectionHeader
          index="05 — skills"
          title="Skills"
          lead="Mobile foundations, AI and backend systems, and the tooling that ships them."
        />

        {/* Stacked asymmetric rows — label rail left, pills right. Never 3-equal columns. */}
        <div className="flex flex-col gap-6">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index] ?? Workflow;
            return (
              <Reveal key={group.title}>
                <div className="grid gap-5 rounded-lg border border-lavender bg-branco p-6 shadow-whisper md:grid-cols-[240px_1fr] md:gap-10 md:p-8">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-canvas text-cobalt">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-body font-semibold tracking-tight text-ink">
                      {group.title}
                    </h3>
                  </div>

                  <StaggerGroup className="flex flex-wrap items-center gap-2">
                    {group.skills.map((skill) => (
                      <StaggerItem key={skill}>
                        {coreSkills.includes(skill) ? (
                          <span className="inline-block rounded-pill bg-ink px-3.5 py-1.5 text-small font-semibold text-branco shadow-whisper">
                            {skill}
                          </span>
                        ) : (
                          <span className="inline-block rounded-pill border border-lavender bg-canvas px-3.5 py-1.5 text-small text-ink">
                            {skill}
                          </span>
                        )}
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
