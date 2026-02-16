import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Package, Smile, Users, Check, Bot } from 'lucide-react';
import { useT } from '../../hooks/useT';

const featureIcons = {
  'smart-reply': MessageSquare,
  'inventory': Package,
  'personality': Smile,
  'crm': Users,
};

const FeatureRow = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isReversed = index % 2 !== 0;
  const Icon = featureIcons[feature.id];

  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index > 0 ? 'mt-24 lg:mt-32' : ''}`}>
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`${isReversed ? 'lg:order-2' : ''}`}
      >
        <div
          className="relative rounded-2xl border backdrop-blur-xl p-6 lg:p-8 overflow-hidden"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent pointer-events-none" />
          <div className="relative">
            {/* Mock feature visual */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#F43F5E]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#7C3AED]" />
              </div>
              <div>
                <p className="text-xs text-[#10B981] font-mono font-medium">ACTIVE</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>AI Agent Running</p>
              </div>
            </div>
            {/* Chat preview or dashboard mock */}
            <div className="space-y-3">
              {feature.id === 'smart-reply' && (
                <>
                  <div className="flex justify-end"><div className="rounded-xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%]" style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}>Do you ship to Canada?</div></div>
                  <div className="flex gap-2 items-start">
                    <Bot className="w-5 h-5 text-[#7C3AED] mt-1 shrink-0" />
                    <div className="bg-[#7C3AED]/15 rounded-xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%]" style={{ color: 'var(--text-primary)' }}>
                      Yes! We ship to Canada. Standard delivery takes 5-7 business days. Free shipping on orders over $60!
                    </div>
                  </div>
                  <div className="flex justify-end"><div className="rounded-xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%]" style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}>What about the necklace set?</div></div>
                  <div className="flex gap-2 items-start">
                    <Bot className="w-5 h-5 text-[#7C3AED] mt-1 shrink-0" />
                    <div className="bg-[#7C3AED]/15 rounded-xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%]" style={{ color: 'var(--text-primary)' }}>
                      The Crystal Necklace Set is $38 and qualifies for free shipping to Canada! Want me to send the link?
                    </div>
                  </div>
                </>
              )}
              {feature.id === 'inventory' && (
                <>
                  <div className="flex justify-end"><div className="rounded-xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%]" style={{ backgroundColor: 'var(--bg-card-hover)', color: 'var(--text-secondary)' }}>Is the blue tracksuit in XL available?</div></div>
                  <div className="flex gap-2 items-start">
                    <Bot className="w-5 h-5 text-[#7C3AED] mt-1 shrink-0" />
                    <div className="bg-[#7C3AED]/15 rounded-xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%]" style={{ color: 'var(--text-primary)' }}>
                      <p>Blue Tracksuit (XL) — In Stock!</p>
                      <p className="text-[#10B981] text-xs mt-1">Only 3 left • $65 • Free shipping</p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>shop.link/blue-track-xl</p>
                    </div>
                  </div>
                </>
              )}
              {feature.id === 'personality' && (
                <div className="space-y-4">
                  <div className="rounded-xl p-4 border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>TONE GUIDE</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>"Hey babe! ✨ Yes we have that..."</p>
                  </div>
                  <div className="rounded-xl p-4 border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>AI GENERATED REPLY</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>"Hey babe! ✨ Yes we have that in stock! It's super cute btw. Want me to save one for you?"</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Does this sound like you?</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-[#10B981]/15 text-[#10B981] text-xs rounded-full">Yes</span>
                      <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)' }}>No</span>
                    </div>
                  </div>
                </div>
              )}
              {feature.id === 'crm' && (
                <div className="space-y-2">
                  {[{ name: 'Sara M.', platform: 'Instagram', tag: 'VIP', purchases: 12 },
                    { name: 'Jake T.', platform: 'WhatsApp', tag: 'New Lead', purchases: 0 },
                    { name: 'Priya K.', platform: 'TikTok', tag: 'Returning', purchases: 5 }].map((c, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#F43F5E]/20 flex items-center justify-center text-xs font-bold text-white">
                        {c.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{c.name}</p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.platform} • {c.purchases} purchases</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${c.tag === 'VIP' ? 'bg-[#F43F5E]/15 text-[#F43F5E]' : c.tag === 'New Lead' ? 'bg-[#10B981]/15 text-[#10B981]' : 'bg-[#7C3AED]/15 text-[#7C3AED]'}`}>{c.tag}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`${isReversed ? 'lg:order-1' : ''}`}
      >
        <h3 className="font-display font-bold text-2xl lg:text-[36px] leading-[1.15] mb-5" style={{ color: 'var(--text-primary)' }}>
          {feature.headline}
        </h3>
        <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {feature.body}
        </p>
        <div className="space-y-3.5">
          {feature.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-[#7C3AED]" />
              </div>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{bullet}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const CoreFeatures = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32" id="features">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full px-4 py-1.5 mb-5">
            <Bot className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#7C3AED]">{t.features.eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.features.sectionTitle}
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t.features.sectionSubtitle}
          </p>
        </motion.div>

        {t.features.items.map((feature, i) => (
          <FeatureRow key={feature.id} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
};
