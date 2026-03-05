import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ShipRepairSection from "@/components/ShipRepairSection";
import YachtServiceSection from "@/components/YachtServiceSection";
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
      <ServicesOverview />
      <ShipRepairSection />
      <YachtServiceSection />
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
