import { footerLinks } from '../../data/mock';
import { Zap, Instagram, Twitter, Music, Youtube } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', Icon: Instagram, href: '#' },
  { name: 'X', Icon: Twitter, href: '#' },
  { name: 'TikTok', Icon: Music, href: '#' },
  { name: 'YouTube', Icon: Youtube, href: '#' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#08080E] border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-14">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold font-display bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent">
                InfluenceAI
              </span>
            </a>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 max-w-xs">
              Your AI agent is always online — replying, selling, and posting for you 24/7.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Use Cases</h4>
            <ul className="space-y-2.5">
              {footerLinks.useCases.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            &copy; 2025 InfluenceAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-xs text-[#94A3B8] hover:text-white transition-colors duration-300">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
