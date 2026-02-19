import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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
        {/* Main content */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 sm:py-16" style={{ borderTop: '1px solid var(--border)' }}>
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>InfluenceAI</span>
            </div>
            <p className="text-sm max-w-[250px]" style={{ color: 'var(--muted-foreground)' }}>
              Your AI agent is always online — replying, selling, and posting for you 24/7.
            </p>
          </div>

          {/* Links */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            &copy; {new Date().getFullYear()} InfluenceAI. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted-foreground)' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-xs transition-colors hover:opacity-80" style={{ color: 'var(--muted-foreground)' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
