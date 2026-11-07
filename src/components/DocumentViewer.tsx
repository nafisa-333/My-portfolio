import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Download, ExternalLink, Maximize2, Minimize2, X } from 'lucide-react';
import { docSrc, docSrcSet, type ResearchDocument } from '../data/content';
import { ease } from './Reveal';

type Props = { doc: ResearchDocument | null; onClose: () => void };

/**
 * Accessible preview for a research document. Shows a high-resolution rendering of the PDF
 * (PDFs do not display inline on most mobile browsers) with fit / full-size inspection,
 * and links to the original PDF for download.
 */
export function DocumentViewer({ doc, onClose }: Props) {
  const [full, setFull] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!doc) return;
    setFull(false);
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => closeButton.current?.focus());

    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]') ?? []);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
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
      opener?.focus();
    };
  }, [doc, onClose]);

  const action =
    'inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-[0.8rem] font-semibold text-ink transition-[border-color,color] duration-300 hover:border-gold';

  // Portal to <body> so the fixed overlay is not trapped by transformed ancestors (cards animate with transforms).
  return createPortal(
    <AnimatePresence>
      {doc && (
        <motion.div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          className="fixed inset-0 z-[70] flex flex-col bg-bg/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <div className="border-b border-line">
            <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3 sm:py-4">
              <div className="min-w-0 flex-1">
                <p className="eyebrow !text-[0.6rem]">{doc.label}</p>
                <h2 id={titleId} className="font-display mt-1 truncate text-xl text-ink sm:text-2xl">
                  {doc.title}
                </h2>
                <p id={descId} className="sr-only">
                  {doc.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className={action}
                  aria-label={full ? 'Fit to screen' : 'View full size'}
                  onClick={() => setFull((f) => !f)}
                >
                  {full ? <Minimize2 size={15} strokeWidth={1.8} aria-hidden="true" /> : <Maximize2 size={15} strokeWidth={1.8} aria-hidden="true" />}
                  <span className="hidden sm:inline">{full ? 'Fit to screen' : 'Full size'}</span>
                </button>
                <a href={doc.pdf} target="_blank" rel="noopener" className={action} aria-label="Open PDF in a new tab">
                  <ExternalLink size={15} strokeWidth={1.8} aria-hidden="true" />
                  <span className="hidden min-[360px]:inline">Open PDF</span>
                </a>
                <a
                  href={doc.pdf}
                  download={doc.filename}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-forest px-4 text-[0.8rem] font-semibold text-on-forest transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Download size={15} strokeWidth={2} aria-hidden="true" />
                  <span>
                    Download<span className="hidden sm:inline"> PDF</span>
                  </span>
                </a>
                <button
                  ref={closeButton}
                  type="button"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-gold"
                  aria-label={`Close ${doc.label.toLowerCase()} preview`}
                  onClick={onClose}
                >
                  <X size={20} strokeWidth={1.6} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative min-h-0 flex-1 overflow-auto overscroll-contain"
            tabIndex={0}
            role="region"
            aria-label={`${doc.label} preview${full ? ', full size. Scroll to inspect.' : ''}`}
          >
            <motion.div
              key={doc.image.base}
              className={full ? 'p-4 sm:p-8' : 'absolute inset-0 flex items-center justify-center p-3 sm:p-8'}
              initial={{ opacity: 0, y: 16, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease }}
            >
              <img
                src={docSrc(doc)}
                srcSet={docSrcSet(doc)}
                sizes={full ? `${doc.fullWidth}px` : '(min-width: 1024px) 70vw, 100vw'}
                alt={doc.alt}
                width={doc.image.width}
                height={doc.image.height}
                decoding="async"
                onClick={() => setFull((f) => !f)}
                // Inline max-width: the global `img { max-width: 100% }` rule is unlayered and would beat a utility class.
                style={full ? { width: doc.fullWidth, maxWidth: 'none' } : undefined}
                className={`rounded-sm border border-line bg-white shadow-[var(--shadow)] ${
                  full
                    ? 'mx-auto h-auto max-w-none cursor-zoom-out'
                    : 'h-auto max-h-full w-auto max-w-full cursor-zoom-in'
                }`}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
