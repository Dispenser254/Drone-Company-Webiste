import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import video1 from "../assets/video/video-1.mp4";
import video2 from "../assets/video/video-2.mp4";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-blue-400 mx-auto h-auto sm:h-auto lg:h-[120vh] flex flex-col items-center justify-center p-4 pt-16 pb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1] }}
        exit={{ opacity: 0, y: -200 }}
        className="flex flex-col items-center justify-center m-4 p-4"
      >
        <h1 className="mb-2 text-4xl font-bold font-primary text-center">
          Innovative Streaming & Publishing
        </h1>
        <p className="text-base font-extralight text-center">
          Sprawling cities are great, but drone usage in film and TV is not
          limited to <br />
          ‘establishing’ shots anymore
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 m-4 w-full h-full">
        <div className="aspect-w-16 aspect-h-9">
          <video
            className="w-full h-full rounded-xl"
            src={video1}
            autoPlay={isInView}
            loop
            controls
            muted
            playsInline
          />
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <video
            className="w-full h-full rounded-xl"
            src={video2}
            autoPlay={isInView}
            loop
            muted
            playsInline
            controls
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-8">
        <button className="px-8 py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
