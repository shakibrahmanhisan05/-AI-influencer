import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const features = [
  { label: 'Built specifically for influencers', influenceai: true, manychat: false, manual: false },
  { label: 'AI auto-posting (posts, promos, inventory updates)', influenceai: true, manychat: false, manual: false },
  { label: 'Voice/personality training', influenceai: true, manychat: 'partial', manual: false },
  { label: 'Influencer-style DM replies', influenceai: true, manychat: 'partial', manual: true },
  { label: 'Product catalog + availability checking', influenceai: true, manychat: 'partial', manual: false },
  { label: 'Setup time', influenceai: '5 min', manychat: '2-3 hrs', manual: 'N/A' },
  { label: 'Price', influenceai: 'From $0/mo', manychat: 'From $15/mo', manual: 'Your time' },
  { label: 'Multi-platform (IG + WhatsApp + TikTok)', influenceai: true, manychat: 'partial', manual: false },
  { label: 'Stock update posts', influenceai: true, manychat: false, manual: false },
  { label: 'Flash sale automation', influenceai: true, manychat: false, manual: false },
];

const CellValue = ({ value }) => {
  if (value === true) return <Check className="w-5 h-5 text-[#10B981] mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-[#F43F5E]/60 mx-auto" />;
  if (value === 'partial') return <Minus className="w-5 h-5 text-amber-400/70 mx-auto" />;
  return <span className="text-sm text-white/70">{value}</span>;
};

const MobileCard = ({ title, color, isHighlighted, data }) => (
  <div className={`rounded-2xl border p-6 ${isHighlighted ? 'border-[#7C3AED]/30 bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5' : 'border-white/[0.06] bg-white/[0.02]'}`}>
    <h4 className={`font-display font-bold text-lg mb-5 ${isHighlighted ? 'text-[#7C3AED]' : 'text-white/70'}`}>{title}</h4>
    <div className="space-y-3">
      {features.map((f, i) => (
        <div key={i} className="flex items-center justify-between gap-3 py-2 border-b border-white/[0.04] last:border-0">
          <span className="text-sm text-white/60 flex-1">{f.label}</span>
          <div className="shrink-0">
            <CellValue value={data[i]} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ComparisonTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0A0F] border-t border-white/[0.04]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-sm font-medium text-white/70">✦ WHY INFLUENCEAI</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            See How We Stack Up
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-lg mx-auto">
            We built this specifically for influencers. The difference shows.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden lg:block max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/[0.04]">
              <div className="p-5 text-sm font-semibold text-white/80">Feature</div>
              <div className="p-5 text-sm font-semibold text-center bg-gradient-to-br from-[#7C3AED]/20 to-[#7C3AED]/5 border-x border-[#7C3AED]/20">
                <span className="text-[#7C3AED]">InfluenceAI</span>
              </div>
              <div className="p-5 text-sm font-semibold text-white/60 text-center">ManyChat</div>
              <div className="p-5 text-sm font-semibold text-white/60 text-center">Manual DMs</div>
            </div>

            {/* Rows */}
            {features.map((f, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 ${i % 2 === 1 ? 'bg-white/[0.01]' : ''} border-t border-white/[0.04]`}
              >
                <div className="p-4 text-sm text-white/70">{f.label}</div>
                <div className="p-4 text-center border-x border-[#7C3AED]/10 bg-[#7C3AED]/[0.03]">
                  <CellValue value={f.influenceai} />
                </div>
                <div className="p-4 text-center">
                  <CellValue value={f.manychat} />
                </div>
                <div className="p-4 text-center">
                  <CellValue value={f.manual} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-5">
          <MobileCard
            title="InfluenceAI"
            isHighlighted={true}
            data={features.map(f => f.influenceai)}
          />
          <MobileCard
            title="ManyChat"
            isHighlighted={false}
            data={features.map(f => f.manychat)}
          />
          <MobileCard
            title="Manual DMs"
            isHighlighted={false}
            data={features.map(f => f.manual)}
          />
        </div>
      </div>
    </section>
  );
};
