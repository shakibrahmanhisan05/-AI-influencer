// === LIBRA.DEV ANIMATION LAYER — Mouse Roaming Spotlight ===
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export function MouseSpotlight() {
    // ADDED: libra.dev mouse spotlight — spring-physics cursor-following radial gradient
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

    useEffect(() => {
        const handleMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [mouseX, mouseY]);

    // Build the radial gradient background string reactively
    const background = useMotionTemplate`radial-gradient(circle 600px at ${springX}px ${springY}px, rgba(129,140,248,0.15) 0%, transparent 55%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            style={{ background }}
            aria-hidden="true"
        />
    );
}
