import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/content';
import type { Theme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';
import { ease } from './Reveal';

type Props = { active: string; theme: Theme; onToggleTheme: () => void };

export function Nav({ active, theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 24;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  // Mobile menu: lock scroll, close on Escape, keep focus inside the panel.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
    window.requestAnimationFrame(() => focusables()[0]?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      menuButton.current?.focus();
    };
  }, [open]);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-500 ${
          scrolled
            ? 'border-b border-line bg-bg/80 py-2 backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-transparent py-4'
        }`}
      >
        <nav aria-label="Primary" className="container-x flex items-center justify-between gap-6">
          <a href="#home" className="group flex min-h-11 items-center gap-2 text-ink" aria-label={`${profile.name}, back to top`}>
            <span className="font-display text-[1.65rem] leading-none">
              Nafisa<span className="text-gold">.</span>
            </span>
            <span className="eyebrow hidden !text-[0.6rem] text-muted sm:inline">Zoology</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block px-3.5 py-2 text-[0.82rem] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#contact"
              className="hidden rounded-full bg-forest px-5 py-2.5 text-[0.8rem] font-semibold text-on-forest transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 xl:inline-block"
            >
              Get in Touch
            </a>
            <button
              ref={menuButton}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={20} strokeWidth={1.6} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-bg lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="container-x flex items-center justify-between py-4">
              <span className="font-display text-[1.65rem] leading-none text-ink">
                Nafisa<span className="text-gold">.</span>
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} strokeWidth={1.6} />
                </button>
              </div>
            </div>

            <ul className="container-x mt-6 flex flex-1 flex-col justify-center gap-1 pb-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                  className="border-b border-line"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span
                      className={`font-display text-4xl sm:text-5xl ${active === item.id ? 'text-gold-ink italic' : 'text-ink'}`}
                    >
                      {item.label}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-muted">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-x pb-8 text-sm text-ink-soft">
              <a href={`mailto:${profile.email}`} className="underline decoration-gold underline-offset-4">
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
