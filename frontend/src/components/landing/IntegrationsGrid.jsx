import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { integrationLogos } from '../../data/mock';
import { ShoppingCart, FileSpreadsheet, Zap, Mail, LineChart, CreditCard, StickyNote, Table, Phone, Building2, LayoutGrid, Globe } from 'lucide-react';

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

export const IntegrationsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32" id="integrations">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl lg:text-[48px] leading-tight text-white mb-4">
            Plays Well With Your Entire Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {integrationLogos.map((name, i) => {
            const Icon = logoIcons[name];
            const color = logoColors[name];
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.03 + i * 0.04, duration: 0.4 }}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-4 flex flex-col items-center gap-2.5 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                <Icon className="w-7 h-7 opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ color }} />
                <span className="text-xs text-[#94A3B8] group-hover:text-white transition-colors duration-300 text-center leading-tight">{name}</span>
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
          Don't see your tool? We support Zapier webhooks for custom integrations.
        </motion.p>
      </div>
    </section>
  );
};
