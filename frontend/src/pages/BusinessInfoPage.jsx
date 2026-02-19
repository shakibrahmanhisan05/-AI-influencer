import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Building2, FileText, Mic2, ArrowRight, ArrowLeft, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const businessTypes = [
  'Fashion & Clothing',
  'Beauty & Skincare',
  'Fitness & Health',
  'Food & Beverages',
  'Electronics & Gadgets',
  'Handmade & Crafts',
  'Coaching & Consulting',
  'Digital Products',
  'Merch & Merchandise',
  'Other',
];

const tonalityOptions = [
  { label: 'Friendly & Casual', emoji: '😊', desc: 'Warm, approachable, uses emojis' },
  { label: 'Professional', emoji: '💼', desc: 'Formal, polished, business-like' },
  { label: 'Playful & Fun', emoji: '🎉', desc: 'Energetic, uses slang, excited' },
  { label: 'Luxurious', emoji: '✨', desc: 'Elegant, premium, sophisticated' },
  { label: 'Bold & Direct', emoji: '🔥', desc: 'Confident, assertive, no-nonsense' },
  { label: 'Caring & Supportive', emoji: '💛', desc: 'Empathetic, helpful, nurturing' },
];

const BusinessInfoPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    businessName: '',
    businessType: '',
    description: '',
    tonality: '',
  });
  const [loading, setLoading] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/connect-facebook');
    }, 1000);
  };

  const isComplete = form.businessName && form.businessType && form.description && form.tonality;

  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const inputBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)';

  return (
    <div
      className="min-h-screen px-4 py-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background-landing)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-15 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, var(--brand-foreground) 0%, transparent 70%)' }}
        />
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' }}
      >
        {isDark ? <Sun className="w-5 h-5 theme-toggle-icon" style={{ color: 'var(--foreground)' }} /> : <Moon className="w-5 h-5 theme-toggle-icon" style={{ color: 'var(--foreground)' }} />}
      </button>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>InfluenceAI</span>
          </Link>

          {/* Progress steps */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {['Sign Up', 'Business Info', 'Connect', 'Dashboard'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: i <= 1 ? 'linear-gradient(135deg, var(--brand), var(--primary))' : 'transparent',
                    color: i <= 1 ? 'white' : 'var(--muted-foreground)',
                    border: i > 1 ? `1px solid ${borderColor}` : 'none',
                  }}
                >
                  {i + 1}
                </div>
                {i < 3 && (
                  <div className="w-8 h-px" style={{ backgroundColor: i < 1 ? 'var(--primary)' : borderColor }} />
                )}
              </div>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            Tell Us About Your Business
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            This helps your AI agent understand your brand and respond accurately.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-6 sm:p-8 backdrop-blur-xl"
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            boxShadow: isDark
              ? '0 25px 50px rgba(0,0,0,0.4), 0 0 80px rgba(107,10,255,0.06)'
              : '0 25px 50px rgba(0,0,0,0.06)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                <Building2 className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                Business Name
              </label>
              <input
                type="text"
                placeholder="e.g., Sarah's Boutique"
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                className="w-full rounded-lg py-3 px-4 text-sm outline-none transition-all focus:ring-2"
                style={{ backgroundColor: inputBg, border: `1px solid ${borderColor}`, color: 'var(--foreground)' }}
                required
              />
            </div>

            {/* Business Type */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                <FileText className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                Business Type
              </label>
              <button
                type="button"
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                className="w-full rounded-lg py-3 px-4 text-sm text-left flex items-center justify-between outline-none transition-all"
                style={{
                  backgroundColor: inputBg,
                  border: `1px solid ${borderColor}`,
                  color: form.businessType ? 'var(--foreground)' : 'var(--muted-foreground)',
                }}
              >
                {form.businessType || 'Select your business type'}
                <ChevronDown className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
              </button>
              {showTypeDropdown && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 rounded-lg overflow-hidden shadow-xl z-50 max-h-48 overflow-y-auto"
                  style={{ backgroundColor: isDark ? 'var(--card)' : 'white', border: `1px solid ${borderColor}` }}
                >
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setForm({ ...form, businessType: type });
                        setShowTypeDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:opacity-80"
                      style={{
                        color: 'var(--foreground)',
                        backgroundColor: form.businessType === type
                          ? (isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)')
                          : 'transparent',
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                <FileText className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                Business Description
              </label>
              <textarea
                placeholder="Describe what you sell, who your audience is, and what makes you unique..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={4}
                className="w-full rounded-lg py-3 px-4 text-sm outline-none transition-all focus:ring-2 resize-none"
                style={{ backgroundColor: inputBg, border: `1px solid ${borderColor}`, color: 'var(--foreground)' }}
                required
              />
              <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>
                {form.description.length}/500 characters
              </p>
            </div>

            {/* Tonality */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-3" style={{ color: 'var(--foreground)' }}>
                <Mic2 className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                Brand Tonality
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {tonalityOptions.map((tone) => (
                  <button
                    key={tone.label}
                    type="button"
                    onClick={() => setForm({ ...form, tonality: tone.label })}
                    className="rounded-xl p-3 text-left transition-all"
                    style={{
                      backgroundColor: form.tonality === tone.label
                        ? (isDark ? 'rgba(107,10,255,0.15)' : 'rgba(107,10,255,0.08)')
                        : inputBg,
                      border: form.tonality === tone.label
                        ? '2px solid var(--primary)'
                        : `1px solid ${borderColor}`,
                    }}
                  >
                    <span className="text-lg">{tone.emoji}</span>
                    <div className="text-xs font-semibold mt-1" style={{ color: 'var(--foreground)' }}>{tone.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>{tone.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${borderColor}` }}>
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--muted-foreground)' }}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="submit"
                disabled={!isComplete || loading}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-40"
                style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Continue <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessInfoPage;
