import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Publications } from '@/components/publications';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-stack py-[clamp(4rem,8vw,8rem)]">
          <About />
          <Experience />
          <Projects />
          <Publications />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
