import { motion } from 'motion/react';
import { researchBackdrop, researchInterests } from '../data/content';
import { ease, inViewOnce } from '../components/Reveal';

/**
 * Research interests sit on a deep forest band that stays dark in both themes,
 * giving the page a cinematic change of light at its midpoint.
 */
export function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="grain relative isolate overflow-hidden bg-[#173D2C] py-24 text-[#F4F2E9] sm:py-32 lg:py-40 dark:bg-[#0D251D] dark:text-[#EAE9DC]"
    >
      {/*
        Photographic texture: the portrait sits at ~5–8% opacity behind a forest-green wash.
        Mobile: anchored to the top of the section and faded downwards. Desktop: on the right, faded towards the text.
        Light theme keeps a warm, sepia-toned print; dark theme a cooler monochrome one.
      */}
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
        <img
          src={researchBackdrop.src}
          srcSet={researchBackdrop.srcSet}
          sizes="(min-width: 1024px) 55vw, 100vw"
          width={researchBackdrop.width}
          height={researchBackdrop.height}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-x-0 top-0 h-[min(100%,170vw)] w-full object-cover object-[50%_22%] opacity-[0.08] [filter:sepia(0.45)_saturate(0.7)] [mask-image:linear-gradient(to_bottom,transparent,#000_18%,#000_45%,transparent)] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-[58%] lg:object-[50%_28%] lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(to_left,#000_40%,transparent),linear-gradient(to_bottom,transparent,#000_22%,#000_80%,transparent)] dark:opacity-[0.06] dark:[filter:grayscale(1)_contrast(1.1)]"
        />
        {/* Forest-green overlay keeps contrast even across the photograph */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,61,44,0.35),rgba(23,61,44,0)_35%,rgba(23,61,44,0.25))] dark:bg-[linear-gradient(180deg,rgba(13,37,29,0.45),rgba(13,37,29,0.1)_40%,rgba(13,37,29,0.4))]" />
        {/* Light theme only: a faint warm parchment wash */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_75%_30%,rgba(244,242,233,0.05),transparent_70%)] dark:hidden" />
      </div>

      {/* Atmospheric light */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(50% 45% at 85% 0%, rgba(198,161,91,0.22), transparent 70%), radial-gradient(40% 40% at 0% 100%, rgba(139,155,131,0.18), transparent 70%)',
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 -z-10 h-40 w-full opacity-40"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#0f2c20" d="M0 90 L160 50 L300 85 L460 30 L620 80 L780 40 L940 90 L1100 45 L1260 80 L1440 50 V160 H0Z" />
        <path fill="#0a2018" d="M0 130 C240 100 480 125 720 110 S1200 130 1440 115 V160 H0Z" />
      </svg>

      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.8, ease }}
            >
              <span className="font-display text-lg text-[#C6A15B] italic">03</span>
              <span className="h-px w-10 bg-[#C6A15B]/70" aria-hidden="true" />
              <span className="eyebrow !text-[#C6A15B]">Research Interests</span>
            </motion.div>
            <motion.h2
              id="research-title"
              className="font-display mt-5 text-[2.5rem] text-balance sm:text-5xl lg:text-[4.2rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 1, ease, delay: 0.08 }}
            >
              Questions Worth <em className="text-[#C6A15B]">Following.</em>
            </motion.h2>
          </div>
          <motion.p
            className="text-base text-pretty text-[#F4F2E9]/75 sm:text-lg lg:col-span-5 dark:text-[#EAE9DC]/75"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.9, ease, delay: 0.16 }}
          >
            Areas of academic interest across zoology and the wider life sciences. They are listed as interests, not as
            claims of specialisation.
          </motion.p>
        </div>

        <ul className="mt-16 border-t border-white/15 lg:mt-20">
          {researchInterests.map((r, i) => (
            <motion.li
              key={r.title}
              className="group relative border-b border-white/15"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.8, ease, delay: (i % 4) * 0.06 }}
            >
              {/* Hover sweep */}
              <span
                className="absolute inset-0 origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(198,161,91,0.14),transparent)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                aria-hidden="true"
              />
              <div className="relative grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-2 py-7 sm:grid-cols-[4rem_1fr] md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)] md:gap-x-8 lg:py-9">
                <span className="font-display text-lg text-[#C6A15B] italic">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {r.title}
                </h3>
                <p className="col-start-2 max-w-md text-sm text-[#F4F2E9]/65 transition-colors duration-500 group-hover:text-[#F4F2E9]/90 sm:text-base md:col-start-3 dark:text-[#EAE9DC]/65 dark:group-hover:text-[#EAE9DC]/90">
                  {r.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
