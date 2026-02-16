import { Zap, Instagram, Twitter, Music, Youtube } from 'lucide-react';
import { useT } from '../../hooks/useT';

const socialLinks = [
  { name: 'Instagram', Icon: Instagram, href: '#' },
  { name: 'X', Icon: Twitter, href: '#' },
  { name: 'TikTok', Icon: Music, href: '#' },
  { name: 'YouTube', Icon: Youtube, href: '#' },
];

export const Footer = () => {
  const t = useT();

  const footerSections = [
    { title: t.footer.product, links: t.footer.productLinks },
    { title: t.footer.useCases, links: t.footer.useCaseLinks },
    { title: t.footer.company, links: t.footer.companyLinks },
    { title: t.footer.support, links: t.footer.supportLinks },
  ];

  return (
    <footer
      className="relative border-t pt-16 pb-8 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-strip)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-14">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold font-display bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent">
                InfluenceAI
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300"
                  style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((label) => (
                  <li key={label}>
                    <a href="#" className="text-sm transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t.footer.privacy}</a>
            <a href="#" className="text-xs transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t.footer.terms}</a>
            <a href="#" className="text-xs transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
