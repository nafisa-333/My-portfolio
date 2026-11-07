import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ease, inViewOnce } from './Reveal';

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ index, eyebrow, title, intro, id, align = 'left' }: Props) {
  const center = align === 'center';
  return (
    <header className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <motion.div
        className={`flex items-center gap-4 ${center ? 'justify-center' : ''}`}
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 0.8, ease }}
      >
        <span className="font-display text-lg italic text-gold-ink">{index}</span>
        <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        id={id}
        className="font-display mt-5 text-[2.5rem] text-balance text-ink sm:text-5xl lg:text-[3.75rem]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 1, ease, delay: 0.08 }}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          className="mt-6 text-base text-pretty text-ink-soft sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.9, ease, delay: 0.16 }}
        >
          {intro}
        </motion.p>
      )}
    </header>
  );
}
