import FooterSection from "../components/FooterSection";
import ProductsSection from "../components/ProductsSection";
import productUrl from "../assets/img/hero_inner_01.jpg";
import VideoSection from "../components/VideoSection";
import { motion } from "framer-motion";

const ProductsPage = () => {
  return (
    <div className="bg-indigo-900">
      <div className="relative h-[75vh]">
        <div className="sticky overflow-hidden h-full">
          <img
            src={productUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-neutral-950/80" />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5, type: "spring", delay: 0.5 }}
          className="h-[75vh] max-w-4xl mx-auto absolute z-10 flex flex-col items-start justify-end top-0 left-0 p-4"
        >
          <h1 className="text-4xl font-bold font-primary text-orange-500 md:text-7xl mb-6">
            Our <span className="underline">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 font-secondary font-light">
            Aerial filming with unmanned aerial vehicles (UAVs) or drones as
            they are most often known, is the future of aerial sports
            photography, tv commercials etc.
          </p>
        </motion.div>
      </div>
      <ProductsSection />
      <VideoSection />
      <FooterSection />
    </div>
  );
};

export default ProductsPage;
