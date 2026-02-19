import { cn } from '../../lib/utils';
// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
import { motion } from 'framer-motion';

export function Section({ className, children, ...props }) {
  return (
    <section
      className={cn(
        'px-4 py-8 sm:py-12 md:py-16',
        className
      )}
      style={{ backgroundColor: 'var(--background-landing)', color: 'var(--foreground-landing)' }}
      {...props}
    >
      {children}
    </section>
  );
}

export function Glow({ variant = 'top', className }) {
  const posClass = {
    top: 'top-0',
    above: '-top-[128px]',
    bottom: 'bottom-0',
    below: '-bottom-[128px]',
    center: 'top-1/2',
  }[variant] || 'top-0';

  return (
    <div className={cn('absolute w-full z-0 pointer-events-none', posClass, className)}>
      <div
        className={cn(
          'absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] opacity-20 dark:opacity-80 sm:h-[512px] z-0'
        )}
        style={{
          background: 'radial-gradient(circle, var(--brand-foreground) 10%, transparent 60%)',
          opacity: undefined,
        }}
      />
      <div
        className={cn(
          'absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] opacity-15 dark:opacity-60 sm:h-[256px] z-0'
        )}
        style={{
          background: 'radial-gradient(circle, var(--brand) 10%, transparent 60%)',
        }}
      />
    </div>
  );
}

// ADDED: libra.dev spring hover physics on GlassCard
const cardSpring = { type: 'spring', stiffness: 400, damping: 17 };

export function GlassCard({ className, children, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      transition={cardSpring}
      className={cn(
        'glass-1 group relative flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-lg transition-shadow',
        hover && 'hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MockupFrame({ className, children }) {
  return (
    <div
      className={cn(
        'flex relative z-10 overflow-hidden rounded-2xl p-2',
        className
      )}
      style={{
        backgroundColor: 'var(--border)',
        opacity: 0.9,
      }}
    >
      {children}
    </div>
  );
}

export function Badge({ children, className }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm animate-appear',
        className
      )}
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--card)',
      }}
    >
      {children}
    </div>
  );
}
