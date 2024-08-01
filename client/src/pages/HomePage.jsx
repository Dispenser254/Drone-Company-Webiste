import ContactUsSection from "../components/ContactUsSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";

const HomePage = () => {
  return (
    <div className="bg-indigo-900">
      <HeroSection />
      <ServicesSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
