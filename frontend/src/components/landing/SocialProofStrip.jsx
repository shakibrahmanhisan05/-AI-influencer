import { socialProofStats } from '../../data/mock';
import { Instagram, MessageCircle, Facebook, Music, Send } from 'lucide-react';

const platformIcons = [
  { name: 'Instagram', Icon: Instagram },
  { name: 'WhatsApp', Icon: MessageCircle },
  { name: 'Messenger', Icon: Facebook },
  { name: 'TikTok', Icon: Music },
  { name: 'Telegram', Icon: Send },
];

const MarqueeContent = () => (
  <div className="flex items-center gap-12 shrink-0">
    <span className="text-sm font-semibold text-white/60 whitespace-nowrap">
      Trusted by 12,000+ influencers worldwide
    </span>
    <span className="w-px h-5 bg-white/10" />
    {platformIcons.map(({ name, Icon }) => (
      <div key={name} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 group cursor-default">
        <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-300" />
        <span className="text-sm text-white/50 group-hover:text-white transition-colors duration-300 whitespace-nowrap">{name}</span>
      </div>
    ))}
    <span className="w-px h-5 bg-white/10" />
    {socialProofStats.map((stat) => (
      <div key={stat.label} className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-sm font-bold text-white">{stat.value}</span>
        <span className="text-sm text-white/50">{stat.label}</span>
      </div>
    ))}
  </div>
);

export const SocialProofStrip = () => {
  return (
    <section className="relative bg-[#111118] border-y border-white/[0.06] py-5 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
};
