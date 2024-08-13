/* eslint-disable react/no-unescaped-entities */
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-[300vh] sm:h-[200vh] lg:h-[120vh] bg-sky-500 flex justify-center items-center px-5 lg:px-10 py-5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        exit={{ opacity: 0, y: -200 }}
        className="max-w-7xl mx-auto flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-primary text-black mb-12">
          What Our
          <br /> Clients Say
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-10 lg:gap-x-14 px-8 gap-y-5 overflow-hidden">
          <div className="flex flex-col border-4 border-neutral-900 h-[63vh] w-[35vh] sm:h-[75vh] sm:w-[45vh] lg:h-[60vh] lg:w-[36vh] bg-white rounded-[50px] divide-y-4 divide-neutral-950">
            <div className="flex items-center justify-center">
              <div className="p-3">
                <div className="bg-black p-1 px-8 rounded-3xl "></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between items-center bg-orange-300">
              <div className="px-4 mt-6 flex flex-col">
                <span className="lg:text-2xl rounded-full p-2">
                  <FaQuoteLeft />
                </span>
                <p className="text-base text-neutral-700 italic font-secondary">
                  "Using this contact form was a breeze! I sent my message and
                  received a prompt, friendly response. Excellent service!"
                </p>
                <span className="lg:text-2xl flex items-center p-2">
                  <FaQuoteRight />
                </span>
              </div>
              <span className="text-base lg:text-xl font-secondary italic mb-10">
                ~John D.~
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <div className="p-2">
                <div
                  className="bg-neutral-500 p-2.5 px-2.5"
                  style={{ clipPath: "polygon(0 50%, 100% 100%, 100% 0)" }}
                ></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5 px-2.5 rounded-3xl "></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5  px-2.5"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border-4 border-neutral-900 h-[63vh] w-[35vh] sm:h-[75vh] sm:w-[45vh] lg:h-[60vh] lg:w-[36vh] mt-6 sm:mt-0 bg-white rounded-[50px] divide-y-4 divide-neutral-950">
            <div className="flex items-center justify-center">
              <div className="p-3">
                <div className="bg-black p-1 px-8 rounded-3xl "></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between items-center bg-orange-300">
              <div className="px-4 mt-6 flex flex-col">
                <span className="lg:text-2xl rounded-full p-2">
                  <FaQuoteLeft />
                </span>
                <p className="text-base text-neutral-700 italic font-secondary">
                  "Fantastic experience! The contact form is straightforward,
                  and I appreciated the quick reply. Highly recommend!"
                </p>
                <span className="lg:text-2xl flex items-center p-2">
                  <FaQuoteRight />
                </span>
              </div>
              <span className="text-base text-center lg:text-xl font-secondary italic mb-10">
                ~Emily Johnson~
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <div className="p-2">
                <div
                  className="bg-neutral-500 p-2.5 px-2.5"
                  style={{ clipPath: "polygon(0 50%, 100% 100%, 100% 0)" }}
                ></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5 px-2.5 rounded-3xl "></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5  px-2.5"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-4 border-neutral-900 h-[63vh] w-[35vh] sm:h-[75vh] sm:w-[45vh] lg:h-[60vh] lg:w-[36vh] mt-6 lg:mt-0 bg-white rounded-[50px] divide-y-4 divide-neutral-950">
            <div className="flex items-center justify-center">
              <div className="p-3">
                <div className="bg-black p-1 px-8 rounded-3xl "></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between items-center bg-orange-300">
              <div className="px-4 mt-6 flex flex-col">
                <span className="lg:text-2xl rounded-full p-2">
                  <FaQuoteLeft />
                </span>
                <p className="text-base text-neutral-700 italic font-secondary">
                  "I had a question about their services, and the team got back
                  to me right away. Very professional and efficient!"
                </p>
                <span className="lg:text-2xl flex items-center p-2">
                  <FaQuoteRight />
                </span>
              </div>
              <span className="text-base lg:text-xl font-secondary italic mb-10">
                ~John Smith~
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <div className="p-2">
                <div
                  className="bg-neutral-500 p-2.5 px-2.5"
                  style={{ clipPath: "polygon(0 50%, 100% 100%, 100% 0)" }}
                ></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5 px-2.5 rounded-3xl "></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5  px-2.5"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-4 border-neutral-900 h-[63vh] w-[35vh] sm:h-[75vh] sm:w-[45vh] lg:h-[60vh] lg:w-[36vh] mt-6 lg:mt-0 bg-white rounded-[50px] divide-y-4 divide-neutral-950">
            <div className="flex items-center justify-center">
              <div className="p-3">
                <div className="bg-black p-1 px-8 rounded-3xl "></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between items-center bg-orange-300">
              <div className="px-4 mt-6 flex flex-col">
                <span className="lg:text-2xl rounded-full p-2">
                  <FaQuoteLeft />
                </span>
                <p className="text-base text-neutral-700 italic font-secondary">
                  "I had a question about their services, and the team got back
                  to me right away. Very professional and efficient!"
                </p>
                <span className="lg:text-2xl flex items-center p-2">
                  <FaQuoteRight />
                </span>
              </div>
              <span className="text-base lg:text-xl font-secondary italic mb-10">
                ~John Smith~
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <div className="p-2">
                <div
                  className="bg-neutral-500 p-2.5 px-2.5"
                  style={{ clipPath: "polygon(0 50%, 100% 100%, 100% 0)" }}
                ></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5 px-2.5 rounded-3xl "></div>
              </div>
              <div className="p-2">
                <div className="bg-neutral-500 p-2.5  px-2.5"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
