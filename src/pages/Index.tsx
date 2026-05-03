import Header from "@/components/Header";
import TickerBanner from "@/components/TickerBanner";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeatureGrid from "@/components/FeatureGrid";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import NoiseOverlay from "@/components/NoiseOverlay";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <NoiseOverlay />
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      <TickerBanner text="FLUTTER DEVELOPER · KUNAL PATEL · DART · CLEAN ARCHITECTURE · RIVERPOD · FIREBASE · PLAY STORE · SUPABASE · " />
      <HeroSection />
      <TickerBanner text="ARCHITECTURE FIRST · PRODUCTION GRADE · CROSS PLATFORM · GEOLOCATION · FCM · JWT AUTH · " />
      <FeatureGrid />
      <ComparisonSection />
      <TickerBanner text="YOURHRMS · OYNX · MEDCARD · OPEN TO MID-SENIOR ROLES · LET'S BUILD SOMETHING · " />
      <EducationSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;