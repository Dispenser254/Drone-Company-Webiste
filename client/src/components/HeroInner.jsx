import heroUrl from "../assets/img/hero_inner_01.jpg";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroInner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="relative h-[75vh] bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${heroUrl})` }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1] }}
        exit={{ opacity: 0, y: -200 }}
        className="flex flex-col items-center justify-center gap-y-14"
      >
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="lg:text-6xl font-secondary text-white">
            Interesting Drone Data
          </h1>
          <p className="font-primary text-3xl text-center font-extralight text-neutral-300">
            Professionally cultivate one-to-one
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 place-content-center">
          <div className="flex justify-center items-center divide-x-2 gap-x-2">
            <div className="text-white text-4xl font-bold border-2 rounded-full p-2 mr-6">
              <GiDeliveryDrone />
            </div>
            <div className="flex flex-col justify-center items-start pl-4 lg:pl-6 text-white">
              <span className="text-xl font-bold">80</span>
              <span className="uppercase text-base">Satisfied Clients</span>
            </div>
          </div>
          <div className="flex justify-center items-center divide-x-2 gap-x-2">
            <div className="text-white text-4xl font-bold border-2 rounded-full p-2 mr-6">
              <MdOutlinePodcasts />
            </div>
            <div className="flex flex-col justify-center items-start pl-4 lg:pl-6 text-white">
              <span className="text-xl font-bold">65</span>
              <span className="uppercase text-base">Projects Done</span>
            </div>
          </div>
          <div className="flex justify-center items-center divide-x-2 gap-x-2">
            <div className="text-white text-4xl font-bold border-2 rounded-full p-2 mr-6">
              <RiBattery2ChargeLine />
            </div>
            <div className="flex flex-col justify-center items-start pl-4 lg:pl-6 text-white">
              <span className="text-xl font-bold">25</span>
              <span className="uppercase text-base">Flight Time</span>
            </div>
          </div>
          <div className="flex justify-center items-center divide-x-2 gap-x-2">
            <div className="text-white text-4xl font-bold border-2 rounded-full p-2 mr-6">
              <IoMdImages />
            </div>
            <div className="flex flex-col justify-center items-start pl-4 lg:pl-6 text-white">
              <span className="text-xl font-bold">2160</span>
              <span className="uppercase text-base">4k Resolution</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroInner;
