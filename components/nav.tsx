'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const links = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#publications', id: 'publications', label: 'Publications' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

export function Nav() {
  const [activeId, setActiveId] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] border-b border-white/10 bg-ink"
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-small font-medium tracking-tight text-branco transition-colors duration-200 hover:text-cobalt"
        >
          afridee<span className="text-cobalt">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`rounded-pill px-4 py-2 text-small transition-colors duration-200 ${
                  activeId === link.id
                    ? 'font-medium text-cobalt'
                    : 'text-silver hover:text-branco'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download="Ahmed-Afridee-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-pill bg-branco px-4 py-2 text-small font-semibold text-ink shadow-whisper transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-px hover:bg-canvas hover:shadow-whisper-lift active:translate-y-px"
          >
            <Download size={14} strokeWidth={2.5} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-pill p-2 text-branco md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-ink md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-small transition-colors duration-200 ${
                    activeId === link.id
                      ? 'font-medium text-cobalt'
                      : 'text-silver'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/resume.pdf"
                download="Ahmed-Afridee-Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-pill bg-branco px-4 py-2 text-small font-semibold text-ink"
              >
                <Download size={14} strokeWidth={2.5} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
