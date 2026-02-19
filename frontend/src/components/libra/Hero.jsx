import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, MessageSquare, ShoppingBag, Clock } from 'lucide-react';
import { ColourfulText } from './ColourfulText';
import { Section, Glow, Badge, MockupFrame } from './Section';
import { useTheme } from '../../context/ThemeContext';

// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
// Staggered word reveal variants for the hero headline
const headlineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

// Spring config reused for buttons & interactive elements
const springHover = { type: 'spring', stiffness: 400, damping: 17 };

export function Hero() {
  const { isDark } = useTheme();

  // ADDED: split headline into words for staggered spring reveal
  const headlineWords = 'Your AI Handles Every DM in'.split(' ');

  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0 relative">
      <div className="max-w-container mx-auto flex flex-col gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 pt-4 md:pt-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Badge */}
          <Badge>
            <span style={{ color: 'var(--muted-foreground)' }}>AI-Powered Social Commerce</span>
            <Link to="/signup" className="flex items-center gap-1 font-medium" style={{ color: 'var(--primary)' }}>
              Get Started <ArrowRight className="w-3 h-3" />
            </Link>
          </Badge>

          {/* Main heading — ADDED: staggered word reveal */}
          <motion.h1
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight text-balance text-transparent bg-clip-text"
            style={{
              backgroundImage: isDark
                ? 'linear-gradient(to right, var(--foreground), var(--muted-foreground))'
                : 'linear-gradient(to right, var(--foreground), var(--foreground))',
            }}
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.3em]">
                {word}
              </motion.span>
            ))}{' '}
            <ColourfulText text="seconds" />
          </motion.h1>

          {/* Subtitle — ADDED: fade-up with delay */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl max-w-[700px] font-medium text-balance"
            style={{ color: 'var(--muted-foreground)' }}
          >
            InfluenceAI gives social influencers a 24/7 AI agent that replies to every message,
            checks product availability, and auto-posts deals — so you never lose a sale.
          </motion.p>

          {/* CTA Buttons — ADDED: whileHover + whileTap spring physics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={springHover}>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
              >
                Start for Free <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={springHover}>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
                style={{
                  color: 'var(--foreground)',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                  border: '1px solid var(--border)',
                }}
              >
                <Play className="w-4 h-4" /> See How It Works
              </a>
            </motion.div>
          </motion.div>

          {/* App Mockup — ADDED: gentle floating animation */}
          <div className="relative w-full pt-10 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              >
                <MockupFrame>
                  <div
                    className="w-full rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: isDark ? 'rgba(20, 15, 30, 0.9)' : 'rgba(250, 248, 255, 0.9)',
                      border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid var(--border)',
                    }}
                  >
                    {/* Mock dashboard preview */}
                    <DashboardMockup isDark={isDark} />
                  </div>
                </MockupFrame>
              </motion.div>
            </motion.div>
            <Glow variant="top" className="animate-appear-zoom delay-1000" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function DashboardMockup({ isDark }) {
  const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          AI Agent Online
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
        {[
          { icon: MessageSquare, label: 'Messages Today', value: '1,247', change: '+24%' },
          { icon: ShoppingBag, label: 'Sales Generated', value: '$8,432', change: '+18%' },
          { icon: Clock, label: 'Avg Response', value: '< 3s', change: '-40%' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
            className="rounded-xl p-3 sm:p-4"
            style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
          >
            <stat.icon className="w-4 h-4 mb-2" style={{ color: 'var(--primary)' }} />
            <div className="text-lg sm:text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
            <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{stat.label}</div>
            <div className="text-xs font-medium mt-1" style={{ color: stat.change.startsWith('+') || stat.change.startsWith('-') ? '#10b981' : 'var(--muted-foreground)' }}>
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chat preview */}
      <div className="rounded-xl p-4" style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}>
        <div className="text-xs font-semibold mb-3" style={{ color: 'var(--muted-foreground)' }}>LIVE CONVERSATIONS</div>
        <div className="space-y-3">
          {[
            { name: 'Sarah M.', msg: 'Is the blue dress still available in size M?', time: '2s ago', platform: 'Instagram' },
            { name: 'Alex K.', msg: 'What are the shipping options?', time: '5s ago', platform: 'WhatsApp' },
            { name: 'Jordan T.', msg: 'Can I get a discount for bulk order?', time: '12s ago', platform: 'Messenger' },
          ].map((chat, i) => (
            <motion.div
              key={chat.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + i * 0.2, duration: 0.4 }}
              className="flex items-center justify-between py-2"
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, var(--brand), var(--primary))` }}
                >
                  {chat.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{chat.name}</div>
                  <div className="text-xs truncate max-w-[200px] sm:max-w-[400px]" style={{ color: 'var(--muted-foreground)' }}>{chat.msg}</div>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{chat.time}</div>
                <div className="text-xs font-medium" style={{ color: 'var(--primary)' }}>{chat.platform}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
