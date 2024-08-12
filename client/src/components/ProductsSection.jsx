import products1Url from "../assets/img/drone-flying.png";
import droneSvg1 from "../assets/img/drone-svgrepo-com.svg";
import droneSvg2 from "../assets/img/drone-svgrepo-com2.svg";
import droneSvg3 from "../assets/img/drone-svgrepo-com3.svg";
import droneSvg4 from "../assets/img/drone-svgrepo-com4.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-blue-400 mx-auto h-[140vh] sm:h-[200vh] lg:h-[100vh] flex flex-col items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1] }}
        exit={{ opacity: 0, y: -200 }}
        className=""
      >
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="mb-2 text-4xl font-bold font-primary text-center">
            Drones Use Cutting Edge Technologies &
            <br />
            Products To Get The Best Results
          </h1>
          <p className="text-base font-extralight text-center">
            If you want a drone for shooting 4K videos on a budget, <br /> the
            next one was built just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 m-4 lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col lg:text-right">
              <div className="flex items-center justify-start lg:justify-end gap-x-2">
                <h3 className="text-sm font-semibold">AERIAL PHOTOGRAPHY</h3>
                <span>
                  <img
                    src={droneSvg1}
                    alt=""
                    className="h-8 w-8 object-cover"
                  />
                </span>
              </div>
              <p className="font-extralight italic">
                A drone is an unmanned aerial vehicle (UAV) that is fitted with
                various equipment including photography and videography leverage
                agile frameworks.
              </p>
            </div>
            <div className="flex flex-col text-left lg:text-right">
              <div className="flex items-center justify-start lg:justify-end gap-x-2">
                <h1 className="text-sm font-semibold">RESOLUTION</h1>
                <span>
                  <img
                    src={droneSvg2}
                    alt=""
                    className="h-8 w-8 object-cover"
                  />
                </span>
              </div>
              <p className="font-extralight italic">
                These devices can hover and maneuver above your event capturing
                images and video of not just individuals iterative approaches to
                corporate strategy.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={products1Url}
              alt=""
              className="h-auto w-75 lg:w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col text-left">
              <div className="flex items-center justify-start gap-x-2">
                <span>
                  <img
                    src={droneSvg3}
                    alt=""
                    className="h-8 w-8 object-cover"
                  />
                </span>
                <h1 className="text-sm font-semibold">PROPELLERS</h1>
              </div>
              <p className="font-extralight italic">
                Our drone event services provide you with a skilled UAV pilot
                that will provide drone event photography or good videography a
                robust synopsis for high level.
              </p>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center justify-start gap-x-2">
                <span>
                  <img
                    src={droneSvg4}
                    alt=""
                    className="h-8 w-8 object-cover"
                  />
                </span>
                <h1 className="text-sm font-semibold">POWERFUL & PORTABLE</h1>
              </div>
              <p className="font-extralight italic">
                Drone event videographers can record all the activities (in the
                water too) throughout the event and record from inaccessible
                foster collaborative proposition.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsSection;
