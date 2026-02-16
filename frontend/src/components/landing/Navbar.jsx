import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useT } from '../../hooks/useT';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = useT();

  const navLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.integrations, href: '#integrations' },
    { label: t.nav.useCases, href: '#use-cases' },
    { label: t.nav.blog, href: '#' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-[20px]' : 'bg-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--bg-nav)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-nav)' : 'none',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold font-display bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent">
              InfluenceAI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium rounded-full px-5 py-2 transition-all duration-300 border"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
            >
              {t.nav.login}
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 overflow-hidden"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              <span className="theme-toggle-icon-enter" key={theme}>
                {theme === 'dark'
                  ? <Sun className="w-4 h-4 text-amber-400" />
                  : <Moon className="w-4 h-4 text-[#7C3AED]" />
                }
              </span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className="relative h-9 px-3 rounded-full border flex items-center gap-1.5 transition-all duration-300 text-[13px] font-semibold"
              style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
              <span className="text-base leading-none">
                {language === 'en' ? '🇧🇩' : '🇺🇸'}
              </span>
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            <a
              href="#pricing"
              className="group relative text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full px-5 py-2.5 flex items-center gap-2 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{t.nav.startFree}</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-300"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-xl pt-[80px] flex flex-col items-center gap-6 px-6"
            style={{ backgroundColor: 'var(--bg-primary)', opacity: 0.98 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-lg font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              {theme === 'dark'
                ? <><Sun className="w-4 h-4 text-amber-400" /> Switch to Light Mode</>
                : <><Moon className="w-4 h-4 text-[#7C3AED]" /> Switch to Dark Mode</>
              }
            </button>

            {/* Mobile language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-3 text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="text-lg">{language === 'en' ? '🇧🇩' : '🇺🇸'}</span>
              <span>{language === 'en' ? 'বাংলায় পড়ুন' : 'Read in English'}</span>
            </button>

            <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs">
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-sm font-medium border rounded-full px-5 py-3 transition-all duration-300"
                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
              >
                {t.nav.login}
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full px-5 py-3 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {t.nav.startFree}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
