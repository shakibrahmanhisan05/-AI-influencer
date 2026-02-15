import { useState, useEffect } from 'react';
import { navLinks } from '../../data/mock';
import { Menu, X, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-white/[0.08]'
            : 'bg-transparent'
        }`}
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
                className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-5 py-2 transition-all duration-300"
            >
              Log In
            </a>
            <a
              href="#pricing"
              className="group relative text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full px-5 py-2.5 flex items-center gap-2 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Start for Free</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-white hover:border-[#7C3AED]/60 transition-colors duration-300"
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
            className="fixed inset-0 z-40 bg-[#0A0A0F]/98 backdrop-blur-xl pt-[80px] flex flex-col items-center gap-6 px-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-lg font-medium text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs">
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-sm font-medium text-white/80 border border-white/20 rounded-full px-5 py-3 transition-all duration-300"
              >
                Log In
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] rounded-full px-5 py-3 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Start for Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
