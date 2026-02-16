import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { corePlanFeatures, corePlanExcluded, plusPlanFeatures } from '../../data/mock';
import { Check, X, Crown, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { useT } from '../../hooks/useT';

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [annual, setAnnual] = useState(true);
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32" id="pricing">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.pricing.sectionTitle}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            {t.pricing.subtitle}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 border rounded-full p-1" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300`}
              style={!annual ? { backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-primary)' } : { color: 'var(--text-secondary)' }}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300`}
              style={annual ? { backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-primary)' } : { color: 'var(--text-secondary)' }}
            >
              {t.pricing.annual} <span className="text-[#10B981] text-xs ml-1">{t.pricing.save}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Core Plan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border backdrop-blur-xl p-8"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
          >
            <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>{t.pricing.coreName}</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{t.pricing.coreTagline}</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-display font-extrabold text-4xl" style={{ color: 'var(--text-primary)' }}>{t.pricing.corePrice}</span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t.pricing.corePeriod}</span>
            </div>
            <a
              href="#"
              className="block w-full text-center text-sm font-semibold border rounded-full py-3 transition-all duration-300 mb-8"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
            >
              {t.pricing.coreCTA}
            </a>
            <div className="space-y-3">
              {corePlanFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                </div>
              ))}
              <div className="pt-3 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                {corePlanExcluded.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 mt-3">
                    <X className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--text-placeholder)' }} />
                    <span className="text-sm" style={{ color: 'var(--text-placeholder)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Plus Plan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative rounded-2xl border border-[#7C3AED]/30 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.08)]"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            {/* Most Popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full px-4 py-1.5">
                <Crown className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-bold text-white">{t.pricing.mostPopular}</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl mb-1 mt-2" style={{ color: 'var(--text-primary)' }}>{t.pricing.plusName}</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>{t.pricing.plusTagline}</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-display font-extrabold text-4xl" style={{ color: 'var(--text-primary)' }}>
                {annual ? t.pricing.plusPriceAnnual : t.pricing.plusPriceMonthly}
              </span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{annual ? t.pricing.plusPeriodAnnual : t.pricing.plusPeriodMonthly}</span>
            </div>
            {annual && <p className="text-xs text-[#10B981] mb-6">{t.pricing.plusSaveNote}</p>}
            {!annual && <p className="text-xs mb-6" style={{ color: 'var(--text-secondary)' }}>{t.pricing.plusAnnualAlt}</p>}

            <a
              href="#"
              className="group relative block w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full py-3 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] mb-8"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t.pricing.plusCTA}
              </span>
            </a>

            <div className="space-y-3">
              {plusPlanFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-2xl mx-auto mt-16"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {t.pricing.faq.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border rounded-xl px-6 overflow-hidden"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-card)' }}
              >
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-4" style={{ color: 'var(--text-primary)' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm pb-4" style={{ color: 'var(--text-secondary)' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
