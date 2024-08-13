import contactUrl from "../assets/img/hero_about.jpg";
import ContactUsSection from "../components/ContactUsSection";
import FooterSection from "../components/FooterSection";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-indigo-900">
      <div className="relative h-[75vh]">
        <div className="sticky overflow-hidden h-full">
          <img
            src={contactUrl}
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
            Book Your <span className="underline">Drone</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 font-secondary font-light">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs line.
          </p>
        </motion.div>
      </div>
      <ContactUsSection />
      <FooterSection />
    </div>
  );
};

export default ContactPage;
