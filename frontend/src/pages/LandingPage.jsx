import { Navbar } from '../components/landing/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { SocialProofStrip } from '../components/landing/SocialProofStrip';
import { ProblemSolution } from '../components/landing/ProblemSolution';
import { CoreFeatures } from '../components/landing/CoreFeatures';
import { PlusTier } from '../components/landing/PlusTier';
import { ChannelIntegrations } from '../components/landing/ChannelIntegrations';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Testimonials } from '../components/landing/Testimonials';
import { Pricing } from '../components/landing/Pricing';
import { IntegrationsGrid } from '../components/landing/IntegrationsGrid';
import { MetricsSection } from '../components/landing/MetricsSection';
import { FinalCTA } from '../components/landing/FinalCTA';
import { MeetDeveloper } from '../components/landing/MeetDeveloper';
import { Footer } from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <ProblemSolution />
      <CoreFeatures />
      <PlusTier />
      <ChannelIntegrations />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <IntegrationsGrid />
      <MetricsSection />
      <FinalCTA />
      <MeetDeveloper />
      <Footer />
    </div>
  );
}
