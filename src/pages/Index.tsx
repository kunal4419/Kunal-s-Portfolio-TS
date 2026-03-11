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

      <TickerBanner text="FULL-STACK DEVELOPER · KUNAL PATEL · JAVA · REACT · NODE.JS · AWS · GCP · NEXT.JS · " />
      <HeroSection />
      <TickerBanner text="CLEAN CODE · SCALABLE APPS · USER-CENTRIC · PROBLEM SOLVER · 250+ LEETCODE · " />
      <FeatureGrid />
      <ComparisonSection />
      <TickerBanner text="FITFLOW · MEDIX · STOREMETER · OPEN TO OPPORTUNITIES · LET'S BUILD SOMETHING · " />
      <EducationSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;

