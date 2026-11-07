import { MotionConfig } from 'motion/react';
import { navItems } from './data/content';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Nav } from './components/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Journey } from './sections/Journey';
import { Research } from './sections/Research';
import { Publications } from './sections/Publications';
import { Fieldwork } from './sections/Fieldwork';
import { Skills } from './sections/Skills';
import { Engagement } from './sections/Engagement';
import { Contact } from './sections/Contact';

const sectionIds = navItems.map((n) => n.id);

export default function App() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(sectionIds);

  return (
    // reducedMotion="user" disables transform/layout animation for visitors who prefer reduced motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-forest px-5 py-3 text-sm font-semibold text-on-forest focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Nav active={active} theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Research />
        <Publications />
        <Fieldwork />
        <Skills />
        <Engagement />
        <Contact />
      </main>
    </MotionConfig>
  );
}
