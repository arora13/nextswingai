import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SupportSection from "@/components/SupportSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PrivacySection from "@/components/PrivacySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SupportSection />
      <TestimonialsSection />
      <PrivacySection />
      <ContactSection />
    </div>
  );
};

export default Index;