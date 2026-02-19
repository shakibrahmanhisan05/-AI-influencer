// === ADDED: libra.dev Features Visuals — Glowing Semi-Circle Horizon Arc ===
import { motion } from 'framer-motion';

/**
 * A bottom-anchored, curved glowing arc that looks like a rising planet/horizon.
 * Uses layered radial-gradients + box-shadow for the warm amber glow.
 * Includes a slow breathing pulse animation.
 */
export function GlowingArc() {
    return (
        <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
                width: '140%',
                height: '800px',
                zIndex: 0,
            }}
        >
            {/* === Main arc body — large dark sphere with glowing rim === */}
            <motion.div
                animate={{
                    scale: [1, 1.015, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    position: 'absolute',
                    bottom: '-55%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    /* Dark inner sphere body */
                    background: 'radial-gradient(ellipse at 50% 30%, rgba(40, 28, 12, 0.6) 0%, rgba(15, 10, 5, 0.9) 40%, transparent 70%)',
                }}
            />

            {/* === Bright rim glow — the main amber-orange edge light === */}
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.9, 1, 0.9],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    position: 'absolute',
                    bottom: '-55%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    /* Top-edge concentrated glow */
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.35) 0%, rgba(251, 146, 60, 0.15) 15%, transparent 40%)',
                    boxShadow: [
                        '0 -2px 60px rgba(245, 158, 11, 0.25)',
                        '0 -4px 120px rgba(251, 146, 60, 0.15)',
                        'inset 0 2px 80px rgba(245, 158, 11, 0.1)',
                    ].join(', '),
                }}
            />

            {/* === Thin bright arc line at the very top edge === */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-55%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(245, 158, 11, 0.4)',
                    borderBottom: 'none',
                    /* Only show the top arc portion */
                    clipPath: 'inset(0 0 50% 0)',
                    filter: 'blur(0.5px)',
                }}
            />

            {/* === Outer soft atmospheric haze === */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-60%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120%',
                    height: '110%',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 50% 10%, rgba(180, 120, 40, 0.08) 0%, transparent 50%)',
                    filter: 'blur(40px)',
                }}
            />
        </div>
    );
}
