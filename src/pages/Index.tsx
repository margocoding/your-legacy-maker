import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import RemovalSection from "@/components/RemovalSection";
import TrustSection from "@/components/TrustSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <ServicesSection />
    <RemovalSection />
    <TrustSection />
    <AdvantagesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
