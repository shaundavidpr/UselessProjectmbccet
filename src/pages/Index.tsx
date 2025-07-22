import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventHighlights from '@/components/EventHighlights';
import WhyParticipate from '@/components/WhyParticipate';
import EventDetails from '@/components/EventDetails';
import RegistrationCTA from '@/components/RegistrationCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <EventHighlights />
      <WhyParticipate />
      <EventDetails />
      <RegistrationCTA />
      <Footer />
    </div>
  );
};

export default Index;