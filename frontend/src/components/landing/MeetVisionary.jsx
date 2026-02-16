import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Heart } from 'lucide-react';
import { useT } from '../../hooks/useT';

const visionaryInfo = {
  name: 'Tahmid Khan Alim',
  photo: '/visionary-photo.jpg',
};

export const MeetVisionary = () => {
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
              {t.visionary.sectionTitle}
            </h2>
            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>{t.visionary.subtitle}</p>
          </div>

          {/* Visionary card */}
          <div
            className="relative rounded-2xl backdrop-blur-[20px] border p-8 lg:p-10"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'rgba(244,63,94,0.2)',
              boxShadow: '0 0 60px rgba(244,63,94,0.06)',
            }}
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[rgba(244,63,94,0.15)] via-transparent to-[rgba(124,58,237,0.08)] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="shrink-0">
                <div className="relative group">
                  <div
                    className="absolute -inset-1 rounded-full animate-spin-slow"
                    style={{
                      background: 'conic-gradient(from 0deg, #F43F5E, #7C3AED, #F43F5E)',
                    }}
                  />
                  <div className="relative w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 group-hover:scale-[1.04] transition-transform duration-500" style={{ borderColor: 'var(--bg-primary)' }}>
                    <img
                      src={visionaryInfo.photo}
                      alt={visionaryInfo.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `
                          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#F43F5E20,#7C3AED20);font-size:48px;font-weight:800;color:white;">
                            TK
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[rgba(244,63,94,0.12)] blur-[40px] -z-10" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-2xl lg:text-[36px] leading-tight bg-gradient-to-r from-[#F43F5E] to-[#7C3AED] bg-clip-text text-transparent mb-3">
                  {visionaryInfo.name}
                </h3>

                <div className="inline-flex items-center gap-2 bg-[rgba(244,63,94,0.12)] rounded-full px-4 py-1.5 mb-5">
                  <Lightbulb className="w-4 h-4 text-[#F43F5E]" />
                  <span className="text-[13px] font-medium text-[#F43F5E]">{t.visionary.role}</span>
                </div>

                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {t.visionary.bio}
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-8 pt-5 border-t text-center" style={{ borderColor: 'var(--border-subtle)' }}>
              <p className="text-[13px] italic flex items-center justify-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                {t.visionary.bottomAccent} — {visionaryInfo.name}
                <Heart className="w-3.5 h-3.5 text-[#F43F5E] fill-[#F43F5E]" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
