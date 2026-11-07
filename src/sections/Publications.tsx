import { motion } from 'motion/react';
import { BookOpen, Clock3, Presentation } from 'lucide-react';
import { publications, type PublicationStatus } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { ease, inViewOnce } from '../components/Reveal';

const statusStyle: Record<PublicationStatus, { icon: typeof Clock3; cls: string }> = {
  'under-review': {
    icon: Clock3,
    cls: 'border-gold/60 text-gold-ink bg-gold/10',
  },
  conference: {
    icon: Presentation,
    cls: 'border-sage/70 text-ink bg-sage/15',
  },
};

/** Italicise binomial species names, following scientific convention. */
function TitleText({ text }: { text: string }) {
  const parts = text.split(/(Escherichia coli)/);
  return (
    <>
      {parts.map((part, i) => (part === 'Escherichia coli' ? <em key={i}>{part}</em> : part))}
    </>
  );
}

function Authors({ names }: { names: string[] }) {
  return (
    <p className="text-sm leading-relaxed text-ink-soft">
      {names.map((n, i) => (
        <span key={n}>
          {i === 0 ? <strong className="font-semibold text-ink">{n}</strong> : n}
          {i < names.length - 1 && ', '}
        </span>
      ))}
    </p>
  );
}

export function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Research & Publications"
          id="publications-title"
          title={
            <>
              Research in <em className="text-forest">Progress</em>
            </>
          }
          intro="Two research contributions: a microbiology manuscript under journal review and an interdisciplinary conference paper. The status of each is labelled."
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {publications.map((p, i) => {
            const S = statusStyle[p.status];
            return (
              <motion.article
                key={p.title}
                aria-labelledby={`pub-${i}`}
                className="group relative flex flex-col overflow-hidden rounded-sm border border-line bg-surface p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow)] sm:p-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewOnce}
                transition={{ duration: 1, ease, delay: i * 0.12 }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold tracking-wide ${S.cls}`}
                  >
                    <S.icon size={13} strokeWidth={2} aria-hidden="true" />
                    {p.statusLabel}
                  </span>
                  <span className="font-display text-2xl text-muted italic">{p.year}</span>
                </div>

                <p className="eyebrow mt-8 !text-[0.62rem] !text-muted">{p.field}</p>
                <h3 id={`pub-${i}`} className="font-display mt-3 text-[1.75rem] leading-[1.15] text-ink sm:text-[2.1rem]">
                  <TitleText text={p.title} />
                </h3>

                <div className="mt-auto pt-10">
                  <Authors names={p.authors} />
                  <div className="mt-5 flex items-start gap-3 border-t border-line pt-5">
                    <BookOpen size={18} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold-ink" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">{p.venueType}</p>
                      <p className="mt-1 font-medium text-ink italic">{p.venue}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
