import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';
import { useT } from '../../hooks/useT';

export const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#F43F5E]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-40" />

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { width: 32, height: 32, left: '8%', duration: 6, delay: 0 },
          { width: 48, height: 48, left: '18%', duration: 8, delay: 1 },
          { width: 24, height: 24, left: '32%', duration: 5, delay: 0.5 },
          { width: 56, height: 56, left: '47%', duration: 9, delay: 2 },
          { width: 20, height: 20, left: '61%', duration: 7, delay: 0.3 },
          { width: 40, height: 40, left: '73%', duration: 6, delay: 1.5 },
          { width: 28, height: 28, left: '84%', duration: 8, delay: 0.8 },
          { width: 36, height: 36, left: '93%', duration: 5, delay: 2.5 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-float-bubble"
            style={{
              width: `${b.width}px`,
              height: `${b.height}px`,
              left: b.left,
              bottom: `-${b.height}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
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
            {t.finalCTA.headline1}<br />{t.finalCTA.headline2}
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            {t.finalCTA.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-white text-[#0A0A0F] font-semibold text-base px-8 py-4 rounded-full hover:bg-white/95 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <Sparkles className="w-5 h-5" />
              {t.finalCTA.ctaPrimary}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-white font-semibold text-base border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              {t.finalCTA.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
