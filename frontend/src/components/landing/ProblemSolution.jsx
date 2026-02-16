import { motion } from 'framer-motion';
import { X, Check, TrendingUp } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useT } from '../../hooks/useT';

export const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32" id="use-cases">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-[#F43F5E]/15 backdrop-blur-xl p-8 lg:p-10"
            style={{ backgroundColor: 'rgba(244, 63, 94, 0.03)' }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F43F5E]/5 to-transparent pointer-events-none" />
            <h3 className="font-display font-bold text-xl lg:text-2xl mb-8 relative" style={{ color: 'var(--text-primary)' }}>
              {t.problemSolution.problemTitle}
            </h3>
            <div className="space-y-5 relative">
              {t.problemSolution.problems.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-[#F43F5E]/15 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-[#F43F5E]" />
                  </div>
                  <span className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl border border-[#10B981]/20 backdrop-blur-xl p-8 lg:p-10 shadow-[0_0_60px_rgba(16,185,129,0.06)]"
            style={{ backgroundColor: 'rgba(16, 185, 129, 0.03)' }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#10B981]/5 to-transparent pointer-events-none" />
            <h3 className="font-display font-bold text-xl lg:text-2xl mb-8 relative" style={{ color: 'var(--text-primary)' }}>
              {t.problemSolution.solutionTitle}
            </h3>
            <div className="space-y-5 relative">
              {t.problemSolution.solutions.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-[#10B981]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  </div>
                  <span className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 border rounded-2xl px-8 py-5" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
            <TrendingUp className="w-6 h-6 text-[#10B981] shrink-0" />
            <p className="text-base lg:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
              {t.problemSolution.bottomStat}{' '}
              <span className="text-[#10B981] font-bold">{t.problemSolution.bottomStat100}</span>{' '}
              {t.problemSolution.bottomStatMiddle}{' '}
              <span className="text-[#10B981] font-bold">{t.problemSolution.bottomStat3x}</span>{' '}
              {t.problemSolution.bottomStatEnd}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
