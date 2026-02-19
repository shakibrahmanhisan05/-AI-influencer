import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, Badge } from './Section';
import { useTheme } from '../../context/ThemeContext';

export function CTA() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section className="overflow-hidden pt-0 md:pt-0">
      <div
        ref={ref}
        className="max-w-container relative mx-auto flex flex-col items-center gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <Badge>
            <span style={{ color: 'var(--muted-foreground)' }}>Ready to Start?</span>
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
          style={{ color: 'var(--foreground)' }}
        >
          Your AI Agent Is Waiting
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg max-w-[600px]"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Join 12,000+ influencers who never miss a customer message or a sales opportunity again. Set it up in 5 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            to="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
          >
            Start for Free — No Card Needed <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Glow behind CTA */}
        <div
          className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow: isDark
              ? '0 -16px 128px 0 rgba(107, 10, 255, 0.15) inset, 0 -16px 32px 0 rgba(107, 10, 255, 0.1) inset'
              : '0 -16px 128px 0 rgba(107, 10, 255, 0.06) inset, 0 -16px 32px 0 rgba(107, 10, 255, 0.04) inset',
          }}
        />
      </div>
    </Section>
  );
}
