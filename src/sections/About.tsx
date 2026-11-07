import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { photos, profile } from '../data/content';
import { Photo } from '../components/Photo';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal, ease, inViewOnce } from '../components/Reveal';

const facts = [
  { label: 'Degree', value: 'B.Sc. in Zoology' },
  { label: 'Institution', value: profile.institution },
  { label: 'University', value: profile.university },
  { label: 'Languages', value: 'Bengali · English' },
];

export function About() {
  const imgWrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgWrap, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Portrait */}
        <div className="relative lg:col-span-5">
          <motion.div
            ref={imgWrap}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[12rem] rounded-b-md shadow-[var(--shadow)] lg:max-w-none"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            viewport={inViewOnce}
            transition={{ duration: 1.4, ease }}
          >
            <motion.div className="absolute -inset-y-[8%] inset-x-0" style={{ y }}>
              <Photo
                photo={photos.about}
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 92vw"
                className="h-full w-full object-cover object-[50%_30%]"
              />
            </motion.div>
          </motion.div>
          <div
            className="absolute -bottom-6 left-1/2 hidden h-28 w-28 -translate-x-1/2 rounded-full border border-gold/50 sm:block lg:left-auto lg:-right-8 lg:translate-x-0"
            aria-hidden="true"
          />
        </div>

        {/* Biography */}
        <div className="lg:col-span-7">
          <SectionHeading
            index="01"
            eyebrow="About"
            id="about-title"
            title={
              <>
                Curiosity About Life, <em className="text-forest">Driven by Science.</em>
              </>
            }
          />

          <Reveal className="mt-8 space-y-5 text-base text-pretty text-ink-soft sm:text-[1.075rem]" delay={0.1}>
            <p>
              I&rsquo;m a Zoology graduate from {profile.institution} under the {profile.university}. My academic interests
              centre on biodiversity, wildlife ecology, conservation biology and aquatic ecosystems.
            </p>
            <p>
              My research work crosses disciplines: a microbiology study on the molecular detection and antibiotic
              resistance of <em>Escherichia coli</em>, and an interdisciplinary study of public awareness of
              machine-learning-accelerated MRI imaging. Field studies in Cox&rsquo;s Bazar, at a hatchery, and on poultry and
              crab farms have added direct observation and report writing to my coursework.
            </p>
            <p>
              Beyond research, I communicate science in Bengali and English through presentations, academic writing and
              informal tutoring.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="border-b border-line py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <dt className="eyebrow !text-[0.62rem] !text-muted">{f.label}</dt>
                  <dd className="font-display mt-1.5 text-2xl text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
