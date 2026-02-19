import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Section, Glow } from './Section';
import { useTheme } from '../../context/ThemeContext';

export function Features() {
  const { isDark } = useTheme();

  return (
    <Section className="fade-bottom relative mb-8 sm:mb-12 md:mb-24 w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="relative">
        <div className="max-w-container mx-auto flex flex-col gap-8 md:gap-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6 md:gap-8">
            {/* ADDED: whileInView viewport reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-balance text-transparent bg-clip-text"
              style={{
                backgroundImage: isDark
                  ? 'linear-gradient(to right, var(--foreground), var(--muted-foreground))'
                  : 'linear-gradient(to right, var(--foreground), var(--foreground))',
              }}
            >
              Powerful Features Influencers Love
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl max-w-[620px] font-medium text-balance"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Built with modern AI to give you the best customer engagement experience and interface outputs.
            </motion.p>
          </div>

          {/* Rising chart visualization — ADDED: viewport reveal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full"
          >
            <RisingChart isDark={isDark} />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
// Stagger variants for the bottom stats
const statsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};
const statsItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function RisingChart({ isDark }) {
  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  // Generate chart bars
  const data = [
    { month: 'Jan', value: 20, sales: 1200 },
    { month: 'Feb', value: 35, sales: 2100 },
    { month: 'Mar', value: 30, sales: 1800 },
    { month: 'Apr', value: 45, sales: 2700 },
    { month: 'May', value: 55, sales: 3300 },
    { month: 'Jun', value: 50, sales: 3000 },
    { month: 'Jul', value: 65, sales: 3900 },
    { month: 'Aug', value: 75, sales: 4500 },
    { month: 'Sep', value: 70, sales: 4200 },
    { month: 'Oct', value: 85, sales: 5100 },
    { month: 'Nov', value: 90, sales: 5400 },
    { month: 'Dec', value: 100, sales: 6000 },
  ];

  return (
    <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Revenue Growth</h3>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Average 3x increase after enabling InfluenceAI</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }} />
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>AI-Assisted Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
            <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Manual Sales</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end gap-2 sm:gap-3 h-48 sm:h-64">
        {data.map((d, i) => (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t-md relative"
              style={{ background: 'linear-gradient(to top, var(--brand), var(--primary))' }}
              initial={{ height: 0 }}
              whileInView={{ height: `${d.value}%` }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <span className="text-xs hidden sm:block" style={{ color: 'var(--muted-foreground)' }}>{d.month}</span>
          </div>
        ))}
      </div>

      {/* Bottom stats — ADDED: stagger reveal */}
      <motion.div
        className="grid grid-cols-3 gap-4 mt-6 pt-6"
        style={{ borderTop: `1px solid ${borderColor}` }}
        variants={statsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {[
          { label: 'Messages Automated', value: '98M+' },
          { label: 'Response Time', value: '< 3 sec' },
          { label: 'Revenue Lift', value: '3x avg' },
        ].map((stat) => (
          <motion.div key={stat.label} className="text-center" variants={statsItem}>
            <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
            <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
