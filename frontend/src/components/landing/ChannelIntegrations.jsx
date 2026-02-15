import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { channelIntegrations } from '../../data/mock';
import { Instagram, MessageCircle, Facebook, Music, Send, Phone, Mail, Check, Wifi } from 'lucide-react';

const iconMap = {
  'Instagram': Instagram,
  'WhatsApp Business': MessageCircle,
  'Facebook Messenger': Facebook,
  'TikTok DMs': Music,
  'Telegram': Send,
  'SMS': Phone,
  'Email': Mail,
};

export const ChannelIntegrations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <Wifi className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-sm font-medium text-white/60">CHANNELS</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Works Where Your Followers Already Are
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {channelIntegrations.map((channel, i) => {
            const Icon = iconMap[channel.name];
            return (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-5 text-center hover:border-white/20 hover:bg-white/[0.06] transition-all duration-400 hover:scale-[1.03] cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: channel.color }} />
                </div>
                <h4 className="font-semibold text-sm text-white mb-1">{channel.name}</h4>
                <p className="text-xs text-[#94A3B8] leading-snug">{channel.subtitle}</p>
                
                {/* Hover detail with features */}
                <div className="absolute inset-0 rounded-2xl bg-[#0F0F1A]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-white font-semibold mb-3">Automated on {channel.name}</p>
                  <div className="space-y-1.5">
                    {channel.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-1.5 text-xs text-[#10B981]">
                        <Check className="w-3 h-3 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-[#94A3B8] text-sm mt-10"
        >
          Connect all platforms in under 5 minutes. No code required.
        </motion.p>
      </div>
    </section>
  );
};
