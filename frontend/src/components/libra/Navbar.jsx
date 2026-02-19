import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

// ADDED: spring config for hover/tap physics
const springHover = { type: 'spring', stiffness: 400, damping: 17 };

export function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';
  // ADDED: track hovered nav link for layoutId underline
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pb-4 -mb-4">
      {/* Backdrop blur bar */}
      <div
        className="absolute left-0 h-24 w-full backdrop-blur-lg"
        style={{
          background: isDark
            ? 'rgba(18, 12, 30, 0.7)'
            : 'rgba(250, 248, 255, 0.7)',
        }}
      />

      <div className="max-w-container relative mx-auto">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-10">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
              InfluenceAI
            </span>
          </Link>

          {/* Desktop Nav — ADDED: layoutId underline + hover scale */}
          {isLanding && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors hover:opacity-80 py-1"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  {/* ADDED: libra.dev shared layoutId sliding underline */}
                  {hoveredLink === link.label && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'var(--primary)' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-3 z-10">
            {/* Theme toggle — ADDED: whileHover + whileTap */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={springHover}
              onClick={toggleTheme}
              className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
              }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 theme-toggle-icon" style={{ color: 'var(--foreground)' }} />
              ) : (
                <Moon className="w-4 h-4 theme-toggle-icon" style={{ color: 'var(--foreground)' }} />
              )}
            </motion.button>

            {isLanding && (
              <>
                <Link
                  to="/signup"
                  className="hidden sm:inline-flex text-sm font-medium"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Log in
                </Link>
                {/* ADDED: whileHover + whileTap for Get Started button */}
                <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} transition={springHover}>
                  <Link
                    to="/signup"
                    className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </>
            )}

            {/* Mobile menu button — ADDED: whileTap */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={springHover}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
              }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
              )}
            </motion.button>
          </div>
        </nav>

        {/* Mobile menu — ADDED: AnimatePresence + motion enter/exit */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="md:hidden absolute top-full left-0 right-0 rounded-xl p-6 mt-2 shadow-xl backdrop-blur-xl z-50"
              style={{
                backgroundColor: isDark ? 'rgba(20, 15, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                border: `1px solid var(--border)`,
              }}
            >
              <div className="flex flex-col gap-4">
                {isLanding &&
                  navLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {link.label}
                    </a>
                  ))}
                <div className="border-t pt-4 flex flex-col gap-3" style={{ borderColor: 'var(--border)' }}>
                  <Link
                    to="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center rounded-lg px-4 py-3 text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
