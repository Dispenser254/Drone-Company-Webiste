import ContactUsSection from "../components/ContactUsSection";
import FooterSection from "../components/FooterSection";
import HeroInner from "../components/HeroInner";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import VideoSection from "../components/VideoSection";

const HomePage = () => {
  return (
    <div className="bg-indigo-900">
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <VideoSection />
      <HeroInner />
      <TestimonialSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
