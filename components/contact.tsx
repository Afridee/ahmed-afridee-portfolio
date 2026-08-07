'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/content';
import { Reveal, StaggerGroup, StaggerItem } from './reveal';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="container-page">
        <Reveal>
          <div className="rounded-[24px] bg-gradient-to-b from-ink to-preto p-8 text-branco md:p-14">
            <p className="mb-3 font-mono text-small tracking-widest text-slate">
              06 — contact
            </p>
            <h2 className="text-h1 text-branco">
              Let&apos;s build something that works offline too.
            </h2>
            <p className="prose-measure mt-4 text-body text-silver">
              Open to Flutter and AI engineering work — reach out through any
              channel below.
            </p>

            <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2">
              {channels.map((channel) => {
                const external = channel.href.startsWith('http');
                return (
                  <StaggerItem key={channel.label} className="min-w-0">
                    <a
                      href={channel.href}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="flex w-full min-w-0 items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-white/5 px-5 py-4 transition-colors duration-200 ease-out hover:border-cobalt/60 hover:bg-white/10"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-white/10 text-cobalt">
                        <channel.icon size={18} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-small font-medium text-silver">
                          {channel.label}
                        </span>
                        <span className="block truncate font-mono text-small text-branco">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
