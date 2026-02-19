// === ADDED: libra.dev Features Visuals — Glowing Semi-Circle Horizon Arc ===
import { motion } from 'framer-motion';

/**
 * A bottom-anchored, curved glowing arc that looks like a rising planet/horizon.
 * Designed to sit BEHIND the Revenue Growth chart card.
 * Uses layered radial-gradients + box-shadow for the warm amber glow.
 */
export function GlowingArc() {
    return (
        <>
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
                    bottom: '-70%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '130%',
                    height: '130%',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 50% 30%, rgba(40, 28, 12, 0.3) 0%, rgba(15, 10, 5, 0.5) 30%, transparent 60%)',
                    pointerEvents: 'none',
                }}
            />

            {/* === Bright rim glow — the main amber-orange edge light === */}
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.85, 1, 0.85],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                style={{
                    position: 'absolute',
                    bottom: '-70%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '130%',
                    height: '130%',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.25) 0%, rgba(251, 146, 60, 0.1) 12%, transparent 35%)',
                    boxShadow: '0 -2px 50px rgba(245, 158, 11, 0.15), 0 -4px 100px rgba(251, 146, 60, 0.08)',
                    pointerEvents: 'none',
                }}
            />

            {/* === Thin bright arc line at the very top edge === */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-70%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '130%',
                    height: '130%',
                    borderRadius: '50%',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderBottom: 'none',
                    clipPath: 'inset(0 5% 55% 5%)',
                    filter: 'blur(0.5px)',
                    pointerEvents: 'none',
                }}
            />

            {/* === Outer soft atmospheric haze === */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-75%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '140%',
                    height: '120%',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 50% 10%, rgba(180, 120, 40, 0.06) 0%, transparent 45%)',
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                }}
            />
        </>
    );
}
