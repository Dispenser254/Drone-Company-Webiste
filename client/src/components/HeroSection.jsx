import videoUrl from "../assets/video/hero.mp4";
import droneUrl from "../assets/img/drone-hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div style={{ scale }} ref={targetRef} className="relative h-screen">
      <div
        style={{ scale }}
        ref={targetRef}
        className="sticky overflow-hidden rounded-b-3xl h-screen"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-950/70 rounded-b-3xl"
      />
      <div className="h-screen absolute z-10 flex flex-col md:items-center justify-center top-12 md:left-0 md:top-0 w-full px-8 overflow-hidden md:flex-row md:justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, type: "spring" }}
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
        >
          <h1 className="mb-2 text-4xl font-bold font-primary text-orange-500 md:text-7xl text-center md:text-left">
            Experience the Future of Flight
          </h1>
          <p className="text-xl md:mb-4 md:text-3xl text-white text-center md:text-left">
            Leading innovation in drone technology for a smarter, safer, and
            more efficient world.
          </p>
          <div className="flex justify-center md:justify-start mt-8 gap-8">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="group flex text-base w-fit items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2 text-gray-50 transition-colors hover:bg-orange-700 uppercase"
            >
              View Products
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="group flex text-base uppercase w-fit items-center gap-1.5 rounded-full bg-gray-500/50 px-4 py-2 text-gray-50 ring-2 ring-orange-300 hover:bg-gray-500/90"
            >
              Contact Us
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5 }}
          whileHover={{ scale: 1.05 }}
          className="flex w-full md:w-1/2 justify-center items-end md:items-center"
        >
          <motion.img
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
            src={droneUrl}
            alt="drone"
            className="mb-[-20vh]"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
