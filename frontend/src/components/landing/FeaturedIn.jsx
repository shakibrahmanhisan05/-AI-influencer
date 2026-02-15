import { motion } from 'framer-motion';

const logos = [
  'ProductHunt',
  'Forbes',
  'Entrepreneur',
  'Social Media Examiner',
  'The Verge',
  'TechCrunch',
];

export const FeaturedIn = () => {
  return (
    <section className="relative py-10 bg-[#111118] border-y border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-center text-xs text-white/40 uppercase tracking-widest mb-6">
          Recognized by creators and press worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {logos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="text-white/30 hover:text-white/70 font-bold text-sm lg:text-base uppercase tracking-wider transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
