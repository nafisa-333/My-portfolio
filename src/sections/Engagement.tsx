import { motion } from 'motion/react';
import { BookOpenText, GraduationCap, Mic, PenLine } from 'lucide-react';
import { activities, volunteer } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { ease, inViewOnce, staggerChild, staggerParent } from '../components/Reveal';

const activityIcons = [Mic, PenLine, BookOpenText, GraduationCap];

export function Engagement() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-bg-alt py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <SectionHeading
          index="07"
          eyebrow="Projects & Engagement"
          id="projects-title"
          title={
            <>
              Beyond <em className="text-forest">the Classroom</em>
            </>
          }
          intro="Volunteer roles in student research and skills organisations, plus ongoing work in teaching and science communication."
        />

        <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Volunteer experience */}
          <div className="lg:col-span-7">
            <h3 className="eyebrow">Volunteer Experience</h3>
            <ol className="mt-6 space-y-5">
              {volunteer.map((v, i) => (
                <motion.li
                  key={v.org}
                  className="group relative grid gap-4 overflow-hidden rounded-sm border border-line bg-surface p-7 transition-[border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-line-strong sm:grid-cols-[1fr_auto] sm:items-end sm:p-9"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={inViewOnce}
                  transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                >
                  <span
                    className="absolute top-0 bottom-0 left-0 w-[3px] origin-bottom scale-y-0 bg-gold transition-transform duration-700 group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                      {v.current && (
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                          <span className="absolute inset-0 rounded-full bg-gold" />
                        </span>
                      )}
                      {v.period}
                      {v.current && <span className="sr-only">(current role)</span>}
                    </p>
                    <p className="font-display mt-3 text-3xl leading-tight text-ink sm:text-[2.1rem]">{v.role}</p>
                    <p className="mt-1.5 text-ink-soft">{v.org}</p>
                  </div>
                  <span className="font-display text-6xl leading-none text-line-strong sm:text-7xl" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Additional activities */}
          <div className="lg:col-span-5">
            <h3 className="eyebrow">Additional Activities</h3>
            <motion.ul
              className="mt-6 border-t border-line-strong"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
            >
              {activities.map((a, i) => {
                const Icon = activityIcons[i];
                return (
                  <motion.li
                    key={a.title}
                    variants={staggerChild}
                    className="group flex gap-5 border-b border-line-strong py-6"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong text-gold-ink transition-colors duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-[#071A15]">
                      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-2xl leading-tight text-ink">{a.title}</p>
                      <p className="mt-1 text-[0.95rem] text-ink-soft">{a.note}</p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
