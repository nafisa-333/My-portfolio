import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { cv, photos, profile } from '../data/content';
import { Photo } from '../components/Photo';
import { Landscape } from '../components/Landscape';
import { ease } from '../components/Reveal';

const lines = [
  { text: 'Exploring Life.', accent: false },
  { text: 'Understanding Nature.', accent: true },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Photograph with slow parallax and cinematic settle-in */}
      {/* Mobile: the photograph occupies the upper part and the copy sits beneath it. Desktop: full bleed. */}
      <motion.div
        className="absolute inset-x-0 top-0 -z-20 h-[64svh] overflow-hidden lg:inset-0 lg:h-auto lg:overflow-visible"
        style={{ y: imageY }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.14, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <Photo
            photo={photos.hero}
            sizes="100vw"
            priority
            className="h-full w-full object-cover object-[60%_30%] lg:object-[68%_30%] dark:brightness-[0.82] dark:saturate-[0.9]"
          />
        </motion.div>
        {/* Mobile: dissolve the photo's lower edge into the page (moves with the photo) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,var(--bg)_2%,color-mix(in_srgb,var(--bg)_70%,transparent)_22%,transparent_50%)] lg:hidden"
          aria-hidden="true"
        />
      </motion.div>

      {/* Atmospheric overlays: golden haze, then a legibility veil on the text side */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(70% 60% at 85% 20%, rgba(198,161,91,0.22), transparent 60%), radial-gradient(60% 50% at 10% 90%, rgba(198,161,91,0.10), transparent 70%)',
        }}
      />
      {/* Desktop: a veil on the left for the headline */}
      <div
        className="absolute inset-0 -z-10 hidden bg-[linear-gradient(100deg,var(--bg)_8%,color-mix(in_srgb,var(--bg)_78%,transparent)_34%,transparent_62%)] lg:block"
        aria-hidden="true"
      />
      {/* Top veil so the navigation stays legible over bright sky */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-36 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--bg)_75%,transparent),transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 hidden bg-[radial-gradient(120%_80%_at_80%_20%,transparent_40%,rgba(7,26,21,0.55))] dark:block"
        aria-hidden="true"
      />

      <Landscape className="bottom-0 -z-10 h-[16vh] min-h-24 opacity-90" variant="hills" />

      {/* Copy */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative flex flex-1 flex-col justify-end pt-[52svh] pb-28 lg:justify-center lg:pt-28"
      >
        <div className="max-w-[40rem]">
          <motion.p
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
          >
            {profile.identity.map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {i > 0 && <span className="h-3 w-px bg-gold/60" aria-hidden="true" />}
                {word}
              </span>
            ))}
          </motion.p>

          <h1 id="hero-title" className="font-display mt-5 max-w-[7.4em] text-[2.85rem] text-ink min-[400px]:text-[3.1rem] sm:text-7xl lg:text-[clamp(4rem,10.5vh,5.6rem)] xl:text-[clamp(4rem,11vh,6.2rem)]">
            <span className="sr-only">{profile.name} — </span>
            {lines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${line.accent ? 'italic text-forest' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.3, ease, delay: 0.7 + i * 0.16 }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-[30rem] text-base text-pretty text-ink-soft sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.2 }}
          >
            A Zoologist exploring biodiversity, ecological systems and the intricate relationships that shape life on
            Earth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.4 }}
          >
            <a
              href="#research"
              className="group inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-on-forest shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Explore My Work
              <ArrowDown
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-bg/40 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold active:translate-y-0 active:scale-[0.98]"
            >
              Get in Touch
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={cv.href}
              download={cv.filename}
              type="application/pdf"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-bg/40 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold active:translate-y-0 active:scale-[0.98]"
            >
              Download CV
              <Download
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer strip: affiliation + scroll cue */}
      <motion.div
        className="container-x absolute inset-x-0 bottom-6 flex items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
      >
        <a href="#about" className="flex items-center gap-3 text-ink-soft hover:text-ink" aria-label="Scroll to About section">
          <span className="relative block h-10 w-px overflow-hidden bg-line-strong" aria-hidden="true">
            <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gold" />
          </span>
          <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
