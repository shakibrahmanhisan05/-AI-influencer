import { Navbar } from '../components/libra/Navbar';
import { Hero } from '../components/libra/Hero';
import { BentoGrid } from '../components/libra/BentoGrid';
import { Features } from '../components/libra/Features';
import { Pricing } from '../components/libra/Pricing';
import { FAQ } from '../components/libra/FAQ';
import { CTA } from '../components/libra/CTA';
import { Footer } from '../components/libra/Footer';
// === LIBRA.DEV ANIMATION LAYER ADDED BELOW ===
import { MouseSpotlight } from '../components/libra/MouseSpotlight';

const LandingPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--background-landing)', color: 'var(--foreground-landing)' }}>
      {/* ADDED: libra.dev global mouse roaming spotlight */}
      <MouseSpotlight />
      <Navbar />
      <Hero />
      <Features />
      <BentoGrid />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default LandingPage;
