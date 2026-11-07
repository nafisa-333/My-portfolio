import { motion } from 'motion/react';
import { Database, FlaskConical, Languages, MessageSquareText, MonitorSmartphone, Trees } from 'lucide-react';
import { languages, skills } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { inViewOnce, staggerChild, staggerParent } from '../components/Reveal';

const icons = [Trees, FlaskConical, Database, MonitorSmartphone, MessageSquareText];

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <SectionHeading
          index="06"
          eyebrow="Technical Skills"
          id="skills-title"
          title={
            <>
              Field, Lab <em className="text-forest">& Page</em>
            </>
          }
          intro="Practical skills from fieldwork, laboratory study, research and scientific writing."
        />

        <motion.div
          className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
        >
          {skills.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.group}
                variants={staggerChild}
                className="group relative bg-bg p-7 transition-colors duration-500 hover:bg-surface sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <Icon size={22} strokeWidth={1.4} className="text-gold-ink" aria-hidden="true" />
                  <span className="font-display text-sm text-muted italic">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display mt-8 text-[1.9rem] leading-tight text-ink">{s.group}</h3>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.95rem] text-ink-soft">
                      <span
                        className="h-px w-4 bg-gold/70 transition-[width] duration-500 group-hover:w-6"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Languages */}
          <motion.div variants={staggerChild} className="relative bg-forest p-7 text-on-forest sm:p-9">
            <div className="flex items-center justify-between">
              <Languages size={22} strokeWidth={1.4} aria-hidden="true" />
              <span className="font-display text-sm italic opacity-70">06</span>
            </div>
            <h3 className="font-display mt-8 text-[1.9rem] leading-tight">Languages</h3>
            <dl className="mt-5 space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <dt className="font-display text-2xl">{l.name}</dt>
                  <dd className="text-sm opacity-80">{l.level}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
