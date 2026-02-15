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
import { MeetDeveloper } from '../components/landing/MeetDeveloper';
import { Footer } from '../components/landing/Footer';

const LandingPage = () => (
  <div className="bg-[#0A0A0F] min-h-screen">
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
    <MeetDeveloper />
    <Footer />
  </div>
);

export default LandingPage;
