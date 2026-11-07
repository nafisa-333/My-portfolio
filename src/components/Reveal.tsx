import { motion, type HTMLMotionProps } from 'motion/react';

export const ease = [0.22, 1, 0.36, 1] as const;

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number };

/** Fades and lifts content into place the first time it scrolls into view. */
export function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const inViewOnce = { once: true, margin: '0px 0px -10% 0px' } as const;
