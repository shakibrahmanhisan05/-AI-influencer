import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#F43F5E]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-float-bubble"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${20 + Math.random() * 40}px`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[56px] leading-[1.1] text-white mb-6">
            Your AI Agent Is Waiting.<br />Set It Up in 5 Minutes.
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Join 12,000+ influencers who never miss a customer message or a sales opportunity again.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-white text-[#0A0A0F] font-semibold text-base px-8 py-4 rounded-full hover:bg-white/95 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <Sparkles className="w-5 h-5" />
              Start for Free — No Card Needed
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-white font-semibold text-base border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Talk to Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
