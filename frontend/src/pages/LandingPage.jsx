import { Navbar } from '../components/libra/Navbar';
import { Hero } from '../components/libra/Hero';
import { BentoGrid } from '../components/libra/BentoGrid';
import { Features } from '../components/libra/Features';
import { Pricing } from '../components/libra/Pricing';
import { FAQ } from '../components/libra/FAQ';
import { CTA } from '../components/libra/CTA';
import { Footer } from '../components/libra/Footer';

const LandingPage = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--background-landing)', color: 'var(--foreground-landing)' }}>
      <Navbar />
      <Hero />
      <BentoGrid />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default LandingPage;
