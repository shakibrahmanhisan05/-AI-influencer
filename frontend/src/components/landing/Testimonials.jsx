import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '../../data/mock';
import { Star, Quote } from 'lucide-react';

const cardTilts = ['-rotate-1', 'rotate-0', 'rotate-1', 'rotate-1', 'rotate-0', '-rotate-1'];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-white/70">TRUSTED BY CREATORS</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Influencers Are Loving It
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
              className={`relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-7 ${cardTilts[i]} hover:rotate-0 transition-transform duration-500`}
            >
              <div className="absolute -top-3 -left-1">
                <Quote className="w-8 h-8 text-[#7C3AED]/30" />
              </div>

              {/* Avatar header */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <p className="font-display font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-[#94A3B8]">{t.details}</p>
                </div>
              </div>

              <p className="text-white/85 text-[15px] leading-relaxed relative z-10">
                "{t.quote}"
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
            <span className="text-white font-semibold text-sm ml-2">4.9/5</span>
            <span className="text-[#94A3B8] text-sm">from 2,400+ reviews</span>
          </div>
          <span className="w-px h-5 bg-white/10 hidden sm:block" />
          <span className="text-[#94A3B8] text-sm">#1 Rated AI Tool for Influencers on Product Hunt</span>
        </motion.div>
      </div>
    </section>
  );
};
