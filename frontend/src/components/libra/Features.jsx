import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Section } from './Section';
import { GlowingArc } from './GlowingArc';
import { useTheme } from '../../context/ThemeContext';

// === Lazy load R3F sphere for performance ===
const FeaturesSphere = lazy(() =>
  import('./FeaturesSphere').then((mod) => ({ default: mod.FeaturesSphere }))
);

export function Features() {
  const { isDark } = useTheme();

  return (
    <Section id="features" className="relative mb-0 sm:mb-0 md:mb-0 w-full overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="max-w-container mx-auto flex flex-col gap-0 px-4 sm:px-6 lg:px-8">
        {/* === Heading + Subtitle — clean, no effects === */}
        <div
          className="flex flex-col items-center gap-4 text-center sm:gap-6 md:gap-8"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-balance text-transparent bg-clip-text"
            style={{
              backgroundImage: isDark
                ? 'linear-gradient(to right, var(--foreground), var(--muted-foreground))'
                : 'linear-gradient(to right, var(--foreground), var(--foreground))',
            }}
          >
            Powerful Features Influencers Love
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl max-w-[620px] font-medium text-balance"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Built with modern AI to give you the best customer engagement experience and interface outputs.
          </motion.p>
        </div>

        {/* === 3D Visuals — directly below subtitle, self-contained === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="relative w-full"
          style={{ height: 'clamp(320px, 50vw, 550px)', marginTop: '2rem' }}
        >
          {/* Glowing arc — horizon glow */}
          <GlowingArc />

          {/* R3F Sphere — centered, fills the visual container */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            <Suspense fallback={null}>
              <FeaturesSphere />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
