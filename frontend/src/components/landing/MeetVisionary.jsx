import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Heart } from 'lucide-react';

// Visionary data — hardcoded directly in this component
// (not in mock.js since this is a standalone section)
const visionaryInfo = {
  name: 'Tahmid Khan Alim',
  role: 'Visionary & Project Lead',
  bio: 'The idea behind InfluenceAI started with Tahmid. Watching creators lose sales and customers every day simply because they couldn\'t keep up with their inbox, he envisioned a platform where no message goes unanswered — ever. His vision shaped every feature, every user flow, and the core mission of this product.',
  photo: '/visionary-photo.jpg', // Add Tahmid's photo to frontend/public/ folder with this exact filename
};

export const MeetVisionary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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
            <h2 className="font-display font-bold text-3xl lg:text-[42px] leading-tight text-white mb-3">
              The Mind Behind the Vision
            </h2>
            <p className="text-[#94A3B8] text-base">The person who imagined InfluenceAI before it existed</p>
          </div>

          {/* Visionary card */}
          <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-[20px] border border-[rgba(244,63,94,0.2)] p-8 lg:p-10 shadow-[0_0_60px_rgba(244,63,94,0.06)]">

            {/* Gradient border glow — coral/rose tint to visually distinguish from developer section */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[rgba(244,63,94,0.15)] via-transparent to-[rgba(124,58,237,0.08)] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">

              {/* Photo */}
              <div className="shrink-0">
                <div className="relative group">
                  {/* Spinning gradient border — coral variant */}
                  <div
                    className="absolute -inset-1 rounded-full animate-spin-slow"
                    style={{
                      background: 'conic-gradient(from 0deg, #F43F5E, #7C3AED, #F43F5E)',
                    }}
                  />
                  <div className="relative w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 border-[#0A0A0F] group-hover:scale-[1.04] transition-transform duration-500">
                    <img
                      src={visionaryInfo.photo}
                      alt={visionaryInfo.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Graceful fallback if photo not added yet
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `
                          <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#F43F5E20,#7C3AED20);font-size:48px;font-weight:800;color:white;">
                            TK
                          </div>
                        `;
                      }}
                    />
                  </div>
                  {/* Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[rgba(244,63,94,0.12)] blur-[40px] -z-10" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                {/* Name in gradient — coral-to-purple (opposite of developer section) */}
                <h3 className="font-display font-bold text-2xl lg:text-[36px] leading-tight bg-gradient-to-r from-[#F43F5E] to-[#7C3AED] bg-clip-text text-transparent mb-3">
                  {visionaryInfo.name}
                </h3>

                {/* Role badge — coral tint */}
                <div className="inline-flex items-center gap-2 bg-[rgba(244,63,94,0.12)] rounded-full px-4 py-1.5 mb-5">
                  <Lightbulb className="w-4 h-4 text-[#F43F5E]" />
                  <span className="text-[13px] font-medium text-[#F43F5E]">{visionaryInfo.role}</span>
                </div>

                {/* Bio */}
                <p className="text-[#94A3B8] text-base leading-relaxed">
                  {visionaryInfo.bio}
                </p>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] text-center">
              <p className="text-[13px] text-[#94A3B8] italic flex items-center justify-center gap-1.5">
                The vision that started it all — {visionaryInfo.name}
                <Heart className="w-3.5 h-3.5 text-[#F43F5E] fill-[#F43F5E]" />
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
