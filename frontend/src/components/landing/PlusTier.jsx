import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { plusFeatures, autoPostFlow } from '../../data/mock';
import { Crown, Calendar, ShoppingBag, Percent, TrendingUp, Package, BarChart3, ArrowRight, ChevronRight } from 'lucide-react';

const cardIcons = [Calendar, ShoppingBag, Percent, TrendingUp, Package, BarChart3];

const flowIcons = [
  ShoppingBag, // catalog
  null, // AI writes
  Calendar, // picks time
  null, // published
  null, // customer sees
  null, // customer dms
  null, // AI replies
  Crown, // sale
];

export const PlusTier = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0533] via-[#120225] to-[#0A0A0F]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/10 blur-[150px] rounded-full" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        {/* Plus badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/15 border border-[#7C3AED]/30 rounded-full px-4 py-1.5 mb-6">
            <Crown className="w-4 h-4 text-[#7C3AED]" />
            <span className="text-sm font-semibold text-[#7C3AED]">PLUS</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Introducing InfluenceAI Plus —<br className="hidden sm:block" /> Your AI Now Posts For You Too.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            On the Plus plan, your AI doesn't just reply — it proactively posts to your audience at the perfect time, every day, automatically.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plusFeatures.map((feature, i) => {
            const Icon = cardIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl border border-[#7C3AED]/15 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-[#7C3AED]/35 transition-all duration-400 hover:bg-white/[0.05]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Auto-post flow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 overflow-x-auto pb-4"
        >
          <div className="flex items-center justify-center gap-2 min-w-max px-4">
            {autoPostFlow.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#7C3AED]">{i + 1}</span>
                  </div>
                  <span className="text-xs text-[#94A3B8] max-w-[80px] text-center leading-tight">{step}</span>
                </div>
                {i < autoPostFlow.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#7C3AED]/40 mb-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
