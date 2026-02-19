import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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

function AccordionItem({ item, isOpen, onToggle, isDark }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{
        backgroundColor: isOpen
          ? (isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)')
          : 'transparent',
        border: `1px solid ${isOpen ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-all"
      >
        <span className="text-base sm:text-lg font-medium pr-4" style={{ color: 'var(--foreground)' }}>
          {item.q}
        </span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{
            color: 'var(--muted-foreground)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="px-5 pb-4 text-sm sm:text-base max-w-[640px] text-balance"
          style={{ color: 'var(--muted-foreground)' }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="faq">
      <div ref={ref} className="max-w-container mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight md:sticky md:top-24 md:w-[300px] flex-shrink-0"
          style={{ color: 'var(--foreground)' }}
        >
          Frequently<br />Asked<br />Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="w-full max-w-[800px] space-y-2"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
