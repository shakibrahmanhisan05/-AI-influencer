import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Section } from './Section';
import { useTheme } from '../../context/ThemeContext';

const plans = [
  {
    name: 'Core',
    tagline: 'Get started for free',
    priceMonthly: '$0',
    priceAnnual: '$0',
    period: '/month, Forever Free',
    cta: 'Start for Free',
    popular: false,
    features: [
      '1 Social Platform',
      '500 AI Replies/month',
      'Basic Brand Voice Training',
      'Product Catalog (50 items)',
      'Email Support',
      'Basic Analytics',
    ],
  },
  {
    name: 'Plus',
    tagline: 'Everything you need to grow',
    priceMonthly: '$29',
    priceAnnual: '$19',
    period: '/month',
    cta: 'Start 7-Day Free Trial',
    popular: true,
    features: [
      'All Social Platforms',
      'Unlimited AI Replies',
      'Advanced Brand Voice (250K chars)',
      'Unlimited Product Catalog',
      'Auto-Post Content',
      'Built-In CRM + Contacts',
      'Priority Support',
      'Advanced Analytics',
      'Bulk Order Handling',
      'Trend-Aware Posting',
    ],
  },
];

// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
const springHover = { type: 'spring', stiffness: 400, damping: 17 };
const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};
const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Pricing() {
  const { isDark } = useTheme();
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Section id="pricing">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
          style={{ color: 'var(--foreground)' }}
        >
          Simple, Creator-Friendly Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="text-base sm:text-lg max-w-[600px] text-center"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Start free. Upgrade when you are ready to go Plus.
        </motion.p>

        {/* Toggle — ADDED: spring transition on buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center gap-3 rounded-full p-1"
          style={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
            border: '1px solid var(--border)',
          }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={springHover}
            onClick={() => setIsAnnual(false)}
            className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: !isAnnual ? 'var(--primary)' : 'transparent',
              color: !isAnnual ? 'white' : 'var(--muted-foreground)',
            }}
          >
            Monthly
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={springHover}
            onClick={() => setIsAnnual(true)}
            className="rounded-full px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2"
            style={{
              backgroundColor: isAnnual ? 'var(--primary)' : 'transparent',
              color: isAnnual ? 'white' : 'var(--muted-foreground)',
            }}
          >
            Yearly
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: isAnnual ? 'rgba(255,255,255,0.2)' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: isAnnual ? 'white' : 'var(--primary)',
              }}
            >
              Save 34%
            </span>
          </motion.button>
        </motion.div>

        {/* Plans — ADDED: stagger container + card hover physics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardItem}
              // ADDED: libra.dev card hover lift + scale
              whileHover={{ y: -10, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={springHover}
              className="glass-1 rounded-2xl p-6 sm:p-8 relative flex flex-col"
              style={{
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)',
                boxShadow: plan.popular ? '0 0 40px rgba(107, 10, 255, 0.1)' : 'none',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--foreground)' }}>{plan.name}</h3>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{plan.tagline}</p>
              </div>

              <div className="mb-6">
                {/* ADDED: AnimatePresence for price change animation */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl font-bold inline-block"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm ml-1" style={{ color: 'var(--muted-foreground)' }}>{plan.period}</span>
                {isAnnual && plan.name === 'Plus' && (
                  <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>billed annually</p>
                )}
              </div>

              {/* ADDED: whileHover + whileTap on CTA link */}
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} transition={springHover}>
                <Link
                  to="/signup"
                  className="w-full inline-flex items-center justify-center rounded-lg py-3 text-sm font-semibold transition-colors mb-6"
                  style={{
                    background: plan.popular ? 'linear-gradient(135deg, var(--brand), var(--primary))' : 'transparent',
                    color: plan.popular ? 'white' : 'var(--foreground)',
                    border: plan.popular ? 'none' : '1px solid var(--border)',
                  }}
                >
                  {plan.cta}
                </Link>
              </motion.div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
