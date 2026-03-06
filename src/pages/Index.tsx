import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VesselsRepairIntro from "@/components/VesselsRepairIntro";
import ComprehensiveRepairBlock from "@/components/ComprehensiveRepairBlock";
import ShipRepairSection from "@/components/ShipRepairSection";
import PortfolioSection from "@/components/PortfolioSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VesselsRepairIntro />
      <ShipRepairSection />
      <ComprehensiveRepairBlock />
      <PortfolioSection />
      <AdvantagesSection />
      <HowWeWorkSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
