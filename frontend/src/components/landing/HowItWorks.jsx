import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { howItWorks } from '../../data/mock';
import { Link2, FileText, Power, Check, ArrowRight } from 'lucide-react';

const stepIcons = [Link2, FileText, Power];
const stepColors = ['#7C3AED', '#F43F5E', '#10B981'];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32" id="how-it-works">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Up & Running in 3 Simple Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.map((step, i) => {
            const Icon = stepIcons[i];
            const color = stepColors[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Connector line (not on last) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/10 to-white/5" />
                )}

                <div className="text-center">
                  {/* Step number + icon */}
                  <div className="relative mx-auto mb-6">
                    <div
                      className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center border transition-all duration-300"
                      style={{
                        backgroundColor: `${color}10`,
                        borderColor: `${color}25`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: color }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
