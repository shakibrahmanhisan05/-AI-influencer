import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Facebook, ArrowRight, ArrowLeft, Check, Shield, Clock, Sun, Moon, Globe, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ConnectFacebookPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const mockPages = [
    { id: 1, name: "Sarah's Fashion Boutique", followers: '12.5K', category: 'Shopping & Retail' },
    { id: 2, name: "Sarah's Style Tips", followers: '8.2K', category: 'Personal Blog' },
  ];

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 2000);
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  return (
    <div className="min-h-screen px-4 py-8 relative overflow-hidden" style={{ backgroundColor: 'var(--background-landing)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-15 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, var(--brand-foreground) 0%, transparent 70%)' }} />
      </div>

      {/* Theme toggle */}
      <button onClick={toggleTheme}
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)' }}>
        {isDark ? <Sun className="w-5 h-5 theme-toggle-icon" style={{ color: 'var(--foreground)' }} /> : <Moon className="w-5 h-5 theme-toggle-icon" style={{ color: 'var(--foreground)' }} />}
      </button>

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
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
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: i <= 2 ? 'linear-gradient(135deg, var(--brand), var(--primary))' : 'transparent',
                    color: i <= 2 ? 'white' : 'var(--muted-foreground)',
                    border: i > 2 ? `1px solid ${borderColor}` : 'none',
                  }}>
                  {i < 2 ? <Check className="w-3 h-3" /> : i + 1}
                </div>
                {i < 3 && <div className="w-8 h-px" style={{ backgroundColor: i < 2 ? 'var(--primary)' : borderColor }} />}
              </div>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
            Connect Your Facebook Page
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            Link your Facebook Page so the AI can manage your Messenger conversations.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-6 sm:p-8 backdrop-blur-xl"
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            boxShadow: isDark ? '0 25px 50px rgba(0,0,0,0.4), 0 0 80px rgba(107,10,255,0.06)' : '0 25px 50px rgba(0,0,0,0.06)',
          }}
        >
          {!connected ? (
            <>
              {/* Facebook connect illustration */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #1877F2, #0C5DC7)' }}>
                  <Facebook className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Connect with Facebook
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  We need access to your Facebook Page to enable AI-powered Messenger replies.
                </p>
              </div>

              {/* Permissions info */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: MessageCircle, text: 'Read and reply to page messages' },
                  { icon: Globe, text: 'Access page information and posts' },
                  { icon: Shield, text: 'Your data is encrypted and secure' },
                  { icon: Clock, text: 'You can disconnect at any time' },
                ].map((perm, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm"
                    style={{ color: 'var(--foreground)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}>
                      <perm.icon className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                    </div>
                    {perm.text}
                  </div>
                ))}
              </div>

              {/* Connect button */}
              <button
                onClick={handleConnect}
                disabled={connecting}
                className="w-full rounded-lg py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ background: '#1877F2' }}
              >
                {connecting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Facebook className="w-4 h-4" />
                    Connect Facebook Page
                  </>
                )}
              </button>

              {/* Skip */}
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full mt-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Skip for now
              </button>
            </>
          ) : (
            <>
              {/* Connected state - page selection */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                >
                  <Check className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Connected Successfully!
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  Select the page you want your AI agent to manage.
                </p>
              </div>

              {/* Page selection */}
              <div className="space-y-3 mb-6">
                {mockPages.map((page) => (
                  <motion.button
                    key={page.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedPage(page.id)}
                    className="w-full rounded-xl p-4 text-left transition-all flex items-center justify-between"
                    style={{
                      backgroundColor: selectedPage === page.id
                        ? (isDark ? 'rgba(107,10,255,0.12)' : 'rgba(107,10,255,0.06)')
                        : (isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'),
                      border: selectedPage === page.id
                        ? '2px solid var(--primary)'
                        : `1px solid ${borderColor}`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: '#1877F2' }}>
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{page.name}</div>
                        <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                          {page.followers} followers &middot; {page.category}
                        </div>
                      </div>
                    </div>
                    {selectedPage === page.id && (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Continue */}
              <button
                onClick={handleContinue}
                disabled={!selectedPage}
                className="w-full rounded-lg py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-40"
                style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}
              >
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate('/business-info')}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Business Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectFacebookPage;
