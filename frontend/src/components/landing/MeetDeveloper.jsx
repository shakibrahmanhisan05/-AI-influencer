import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { developerInfo } from '../../data/mock';
import { Brain, Linkedin, Github, Heart } from 'lucide-react';
import { useT } from '../../hooks/useT';

export const MeetDeveloper = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const t = useT();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[860px] mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-[42px] leading-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              {t.developer.sectionTitle}
            </h2>
            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>{t.developer.subtitle}</p>
          </div>

          {/* Developer card */}
          <div
            className="relative rounded-2xl backdrop-blur-[20px] border p-8 lg:p-10"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'rgba(124,58,237,0.15)',
              boxShadow: '0 0 60px rgba(124,58,237,0.08)',
            }}
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[rgba(124,58,237,0.2)] via-transparent to-[rgba(244,63,94,0.1)] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-conic animate-spin-slow" />
                  <div className="relative w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 group-hover:scale-[1.04] transition-transform duration-500" style={{ borderColor: 'var(--bg-primary)' }}>
                    <img
                      src={developerInfo.photo}
                      alt={developerInfo.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[rgba(124,58,237,0.15)] blur-[40px] -z-10" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-2xl lg:text-[36px] leading-tight bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent mb-3">
                  {developerInfo.name}
                </h3>
                <div className="inline-flex items-center gap-2 bg-[rgba(124,58,237,0.15)] rounded-full px-4 py-1.5 mb-5">
                  <Brain className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-[13px] font-medium text-[#7C3AED]">{t.developer.role}</span>
                </div>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {t.developer.bio}
                </p>

                {/* Social links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={developerInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border border-[rgba(10,102,194,0.3)] hover:border-[#0A66C2] transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,102,194,0.15)]"
                    style={{ backgroundColor: 'var(--bg-card)' }}
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{t.developer.linkedin}</span>
                  </a>
                  <a
                    href={developerInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border transition-all duration-300"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                  >
                    <Github className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{t.developer.github}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-8 pt-5 border-t text-center" style={{ borderColor: 'var(--border-subtle)' }}>
              <p className="text-[13px] italic flex items-center justify-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                {t.developer.bottomAccent} <Heart className="w-3.5 h-3.5 text-[#F43F5E] fill-[#F43F5E]" /> {t.developer.bottomAccentEnd}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
