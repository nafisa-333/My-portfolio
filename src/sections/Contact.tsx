import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '../data/content';
import { Landscape } from '../components/Landscape';
import { ease, inViewOnce } from '../components/Reveal';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="grain relative isolate overflow-hidden bg-bg pt-24 sm:pt-32 lg:pt-40"
    >
      <div
        className="absolute inset-0 -z-20"
        aria-hidden="true"
        style={{ background: 'radial-gradient(55% 50% at 50% 100%, rgba(198,161,91,0.28), transparent 70%)' }}
      />
      <div className="relative">
      <Landscape className="bottom-0 -z-10 h-56 sm:h-72" mist={false} />

      <div className="container-x relative pb-56 text-center sm:pb-72">
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.8, ease }}
        >
          <span className="font-display text-lg text-gold-ink italic">08</span>
          <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
          <span className="eyebrow">Contact</span>
        </motion.div>

        <motion.h2
          id="contact-title"
          className="font-display mx-auto mt-6 max-w-4xl text-[2.75rem] text-balance text-ink sm:text-6xl lg:text-[5.25rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 1.1, ease, delay: 0.08 }}
        >
          Let&rsquo;s Talk About <em className="text-forest">Life &amp; Science.</em>
        </motion.h2>

        <motion.p
          className="mx-auto mt-7 max-w-xl text-base text-pretty text-ink-soft sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 1, ease, delay: 0.16 }}
        >
          I welcome enquiries about research collaboration, academic opportunities and conversations about the natural
          world. Email is the best way to reach me.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 1, ease, delay: 0.24 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex max-w-full items-center gap-3 rounded-full bg-forest py-4 pr-6 pl-4 text-on-forest shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] sm:pr-8 sm:pl-5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-on-forest/15">
              <Mail size={18} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="truncate text-[0.95rem] font-semibold sm:text-lg">{profile.email}</span>
            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            {copied ? (
              <Check size={15} strokeWidth={2} className="text-gold-ink" aria-hidden="true" />
            ) : (
              <Copy size={15} strokeWidth={1.8} aria-hidden="true" />
            )}
            {copied ? 'Email address copied' : 'Copy email address'}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </motion.div>
      </div>
      </div>

      <footer className="relative z-10 -mt-px bg-[var(--ridge-4)]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[0.8rem] text-[#F4F2E9] sm:flex-row dark:text-[#EAE9DC]/80">
          <p>
            &copy; {new Date().getFullYear()} {profile.name} · Zoology, {profile.institution}
          </p>
          <a
            href="#home"
            className="inline-flex min-h-11 items-center gap-2 font-medium transition-colors hover:text-[#C6A15B]"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </section>
  );
}
