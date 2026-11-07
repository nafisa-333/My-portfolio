import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MapPin, Plus } from 'lucide-react';
import { fieldwork } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { Landscape } from '../components/Landscape';
import { ease, inViewOnce } from '../components/Reveal';

export function Fieldwork() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="fieldwork"
      aria-labelledby="fieldwork-title"
      className="relative isolate overflow-hidden bg-bg-alt pt-24 pb-48 sm:pt-32 sm:pb-56 lg:pt-40"
    >
      <Landscape className="bottom-0 -z-10 h-56 sm:h-72" fade />
      <div
        className="absolute inset-0 -z-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(60% 40% at 80% 100%, rgba(198,161,91,0.18), transparent 70%)' }}
      />

      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="05"
              eyebrow="Fieldwork"
              id="fieldwork-title"
              title={
                <>
                  Learning <em className="text-forest">in the Field</em>
                </>
              }
              intro="Five field studies and visits, mostly along the Cox’s Bazar coast. Open an entry for details."
            />
          </div>
        </div>

        <ol className="border-t border-line-strong lg:col-span-8">
          {fieldwork.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            return (
              <motion.li
                key={f.title}
                className="border-b border-line-strong"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 0.8, ease, delay: i * 0.06 }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 text-left sm:grid-cols-[5rem_1fr_auto] sm:gap-6 sm:py-9"
                  >
                    <span
                      className={`font-display text-4xl transition-colors duration-500 sm:text-6xl ${
                        isOpen ? 'text-gold' : 'text-line-strong group-hover:text-sage'
                      }`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="font-display block text-2xl leading-tight text-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-[2rem]">
                        {f.title}
                      </span>
                      <span className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-soft">
                        {f.location ? (
                          <>
                            <MapPin size={14} strokeWidth={1.8} className="text-gold-ink" aria-hidden="true" />
                            {f.location}
                          </>
                        ) : (
                          f.kind
                        )}
                      </span>
                    </span>
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full border transition-[transform,background-color,border-color,color] duration-500 ${
                        isOpen
                          ? 'rotate-45 border-gold bg-gold text-[#071A15]'
                          : 'border-line-strong text-ink group-hover:border-gold'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={18} strokeWidth={1.6} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-9 sm:grid-cols-[5rem_1fr] sm:gap-6">
                        <span className="hidden sm:block" aria-hidden="true" />
                        <div className="relative overflow-hidden rounded-sm border border-line bg-surface p-6 sm:p-8">
                          <p className="max-w-xl text-pretty text-ink-soft">{f.summary}</p>
                          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
                            {f.focus.map((t) => (
                              <li
                                key={t}
                                className="rounded-full border border-line-strong px-3.5 py-1 text-xs font-medium tracking-wide text-ink"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
