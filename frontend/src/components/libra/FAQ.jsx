import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from './Section';
import { useTheme } from '../../context/ThemeContext';

const faqItems = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, absolutely. No lock-in contracts. Cancel from your dashboard at any time with one click.',
  },
  {
    q: 'Will it sound like a bot to my followers?',
    a: 'No. You train the AI with your own voice, slang, emojis, and example replies. Your followers will think it is you responding.',
  },
  {
    q: 'What platforms does it connect to?',
    a: 'Instagram, WhatsApp, Facebook Messenger, TikTok DMs, Telegram, and SMS. All managed from one dashboard.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'None. Start free in minutes. No credit card required for the Core plan.',
  },
  {
    q: 'How does the AI learn my voice?',
    a: 'You provide context including your FAQ, product info, example replies, tone guidelines, and slang. The AI uses this to match your communication style perfectly.',
  },
  {
    q: 'Can I review what the AI says before it sends?',
    a: 'Yes. You can enable approval mode where the AI drafts replies for your review, or let it run fully autonomous. You stay in control.',
  },
];

// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
// Spring config for accordion + hover
const springHover = { type: 'spring', stiffness: 400, damping: 17 };

function AccordionItem({ item, isOpen, onToggle, isDark }) {
  return (
    <motion.div
      // ADDED: subtle hover lift on accordion items
      whileHover={{ y: -2 }}
      transition={springHover}
      className="rounded-xl overflow-hidden transition-colors"
      style={{
        backgroundColor: isOpen
          ? (isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)')
          : 'transparent',
        border: `1px solid ${isOpen ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-base sm:text-lg font-medium pr-4" style={{ color: 'var(--foreground)' }}>
          {item.q}
        </span>
        {/* ADDED: spring rotation on chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ChevronDown
            className="w-5 h-5 flex-shrink-0"
            style={{ color: 'var(--muted-foreground)' }}
          />
        </motion.div>
      </button>
      {/* ADDED: AnimatePresence + motion.div for spring height accordion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <p
              className="px-5 pb-4 text-sm sm:text-base max-w-[640px] text-balance"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Stagger variants for FAQ items
const faqStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};
const faqItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12 px-4 sm:px-6 lg:px-8">
        {/* ADDED: whileInView reveal */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight md:sticky md:top-24 md:w-[300px] flex-shrink-0"
          style={{ color: 'var(--foreground)' }}
        >
          Frequently<br />Asked<br />Questions
        </motion.h2>

        {/* ADDED: stagger container for FAQ items */}
        <motion.div
          variants={faqStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="w-full max-w-[800px] space-y-2"
        >
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={faqItem}>
              <AccordionItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                isDark={isDark}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
