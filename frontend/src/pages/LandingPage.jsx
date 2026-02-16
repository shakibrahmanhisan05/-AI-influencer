import { Navbar } from '../components/landing/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { SocialProofStrip } from '../components/landing/SocialProofStrip';
import { FeaturedIn } from '../components/landing/FeaturedIn';
import { ProblemSolution } from '../components/landing/ProblemSolution';
import { MetricsSection } from '../components/landing/MetricsSection';
import { CoreFeatures } from '../components/landing/CoreFeatures';
import { PlusTier } from '../components/landing/PlusTier';
import { UseCases } from '../components/landing/UseCases';
import { IntegrationsGrid } from '../components/landing/IntegrationsGrid';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Testimonials } from '../components/landing/Testimonials';
import { Pricing } from '../components/landing/Pricing';
import { ComparisonTable } from '../components/landing/ComparisonTable';
import { FinalCTA } from '../components/landing/FinalCTA';
import { MeetVisionary } from '../components/landing/MeetVisionary';
import { MeetDeveloper } from '../components/landing/MeetDeveloper';
import { Footer } from '../components/landing/Footer';
import { useT } from '../hooks/useT';

const LandingPage = () => {
  const t = useT();

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <FeaturedIn />
      <ProblemSolution />
      <MetricsSection />
      <CoreFeatures />
      <PlusTier />
      <UseCases />
      <IntegrationsGrid />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <ComparisonTable />
      <FinalCTA />
      <MeetVisionary />
      {/* Team section connector */}
      <div className="flex items-center justify-center gap-4 -mt-8 -mb-8 relative z-10">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
        <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}>
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>{t.teamConnector}</span>
        </div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
      </div>
      <MeetDeveloper />
      <Footer />
    </div>
  );
};

export default LandingPage;
