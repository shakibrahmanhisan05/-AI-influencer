import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { heroChat, heroBadges, trustBadges } from '../../data/mock';
import { Play, CheckCircle, MessageSquare, ShoppingBag, PackageCheck, Sparkles, Bot } from 'lucide-react';

const badgeIcons = {
  'top-right': MessageSquare,
  'bottom-left': ShoppingBag,
  'right-middle': PackageCheck,
};

const ChatBubble = ({ message, index }) => {
  const isAI = message.type === 'ai';
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.6, duration: 0.4 }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-3`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isAI
            ? 'bg-gradient-to-br from-[#7C3AED]/30 to-[#7C3AED]/10 text-white border border-[#7C3AED]/20'
            : 'bg-white/10 text-white/90 border border-white/10'
        }`}
      >
        {isAI && <Bot className="w-3.5 h-3.5 text-[#7C3AED] mb-1 inline-block mr-1.5" />}
        {message.text}
      </div>
    </motion.div>
  );
};

const FloatingBadge = ({ badge, index }) => {
  const Icon = badgeIcons[badge.position];
  const posClasses = {
    'top-right': '-top-4 -right-6 lg:-right-10',
    'bottom-left': '-bottom-4 -left-6 lg:-left-10',
    'right-middle': 'top-1/2 -right-8 lg:-right-14 -translate-y-1/2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 + index * 0.4, duration: 0.5 }}
      className={`absolute ${posClasses[badge.position]} z-20 bg-[#0F0F1A]/90 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-2xl`}
    >
      <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 flex items-center justify-center">
        <Icon className="w-4 h-4 text-[#10B981]" />
      </div>
      <span className="text-xs font-semibold text-white whitespace-nowrap">{badge.text}</span>
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[100px] pb-20 overflow-hidden" id="hero">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/8 blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#10B981]/6 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-[#F43F5E]/5 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Left column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
              </span>
              <span className="text-sm font-medium text-[#10B981]">AI Agent — Always Online</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-[42px] sm:text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.05] tracking-tight text-white mb-6">
              Your AI Handles{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent">
                Every DM.
              </span>
              <br />
              You Handle the Fame.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-[#94A3B8] max-w-xl leading-relaxed mb-10">
              InfluenceAI gives social influencers a 24/7 AI agent that replies to customer messages, checks product availability, answers questions, and auto-posts your deals — so you never lose a sale while you sleep.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mb-8">
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] text-white font-semibold text-base px-8 py-4 rounded-full overflow-hidden transition-shadow duration-400 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
              >
                <span className="absolute inset-0 shimmer-effect" />
                <span className="relative z-10">Get Started Free</span>
                <Sparkles className="w-5 h-5 relative z-10" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-base transition-colors duration-300"
              >
                <Play className="w-5 h-5" />
                <span className="relative">
                  Watch 2-Min Demo
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-400" />
                </span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#7C3AED]/20 blur-[100px]" />

            {/* Phone */}
            <div className="relative animate-float">
              <div className="relative w-[280px] sm:w-[300px] bg-[#111118]/90 backdrop-blur-xl rounded-[36px] border border-white/10 p-5 shadow-2xl shadow-[#7C3AED]/10">
                {/* Phone header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">InfluenceAI</p>
                    <p className="text-xs text-[#10B981] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      Online
                    </p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="space-y-1">
                  {heroChat.map((msg, i) => (
                    <ChatBubble key={i} message={msg} index={i} />
                  ))}
                </div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="flex items-center gap-1 mt-3 px-3"
                >
                  <div className="typing-dot" />
                  <div className="typing-dot animation-delay-200" />
                  <div className="typing-dot animation-delay-400" />
                </motion.div>
              </div>

              {/* Floating badges */}
              {heroBadges.map((badge, i) => (
                <FloatingBadge key={badge.text} badge={badge} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
