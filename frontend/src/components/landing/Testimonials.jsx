import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '../../data/mock';
import { Star, Quote } from 'lucide-react';
import { useT } from '../../hooks/useT';

const cardTilts = ['-rotate-1', 'rotate-0', 'rotate-1', 'rotate-1', 'rotate-0', '-rotate-1'];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{t.testimonials.eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.testimonials.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className={`relative rounded-2xl border backdrop-blur-xl p-7 ${cardTilts[i]} hover:rotate-0 transition-transform duration-500`}
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="absolute -top-3 -left-1">
                <Quote className="w-8 h-8 text-[#7C3AED]/30" />
              </div>

              {/* Avatar header */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2"
                  style={{ borderColor: 'var(--border-subtle)' }}
                />
                <div>
                  <p className="font-display font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item.details}</p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed relative z-10" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Aggregate stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="font-semibold text-sm ml-2" style={{ color: 'var(--text-primary)' }}>4.9/5</span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t.testimonials.ratingText}</span>
          </div>
          <span className="w-px h-5 hidden sm:block" style={{ backgroundColor: 'var(--border-subtle)' }} />
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t.testimonials.productHunt}</span>
        </motion.div>
      </div>
    </section>
  );
};
