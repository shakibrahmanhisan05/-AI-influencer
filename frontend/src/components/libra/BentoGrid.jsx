import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Package, Brain, Users, Calendar, BarChart3, Globe, Zap } from 'lucide-react';
import { Section, GlassCard } from './Section';
import { useTheme } from '../../context/ThemeContext';

const tiles = [
  {
    title: 'Smart AI Replies',
    description: 'Your AI monitors DMs on Instagram, WhatsApp, and Messenger 24/7. Every message gets an instant, personalized reply in your tone.',
    icon: MessageSquare,
    size: 'col-span-12 sm:col-span-6 lg:col-span-5',
    visual: 'chat',
  },
  {
    title: 'Inventory Awareness',
    description: 'Connect your product catalog and your AI answers availability, price, and variant questions in real time.',
    icon: Package,
    size: 'col-span-12 sm:col-span-6 lg:col-span-7',
    visual: 'inventory',
  },
  {
    title: 'Your Voice, Not a Bot',
    description: 'Train with up to 250K characters of context including your brand voice, FAQs, slang, and catchphrases. Followers will not know the difference.',
    icon: Brain,
    size: 'col-span-12 sm:col-span-6 lg:col-span-7',
    visual: 'voice',
  },
  {
    title: 'Built-In CRM',
    description: 'Every chat auto-captures contact info. Build an owned audience with tagging, segmentation, and export capabilities.',
    icon: Users,
    size: 'col-span-12 sm:col-span-6 lg:col-span-5',
    visual: 'crm',
  },
  {
    title: 'Auto-Post Content',
    description: 'AI publishes product showcases, discount alerts, and trending content at peak engagement times automatically.',
    icon: Calendar,
    size: 'col-span-12 sm:col-span-6 lg:col-span-5',
    visual: 'posting',
  },
  {
    title: 'Multi-Platform',
    description: 'Works with Instagram, WhatsApp, Facebook Messenger, TikTok, Telegram, and SMS. All from one unified dashboard.',
    icon: Globe,
    size: 'col-span-12 sm:col-span-6 lg:col-span-7',
    visual: 'platforms',
  },
];

function TileVisual({ type, isDark }) {
  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  if (type === 'chat') {
    return (
      <div className="w-full py-4 px-2">
        <div className="space-y-2">
          {['Is this still in stock?', 'Yes! We have 3 left in blue. Want me to reserve one?', 'Yes please!'].map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`max-w-[80%] rounded-2xl px-4 py-2 text-xs sm:text-sm ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              style={{
                backgroundColor: i % 2 === 0 ? cardBg : 'var(--primary)',
                color: i % 2 === 0 ? 'var(--foreground)' : 'white',
                border: i % 2 === 0 ? `1px solid ${borderColor}` : 'none',
              }}
            >
              {msg}
            </motion.div>
          ))}
          <div className="flex gap-1 pl-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)', animationDelay: '0s' }} />
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)', animationDelay: '0.2s' }} />
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)', animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'inventory') {
    return (
      <div className="w-full py-4 px-2 grid grid-cols-3 gap-2">
        {['Blue Dress', 'White Sneakers', 'Gold Watch'].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="rounded-lg p-3 text-center"
            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
          >
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg" style={{ background: `linear-gradient(135deg, var(--brand), var(--primary))`, opacity: 0.3 + i * 0.2 }} />
            <div className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>{item}</div>
            <div className="text-xs mt-1 font-semibold" style={{ color: '#10b981' }}>In Stock</div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'voice') {
    return (
      <div className="w-full py-4 px-2">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: cardBg }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, var(--brand), var(--primary))' }}
              initial={{ width: '0%' }}
              whileInView={{ width: '87%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs font-bold" style={{ color: 'var(--primary)' }}>87%</span>
        </div>
        <div className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>Voice Match Score</div>
        <div className="flex justify-center gap-1 mt-3">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full"
              style={{ backgroundColor: 'var(--primary)' }}
              initial={{ height: 8 }}
              whileInView={{ height: 8 + Math.random() * 24 }}
              transition={{ delay: i * 0.05, duration: 0.3, repeat: Infinity, repeatType: 'reverse', repeatDelay: Math.random() * 2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'crm') {
    return (
      <div className="w-full py-4 px-2">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>CONTACTS</span>
          <span className="text-xs font-bold" style={{ color: 'var(--primary)' }}>12,847</span>
        </div>
        {['VIP Customers', 'Interested in Fashion', 'New Leads'].map((tag, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center justify-between py-1.5 text-xs"
            style={{ borderBottom: `1px solid ${borderColor}` }}
          >
            <span style={{ color: 'var(--foreground)' }}>{tag}</span>
            <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: cardBg, color: 'var(--primary)' }}>
              {[342, 1205, 896][i]}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'posting') {
    return (
      <div className="w-full py-4 px-2">
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 21 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="aspect-square rounded"
              style={{
                backgroundColor: Math.random() > 0.3 ? 'var(--primary)' : cardBg,
                opacity: 0.2 + Math.random() * 0.8,
              }}
            />
          ))}
        </div>
        <div className="mt-3 text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
          Posting activity heatmap
        </div>
      </div>
    );
  }

  if (type === 'platforms') {
    const platforms = ['Instagram', 'WhatsApp', 'Messenger', 'TikTok', 'Telegram', 'SMS'];
    return (
      <div className="w-full py-4 px-2 flex flex-wrap gap-2 justify-center">
        {platforms.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}`, color: 'var(--foreground)' }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
            {p}
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}

// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
// Stagger container variants for the bento grid
const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
const gridItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function BentoGrid() {
  const { isDark } = useTheme();

  return (
    <Section id="features">
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-8">
        {/* ADDED: whileInView instead of useInView ref for cleaner code */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance"
          style={{ color: 'var(--foreground)' }}
        >
          Built for Influencers Who Mean Business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl max-w-[700px] text-center font-medium text-balance"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Everything you need to automate customer conversations, boost sales, and grow your audience — all on autopilot.
        </motion.p>

        {/* ADDED: stagger container variants for the grid */}
        <motion.div
          className="grid grid-cols-12 gap-4 w-full"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              variants={gridItem}
              className={tile.size}
            >
              <GlassCard className="h-full">
                <div className="flex flex-col gap-3">
                  {/* ADDED: icon hover scale + rotation */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, var(--brand), var(--primary))`, opacity: 0.9 }}
                  >
                    <tile.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight" style={{ color: 'var(--foreground)' }}>
                    {tile.title}
                  </h3>
                  <p className="text-sm sm:text-base text-balance" style={{ color: 'var(--muted-foreground)' }}>
                    {tile.description}
                  </p>
                </div>
                <div className="flex grow items-end justify-center">
                  <TileVisual type={tile.visual} isDark={isDark} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
