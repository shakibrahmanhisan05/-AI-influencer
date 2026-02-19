import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, MessageSquare, ShoppingBag, Clock, Users, TrendingUp,
  BarChart3, Settings, LogOut, Sun, Moon, Bell, Search,
  ChevronDown, ArrowUpRight, Facebook, Instagram, MessageCircle,
  Send, MoreHorizontal, Star, Filter
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DashboardPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const sidebarBg = isDark ? 'rgba(18, 12, 30, 0.95)' : 'rgba(250, 248, 255, 0.95)';

  const stats = [
    { label: 'Total Messages', value: '12,847', change: '+24%', icon: MessageSquare, trend: 'up' },
    { label: 'Sales Generated', value: '$48,293', change: '+18%', icon: ShoppingBag, trend: 'up' },
    { label: 'Avg Response Time', value: '2.3s', change: '-40%', icon: Clock, trend: 'down' },
    { label: 'Active Contacts', value: '3,421', change: '+12%', icon: Users, trend: 'up' },
  ];

  const recentConversations = [
    { name: 'Sarah M.', message: 'Is the blue dress still available?', time: '2m ago', platform: 'instagram', status: 'replied', sentiment: 'positive' },
    { name: 'Alex K.', message: 'What are shipping costs to EU?', time: '5m ago', platform: 'messenger', status: 'replied', sentiment: 'neutral' },
    { name: 'Jordan T.', message: 'Love the new collection!', time: '12m ago', platform: 'instagram', status: 'replied', sentiment: 'positive' },
    { name: 'Maria L.', message: 'Can I return an item?', time: '18m ago', platform: 'whatsapp', status: 'escalated', sentiment: 'negative' },
    { name: 'Chen W.', message: 'Do you ship to Singapore?', time: '25m ago', platform: 'messenger', status: 'replied', sentiment: 'neutral' },
    { name: 'Emma R.', message: 'Bulk order discount available?', time: '32m ago', platform: 'instagram', status: 'replied', sentiment: 'positive' },
  ];

  const sidebarItems = [
    { label: 'Overview', icon: BarChart3, id: 'overview' },
    { label: 'Conversations', icon: MessageSquare, id: 'conversations' },
    { label: 'Contacts', icon: Users, id: 'contacts' },
    { label: 'Analytics', icon: TrendingUp, id: 'analytics' },
    { label: 'Settings', icon: Settings, id: 'settings' },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram': return <Instagram className="w-3.5 h-3.5" />;
      case 'messenger': return <Facebook className="w-3.5 h-3.5" />;
      case 'whatsapp': return <MessageCircle className="w-3.5 h-3.5" />;
      default: return <Send className="w-3.5 h-3.5" />;
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return '#10b981';
      case 'negative': return '#ef4444';
      default: return 'var(--muted-foreground)';
    }
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <aside
        className="w-64 flex-shrink-0 flex flex-col p-4 fixed h-full z-30 transition-transform duration-300"
        style={{
          backgroundColor: sidebarBg,
          borderRight: `1px solid ${borderColor}`,
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>InfluenceAI</span>
        </Link>

        {/* Nav items */}
        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: activeTab === item.id
                  ? (isDark ? 'rgba(107,10,255,0.12)' : 'rgba(107,10,255,0.06)')
                  : 'transparent',
                color: activeTab === item.id ? 'var(--primary)' : 'var(--muted-foreground)',
              }}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="space-y-1 pt-4" style={{ borderTop: `1px solid ${borderColor}` }}>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 min-h-screen">
        {/* Top bar */}
        <header
          className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-lg"
          style={{
            backgroundColor: isDark ? 'rgba(18,12,30,0.8)' : 'rgba(250,248,255,0.8)',
            borderBottom: `1px solid ${borderColor}`,
          }}
        >
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Dashboard</h1>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
              Welcome back! Your AI agent is running smoothly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 rounded-lg px-3 py-2"
              style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)', border: `1px solid ${borderColor}` }}>
              <Search className="w-4 h-4" style={{ color: 'var(--muted-foreground)' }} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-40"
                style={{ color: 'var(--foreground)' }}
              />
            </div>
            {/* Notifications */}
            <button className="relative w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}>
              <Bell className="w-4 h-4" style={{ color: 'var(--foreground)' }} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>3</span>
            </button>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
              S
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* AI Status Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-4 flex items-center justify-between"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(107,10,255,0.12), rgba(16,185,129,0.08))'
                : 'linear-gradient(135deg, rgba(107,10,255,0.06), rgba(16,185,129,0.04))',
              border: `1px solid ${borderColor}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <div>
                <span className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>AI Agent is Active</span>
                <span className="text-xs ml-2" style={{ color: 'var(--muted-foreground)' }}>
                  Handling conversations on 3 platforms
                </span>
              </div>
            </div>
            <button className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
              style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)', color: 'var(--foreground)' }}>
              Configure
            </button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl p-5"
                style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: isDark ? 'rgba(107,10,255,0.12)' : 'rgba(107,10,255,0.06)' }}>
                    <stat.icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      color: stat.trend === 'up' ? '#10b981' : '#ef4444',
                      backgroundColor: stat.trend === 'up'
                        ? (isDark ? 'rgba(16,185,129,0.12)' : 'rgba(16,185,129,0.08)')
                        : (isDark ? 'rgba(239,68,68,0.12)' : 'rgba(239,68,68,0.08)'),
                    }}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Conversations - 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 rounded-xl overflow-hidden"
              style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
            >
              <div className="flex items-center justify-between p-5 pb-0">
                <h3 className="text-base font-semibold" style={{ color: 'var(--foreground)' }}>Recent Conversations</h3>
                <div className="flex items-center gap-2">
                  <button className="text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1"
                    style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)', color: 'var(--muted-foreground)' }}>
                    <Filter className="w-3 h-3" /> Filter
                  </button>
                </div>
              </div>
              <div className="p-5 space-y-1">
                {recentConversations.map((conv, i) => (
                  <motion.div
                    key={conv.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer"
                    style={{
                      ':hover': { backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' },
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, var(--brand), var(--primary))' }}>
                        {conv.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{conv.name}</span>
                          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                            {getPlatformIcon(conv.platform)}
                          </span>
                        </div>
                        <div className="text-xs truncate max-w-[300px]" style={{ color: 'var(--muted-foreground)' }}>{conv.message}</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{conv.time}</div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getSentimentColor(conv.sentiment) }} />
                        <span className="text-xs capitalize"
                          style={{ color: conv.status === 'escalated' ? '#ef4444' : '#10b981' }}>
                          {conv.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Performance Panel - 1 col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="rounded-xl p-5 space-y-5"
              style={{ backgroundColor: cardBg, border: `1px solid ${borderColor}` }}
            >
              <h3 className="text-base font-semibold" style={{ color: 'var(--foreground)' }}>AI Performance</h3>

              {/* Accuracy */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Response Accuracy</span>
                  <span className="text-sm font-bold" style={{ color: 'var(--primary)' }}>96.8%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, var(--brand), var(--primary))' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '96.8%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Customer Satisfaction</span>
                  <span className="text-sm font-bold" style={{ color: '#10b981' }}>4.8/5</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4"
                      style={{ color: s <= 4 ? '#f59e0b' : 'var(--border)', fill: s <= 4 ? '#f59e0b' : 'none' }} />
                  ))}
                </div>
              </div>

              {/* Platform breakdown */}
              <div>
                <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>Messages by Platform</span>
                <div className="space-y-2 mt-2">
                  {[
                    { name: 'Instagram', pct: 45, color: '#E4405F' },
                    { name: 'Messenger', pct: 30, color: '#1877F2' },
                    { name: 'WhatsApp', pct: 25, color: '#25D366' },
                  ].map((p) => (
                    <div key={p.name}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span style={{ color: 'var(--foreground)' }}>{p.name}</span>
                        <span style={{ color: 'var(--muted-foreground)' }}>{p.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden"
                        style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: p.color }}
                          initial={{ width: '0%' }}
                          animate={{ width: `${p.pct}%` }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="pt-3" style={{ borderTop: `1px solid ${borderColor}` }}>
                <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>Quick Actions</span>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {['Train AI', 'View Reports', 'Add Products', 'Manage Team'].map((action) => (
                    <button key={action}
                      className="rounded-lg p-2.5 text-xs font-medium transition-all hover:opacity-80"
                      style={{
                        backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                        border: `1px solid ${borderColor}`,
                        color: 'var(--foreground)',
                      }}>
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
