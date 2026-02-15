import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Shirt, Dumbbell, Sparkles, ShoppingBag, GraduationCap, Bot, Check } from 'lucide-react';

const useCases = [
  {
    id: 'fashion',
    label: 'Fashion & Style',
    icon: Shirt,
    headline: 'Sell Out Drops Without Answering 500 DMs',
    bullets: [
      'AI answers "Is this available in my size?" instantly with real-time stock data',
      'Auto-post new arrivals and restocks at peak engagement times',
      'Send personalized outfit recommendations based on customer preferences',
    ],
    chat: [
      { type: 'user', text: 'Do you have the satin dress in size S?' },
      { type: 'ai', text: 'Yes babe! 🤩 Satin Dress (S) is in stock — $68 with free shipping. Want the link?' },
    ],
  },
  {
    id: 'fitness',
    label: 'Fitness & Wellness',
    icon: Dumbbell,
    headline: 'Focus on Training — AI Handles the Business',
    bullets: [
      'Auto-reply to supplement and program inquiries 24/7',
      'Share workout plans and nutrition guides via DM on demand',
      'Qualify coaching leads and book discovery calls automatically',
    ],
    chat: [
      { type: 'user', text: 'How much is your 12-week program?' },
      { type: 'ai', text: 'The 12-Week Shred is $149 💪 Includes meal plans + weekly check-ins. Want me to send the sign-up link?' },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty & Skincare',
    icon: Sparkles,
    headline: 'Turn Every "What Product Is That?" Into a Sale',
    bullets: [
      'AI identifies products from story mentions and sends buy links',
      'Recommend routines based on skin type questions in DMs',
      'Auto-post flash sales and limited edition drops with urgency copy',
    ],
    chat: [
      { type: 'user', text: 'What serum were you using in your story??' },
      { type: 'ai', text: 'That\'s our Glow Serum ✨ It\'s $32 and almost sold out! Here\'s the link: shop.link/glow-serum 💕' },
    ],
  },
  {
    id: 'merch',
    label: 'Merch & Products',
    icon: ShoppingBag,
    headline: 'Your Merch Store on Autopilot',
    bullets: [
      'Real-time inventory checks — AI knows what\'s in stock across all variants',
      'Auto-announce restocks and new drops to your audience',
      'Handle order status inquiries and shipping questions via DM',
    ],
    chat: [
      { type: 'user', text: 'When does the hoodie restock??' },
      { type: 'ai', text: 'Great news! 🔥 The hoodie restocks THIS Friday at 12PM EST. Want me to DM you a reminder?' },
    ],
  },
  {
    id: 'coaches',
    label: 'Coaches & Consultants',
    icon: GraduationCap,
    headline: 'Qualify Leads While You Coach',
    bullets: [
      'AI pre-qualifies potential clients by asking the right questions',
      'Share pricing, availability, and booking links automatically',
      'Nurture leads with follow-up messages and content recommendations',
    ],
    chat: [
      { type: 'user', text: 'Do you offer 1-on-1 coaching?' },
      { type: 'ai', text: 'Yes! 🎯 1-on-1 coaching starts at $200/mo. I\'ll ask a few questions to find the best fit. What\'s your main goal?' },
    ],
  },
];

export const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section className="relative py-24 lg:py-32" id="use-cases">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span className="text-sm font-medium text-white/60">USE CASES</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Built for Every Creator Niche
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-lg mx-auto">
            See how InfluenceAI works for your specific industry.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <button
                key={uc.id}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/[0.08]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {uc.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto"
          >
            {/* Left — Text */}
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-[32px] leading-tight text-white mb-6">
                {current.headline}
              </h3>
              <div className="space-y-4">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#10B981]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span className="text-[#94A3B8] text-sm leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Chat Preview */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/10 blur-[80px]" />
              <div className="relative w-full max-w-[320px] mx-auto bg-[#111118]/90 backdrop-blur-xl rounded-[28px] border border-white/10 p-5 shadow-2xl">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">InfluenceAI</p>
                    <p className="text-xs text-[#10B981]">Online</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {current.chat.map((msg, i) => (
                    <div key={i} className={`flex ${msg.type === 'ai' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.type === 'ai'
                          ? 'bg-gradient-to-br from-[#7C3AED]/30 to-[#7C3AED]/10 text-white border border-[#7C3AED]/20'
                          : 'bg-white/10 text-white/90 border border-white/10'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
