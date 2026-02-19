import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
import { motion } from 'framer-motion';

// Stagger variants for footer columns
const footerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};
const footerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Status Page', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
];

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--background-landing)' }}>
      <div className="max-w-container mx-auto">
        {/* Main content — ADDED: stagger reveal on scroll */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 sm:py-16"
          style={{ borderTop: '1px solid var(--border)' }}
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Brand */}
          <motion.div variants={footerItem} className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>InfluenceAI</span>
            </div>
            <p className="text-sm max-w-[250px]" style={{ color: 'var(--muted-foreground)' }}>
              Your AI agent is always online — replying, selling, and posting for you 24/7.
            </p>
          </motion.div>

          {/* Links — ADDED: hover scale on links */}
          {columns.map((col) => (
            <motion.div key={col.title} variants={footerItem}>
              <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80 inline-block"
                      style={{ color: 'var(--muted-foreground)' }}
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            &copy; {new Date().getFullYear()} InfluenceAI. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <motion.a href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted-foreground)' }} whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted-foreground)' }} whileHover={{ x: 2 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
