import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { integrationLogos, channelIntegrations } from '../../data/mock';
import {
  ShoppingCart, FileSpreadsheet, Zap, Mail, LineChart, CreditCard,
  StickyNote, Table, Phone, Building2, LayoutGrid, Globe,
  Instagram, MessageCircle, Facebook, Music, Send, Check, Plug
} from 'lucide-react';
import { useT } from '../../hooks/useT';

const logoIcons = {
  'Shopify': ShoppingCart,
  'WooCommerce': Globe,
  'Google Sheets': FileSpreadsheet,
  'Zapier': Zap,
  'Mailchimp': Mail,
  'Klaviyo': LineChart,
  'HubSpot': Building2,
  'Stripe': CreditCard,
  'Notion': StickyNote,
  'Airtable': Table,
  'Twilio': Phone,
  'Meta Business Suite': LayoutGrid,
};

const logoColors = {
  'Shopify': '#96BF48',
  'WooCommerce': '#96588A',
  'Google Sheets': '#0F9D58',
  'Zapier': '#FF4A00',
  'Mailchimp': '#FFE01B',
  'Klaviyo': '#11B57F',
  'HubSpot': '#FF7A59',
  'Stripe': '#635BFF',
  'Notion': '#FFFFFF',
  'Airtable': '#18BFFF',
  'Twilio': '#F22F46',
  'Meta Business Suite': '#0081FB',
};

const channelIconMap = {
  'Instagram': Instagram,
  'WhatsApp Business': MessageCircle,
  'Facebook Messenger': Facebook,
  'TikTok DMs': Music,
  'Telegram': Send,
  'SMS': Phone,
  'Email': Mail,
};

export const IntegrationsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('social');
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32" id="integrations">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
            <Plug className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>INTEGRATIONS</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.integrations.sectionTitle}
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            From social platforms to business tools — one seamless ecosystem.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border rounded-full p-1" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'social'
                  ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25'
                  : ''
              }`}
              style={activeTab !== 'social' ? { color: 'var(--text-muted)' } : {}}
            >
              Social Platforms
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25'
                  : ''
              }`}
              style={activeTab !== 'tools' ? { color: 'var(--text-muted)' } : {}}
            >
              Business Tools
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'social' ? (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
                {channelIntegrations.map((channel, i) => {
                  const Icon = channelIconMap[channel.name];
                  return (
                    <motion.div
                      key={channel.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                      className="group relative rounded-2xl border backdrop-blur-xl p-5 text-center hover:scale-[1.03] transition-all duration-400 cursor-default"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-all duration-300"
                        style={{ backgroundColor: `${channel.color}15` }}
                      >
                        <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: channel.color }} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{channel.name}</h4>
                      <p className="text-xs leading-snug" style={{ color: 'var(--text-secondary)' }}>{channel.subtitle}</p>

                      {/* Hover detail */}
                      <div className="absolute inset-0 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
                        <p className="text-xs font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{t.channels.automated} {channel.name}</p>
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
              <p className="text-center text-sm mt-10" style={{ color: 'var(--text-secondary)' }}>
                {t.channels.bottomNote}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                {integrationLogos.map((name, i) => {
                  const Icon = logoIcons[name];
                  const color = logoColors[name];
                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.03 + i * 0.04, duration: 0.4 }}
                      className="group rounded-xl border backdrop-blur-sm p-4 flex flex-col items-center gap-2.5 transition-all duration-300 cursor-default"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                    >
                      <Icon className="w-7 h-7 opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ color }} />
                      <span className="text-xs text-center leading-tight transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{name}</span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-center text-sm mt-10" style={{ color: 'var(--text-secondary)' }}>
                {t.integrations.zapierNote}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
