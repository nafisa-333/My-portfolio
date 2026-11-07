import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { ease, inViewOnce } from '../components/Reveal';

export function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section aria-labelledby="journey-title" className="relative overflow-hidden bg-bg-alt py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="02"
              eyebrow="Academic Journey"
              id="journey-title"
              title={
                <>
                  A Path Through <em className="text-forest">the Life Sciences</em>
                </>
              }
              intro="From secondary school to a Bachelor of Science in Zoology."
            />
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-8 lg:pl-8">
          {/* Track and scroll-drawn progress line */}
          <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line-strong lg:left-[39px]" aria-hidden="true" />
          <motion.span
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gold lg:left-[39px]"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          {education.map((e, i) => (
            <motion.li
              key={e.degree}
              className="relative pb-14 pl-10 last:pb-0 sm:pl-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.9, ease, delay: i * 0.08 }}
            >
              <span
                className={`absolute top-2 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border ${
                  i === 0 ? 'border-gold bg-gold' : 'border-gold bg-bg-alt'
                }`}
                aria-hidden="true"
              />
              <p className="eyebrow">{e.period}</p>
              <div
                className={`mt-3 rounded-sm border border-line p-6 sm:p-8 ${
                  i === 0 ? 'bg-surface shadow-[var(--shadow)]' : 'bg-transparent'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className={`font-display text-ink ${i === 0 ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{e.degree}</h3>
                    <p className="mt-2 font-medium text-ink">{e.institution}</p>
                    {e.body && <p className="text-sm text-ink-soft">{e.body}</p>}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-sm font-semibold text-gold-ink">
                    {i === 0 && <GraduationCap size={15} strokeWidth={1.8} aria-hidden="true" />}
                    {e.result}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
