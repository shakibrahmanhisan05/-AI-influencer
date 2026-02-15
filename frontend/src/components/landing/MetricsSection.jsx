import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { metricsData } from '../../data/mock';

const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatNumber = (num) => {
    if (value >= 1000) return Math.floor(num).toLocaleString();
    if (Number.isInteger(value)) return Math.floor(num);
    return num.toFixed(1);
  };

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {metricsData.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-2">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix || ''}
                />
              </p>
              <p className="text-sm text-[#94A3B8]">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
