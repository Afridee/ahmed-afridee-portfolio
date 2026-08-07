import { profile } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-lavender bg-canvas">
      <div className="container-page flex flex-col items-start justify-between gap-3 py-8 md:flex-row md:items-center">
        <p className="text-small text-slate">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          Tailwind CSS.
        </p>
        <p className="font-mono text-[0.75rem] text-slate">
          {profile.location} · {profile.email}
        </p>
      </div>
    </footer>
  );
}
