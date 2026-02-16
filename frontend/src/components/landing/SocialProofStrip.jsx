import { Instagram, MessageCircle, Facebook, Music, Send } from 'lucide-react';
import { useT } from '../../hooks/useT';

const platformIcons = [
  { name: 'Instagram', Icon: Instagram },
  { name: 'WhatsApp', Icon: MessageCircle },
  { name: 'Messenger', Icon: Facebook },
  { name: 'TikTok', Icon: Music },
  { name: 'Telegram', Icon: Send },
];

const MarqueeContent = ({ t }) => (
  <div className="flex items-center gap-12 shrink-0">
    <span className="text-sm font-semibold whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
      {t.socialProof.trusted}
    </span>
    <span className="w-px h-5" style={{ backgroundColor: 'var(--border-subtle)' }} />
    {platformIcons.map(({ name, Icon }) => (
      <div key={name} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 group cursor-default">
        <Icon className="w-5 h-5 transition-colors duration-300" style={{ color: 'var(--text-muted)' }} />
        <span className="text-sm transition-colors duration-300 whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{name}</span>
      </div>
    ))}
    <span className="w-px h-5" style={{ backgroundColor: 'var(--border-subtle)' }} />
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>10M+</span>
      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.socialProof.stat1.replace('10M+ ', '')}</span>
    </div>
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>99.9%</span>
      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.socialProof.stat2.replace('99.9% ', '').replace('৯৯.৯% ', '')}</span>
    </div>
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>3x</span>
      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.socialProof.stat3.replace('Avg 3x ', '').replace('গড় ৩গুণ ', '')}</span>
    </div>
  </div>
);

export const SocialProofStrip = () => {
  const t = useT();

  return (
    <section
      className="relative border-y py-5 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-strip)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="marquee-container">
        <div className="marquee-content">
          <MarqueeContent t={t} />
          <MarqueeContent t={t} />
          <MarqueeContent t={t} />
        </div>
      </div>
    </section>
  );
};
