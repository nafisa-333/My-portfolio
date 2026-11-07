import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

type Props = { theme: Theme; onToggle: () => void; className?: string };

export function ThemeToggle({ theme, onToggle, className = '' }: Props) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-gold hover:text-gold-ink ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid place-items-center"
        >
          {isDark ? <Sun size={18} strokeWidth={1.6} /> : <Moon size={18} strokeWidth={1.6} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
