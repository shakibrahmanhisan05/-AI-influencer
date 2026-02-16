import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Calendar, ShoppingBag, Percent, TrendingUp, Package, BarChart3, Cpu, Clock, Share2, Eye, MessageSquare, Bot, ShoppingCart, ArrowRight } from 'lucide-react';
import { useT } from '../../hooks/useT';

const cardIcons = [Calendar, ShoppingBag, Percent, TrendingUp, Package, BarChart3];

const flowIcons = [ShoppingBag, Cpu, Clock, Share2, Eye, MessageSquare, Bot, ShoppingCart];
const flowColors = ['#7C3AED', '#8B5CF6', '#A78BFA', '#F43F5E', '#FB7185', '#F59E0B', '#10B981', '#34D399'];

export const PlusTier = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Rich gradient background */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{ background: 'var(--bg-plus-section)' }}
      />
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
            <span className="text-sm font-semibold text-[#7C3AED]">{t.plus.badge}</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.plus.headline1}<br className="hidden sm:block" /> {t.plus.headline2}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t.plus.subtitle}
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.plus.features.map((feature, i) => {
            const Icon = cardIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl border border-[#7C3AED]/15 backdrop-blur-xl p-6 hover:border-[#7C3AED]/35 transition-all duration-400"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>{feature.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Auto-post flow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <div className="rounded-2xl border border-[#7C3AED]/15 bg-gradient-to-r from-[#7C3AED]/5 via-[#F43F5E]/5 to-[#10B981]/5 p-6 lg:p-8 overflow-x-auto">
            <p className="text-center text-sm mb-6 font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>The Auto-Post Flow</p>
            <div className="flex items-center justify-center gap-1 min-w-max px-4">
              {t.plus.flowSteps.map((label, i) => {
                const Icon = flowIcons[i];
                const color = flowColors[i];
                return (
                  <div key={i} className="flex items-center gap-1">
                    <div className="flex flex-col items-center gap-2.5">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300"
                        style={{
                          backgroundColor: `${color}15`,
                          borderColor: `${color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color }} />
                      </div>
                      <span className="text-xs max-w-[80px] text-center leading-tight font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {label}
                      </span>
                    </div>
                    {i < t.plus.flowSteps.length - 1 && (
                      <div className="mb-6 mx-1">
                        <ArrowRight className="w-4 h-4 text-[#7C3AED]/40 animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
