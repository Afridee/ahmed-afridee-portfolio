'use client';

import { ChevronRight, Github, Play, Youtube } from 'lucide-react';
import { projects, type Project } from '@/lib/content';
import { Reveal, StaggerGroup, StaggerItem } from './reveal';
import { SectionHeader } from './section-header';

function youtubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/);
  return match ? match[1] : null;
}

// Linked video thumbnail for projects with a recorded demo.
function VideoThumbnail({ project, videoId }: { project: Project; videoId: string }) {
  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[24px] border border-lavender bg-ink shadow-whisper transition-shadow duration-200 ease-out hover:shadow-whisper-lift"
      aria-label={`Watch the ${project.name} demo on YouTube`}
    >
      <div className="relative aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={`${project.name} demo video`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/25 transition-colors duration-200 group-hover:bg-ink/10" />
        <span className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill bg-cobalt text-branco shadow-whisper transition-transform duration-200 ease-out group-hover:scale-105">
          <Play size={20} fill="currentColor" className="ml-0.5" />
        </span>
        <span className="absolute bottom-4 left-4 rounded-pill bg-ink/85 px-3.5 py-1.5 font-mono text-[0.75rem] text-branco backdrop-blur">
          watch the demo
        </span>
      </div>
    </a>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-lavender bg-branco shadow-whisper">
      <div className="relative aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.imageAlt ?? `${project.name} screenshot`}
          className="absolute inset-0 h-full w-full object-contain p-2"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Static mock frame used until real screenshots are supplied.
function ScreenshotPlaceholder({ project }: { project: Project }) {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[24px] border border-lavender bg-branco shadow-whisper">
      <div className="flex h-[80%] aspect-[9/17] flex-col overflow-hidden rounded-[18px] border-[3px] border-ink bg-canvas shadow-whisper">
        <div className="border-b border-lavender bg-branco px-3 py-2.5">
          <div className="h-2 w-16 rounded-pill bg-ink/80" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="rounded-md border border-lavender bg-branco p-2.5">
            <div className="h-1.5 w-3/4 rounded-pill bg-slate/50" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-pill bg-lavender" />
          </div>
          <div className="rounded-md border border-cobalt/40 bg-branco p-2.5">
            <div className="h-1.5 w-2/3 rounded-pill bg-cobalt/60" />
            <div className="mt-1.5 h-1.5 w-3/4 rounded-pill bg-lavender" />
          </div>
          <div className="rounded-md border border-lavender bg-branco p-2.5">
            <div className="h-1.5 w-1/2 rounded-pill bg-slate/50" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-pill bg-lavender" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-4 right-4 font-mono text-[0.75rem] text-slate">
        {project.name.toLowerCase()} — screenshots coming soon
      </span>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const videoId = project.demo ? youtubeId(project.demo) : null;
  if (videoId) return <VideoThumbnail project={project} videoId={videoId} />;
  if (project.image) return <ProjectImage project={project} />;
  return <ScreenshotPlaceholder project={project} />;
}

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      {/* Zig-zag: visual and text swap sides on alternate rows (md and up) */}
      <Reveal className={reversed ? 'md:order-2' : ''}>
        <ProjectVisual project={project} />
      </Reveal>

      <Reveal className={reversed ? 'md:order-1' : ''} delay={0.08}>
        <p className="mb-2 font-mono text-small text-slate">
          project {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="text-h2 text-ink">{project.name}</h3>
        <p className="mt-1 text-body font-medium text-slate">
          {project.headline}
        </p>

        <StaggerGroup className="mt-6 flex flex-col gap-3">
          {project.bullets.map((bullet) => (
            <StaggerItem key={bullet} className="flex gap-3">
              <ChevronRight
                size={16}
                className="mt-1.5 shrink-0 text-cobalt"
              />
              <p className="prose-measure text-body text-ink">{bullet}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-pill border border-lavender bg-branco px-3 py-1 font-mono text-[0.75rem] text-slate"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill bg-cobalt px-5 py-2.5 text-small font-semibold text-branco shadow-whisper transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-px hover:bg-cobalt-dark hover:shadow-whisper-lift active:translate-y-px"
          >
            <Github size={15} />
            GitHub Repo
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-slate px-5 py-2.5 text-small font-semibold text-ink transition-colors duration-200 ease-out hover:bg-branco"
            >
              <Youtube size={15} />
              Watch Demo
            </a>
          ) : null}
        </div>
      </Reveal>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="container-page">
        <SectionHeader
          index="03 — projects"
          title="AI Engineering Projects"
          lead="Agents, retrieval pipelines, and on-device inference — built end to end and shipped."
        />

        <div className="flex flex-col gap-[clamp(4rem,6vw,6rem)]">
          {projects.map((project, index) => (
            <ProjectRow key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
