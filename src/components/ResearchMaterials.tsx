import { useCallback, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Award, ChevronDown, ScrollText } from 'lucide-react';
import type { ResearchDetails, ResearchDocument } from '../data/content';
import { DocumentViewer } from './DocumentViewer';
import { ease } from './Reveal';

type Props = { details: ResearchDetails; index: number };

const pill =
  'group/btn inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[0.8rem] font-semibold text-ink transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold active:translate-y-0 active:scale-[0.98]';

/** Overview, expandable abstract, and poster / certificate previews for a research entry. */
export function ResearchMaterials({ details, index }: Props) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const [doc, setDoc] = useState<ResearchDocument | null>(null);
  const close = useCallback(() => setDoc(null), []);
  const abstractId = useId();
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <div className="mt-6">
      <p className="text-[0.95rem] leading-relaxed text-pretty text-ink-soft">{details.overview}</p>

      <dl className="mt-6 grid gap-x-6 gap-y-3 border-t border-line pt-5 text-sm sm:grid-cols-[auto_1fr]">
        <dt className="text-xs font-semibold tracking-[0.18em] text-muted uppercase sm:pt-0.5">Category</dt>
        <dd className="text-ink">{details.category}</dd>
        {details.facts.map((f) => (
          <div key={f.label} className="contents">
            <dt className="mt-1 text-xs font-semibold tracking-[0.18em] text-muted uppercase sm:mt-0 sm:pt-0.5">{f.label}</dt>
            <dd className="text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-7 flex flex-wrap gap-2.5">
        <button
          ref={toggle}
          type="button"
          className={pill}
          aria-expanded={abstractOpen}
          aria-controls={abstractId}
          onClick={() => setAbstractOpen((o) => !o)}
        >
          {abstractOpen ? 'Show Less' : 'Read Abstract'}
          <ChevronDown
            size={15}
            strokeWidth={2}
            aria-hidden="true"
            className={`text-gold-ink transition-transform duration-500 ${abstractOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <button type="button" className={pill} aria-haspopup="dialog" onClick={() => setDoc(details.poster)}>
          <ScrollText size={15} strokeWidth={1.8} className="text-gold-ink" aria-hidden="true" />
          View Research Poster
        </button>
        <button type="button" className={pill} aria-haspopup="dialog" onClick={() => setDoc(details.certificate)}>
          <Award size={15} strokeWidth={1.8} className="text-gold-ink" aria-hidden="true" />
          View Certificate
        </button>
      </div>

      <div id={abstractId}>
        <AnimatePresence initial={false}>
          {abstractOpen && (
            <motion.div
              key="abstract"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease }}
              className="overflow-hidden"
            >
              <section aria-labelledby={`abstract-title-${index}`} className="mt-7 border-l-2 border-gold/70 pl-5 sm:pl-6">
                <h4 id={`abstract-title-${index}`} className="eyebrow">
                  Abstract
                </h4>
                {details.abstract.map((para, i) => (
                  <p key={i} className="mt-3 text-[0.95rem] leading-[1.85] text-pretty text-ink-soft">
                    {para}
                  </p>
                ))}
                <p className="mt-4 text-xs text-muted italic">As printed on the research poster, Abstract ID RAI01-062.</p>
                <button
                  type="button"
                  className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-[0.8rem] font-semibold text-gold-ink transition-colors hover:text-ink"
                  aria-controls={abstractId}
                  aria-expanded={abstractOpen}
                  onClick={() => {
                    setAbstractOpen(false);
                    toggle.current?.focus({ preventScroll: true });
                    toggle.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                  }}
                >
                  Show Less
                  <ChevronDown size={14} strokeWidth={2} className="rotate-180" aria-hidden="true" />
                </button>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <DocumentViewer doc={doc} onClose={close} />
    </div>
  );
}
