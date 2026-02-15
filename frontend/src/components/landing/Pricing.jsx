import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { corePlanFeatures, corePlanExcluded, plusPlanFeatures, pricingFAQ } from '../../data/mock';
import { Check, X, Crown, Sparkles, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [annual, setAnnual] = useState(true);

  return (
    <section className="relative py-24 lg:py-32" id="pricing">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Simple, Creator-Friendly Pricing
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            Start free. Upgrade when you're ready to go Plus.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!annual ? 'bg-white/10 text-white' : 'text-[#94A3B8]'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${annual ? 'bg-white/10 text-white' : 'text-[#94A3B8]'}`}
            >
              Annual <span className="text-[#10B981] text-xs ml-1">Save 34%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Core Plan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8"
          >
            <h3 className="font-display font-bold text-xl text-white mb-1">Core</h3>
            <p className="text-sm text-[#94A3B8] mb-6">Get started for free</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-display font-extrabold text-4xl text-white">$0</span>
              <span className="text-[#94A3B8] text-sm">/month, Forever Free</span>
            </div>
            <a
              href="#"
              className="block w-full text-center text-sm font-semibold text-white border border-white/20 hover:border-white/40 rounded-full py-3 transition-all duration-300 mb-8"
            >
              Start for Free
            </a>
            <div className="space-y-3">
              {corePlanFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#94A3B8]">{f}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-white/[0.06]">
                {corePlanExcluded.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 mt-3">
                    <X className="w-4 h-4 text-white/20 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/30">{f}</span>
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
            className="relative rounded-2xl border border-[#7C3AED]/30 bg-white/[0.04] backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.08)]"
          >
            {/* Most Popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full px-4 py-1.5">
                <Crown className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-bold text-white">Most Popular</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-1 mt-2">Plus</h3>
            <p className="text-sm text-[#94A3B8] mb-6">Everything you need to grow</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-display font-extrabold text-4xl text-white">
                ${annual ? '19' : '29'}
              </span>
              <span className="text-[#94A3B8] text-sm">/month{annual ? ', billed annually' : ''}</span>
            </div>
            {annual && <p className="text-xs text-[#10B981] mb-6">Save 34% with annual billing</p>}
            {!annual && <p className="text-xs text-[#94A3B8] mb-6">or $19/month billed annually</p>}

            <a
              href="#"
              className="group relative block w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full py-3 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] mb-8"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Start 7-Day Free Trial
              </span>
            </a>

            <div className="space-y-3">
              {plusPlanFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#94A3B8]">{f}</span>
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
            {pricingFAQ.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-white/[0.08] bg-white/[0.02] rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-sm font-medium text-white hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#94A3B8] pb-4">
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
