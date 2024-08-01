import { FiArrowRight } from "react-icons/fi";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import servicesUrl from "../assets/img/services.png";
import aboutUrl from "../assets/img/about.jpg";
import { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const sectRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: sectRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);

  const targetRef = useRef(null);
  const isInView1 = useInView(targetRef, { once: true });

  return (
    <motion.div
      ref={sectRef}
      style={{ scale }}
      className="max-w-6xl mx-auto h-[200vh] lg:h-[270vh] pt-[10vh] lg:pt-[20vh] p-4"
    >
      <div className="border border-neutral-500 divide-y divide-neutral-500 lg:rounded-br-[50px] rounded-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-neutral-500 h-[80vh] lg:h-[100vh] w-full">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={
              isInView
                ? { opacity: 1, x: [-50, 50, 0], y: [0] }
                : { opacity: 0, y: -20 }
            }
            transition={{ duration: 5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center py-6"
          >
            <h1 className="mb-2 text-4xl font-bold font-primary text-orange-500 lg:text-7xl text-center">
              Our Services
            </h1>
            <h3 className="text-xl lg:mb-4 lg:text-3xl font-primary text-white text-center">
              Transforming the Future of Flight
            </h3>
            <div className="px-3 font-secondary text-white text-justify py-3">
              <p className="mb-2">
                At [Your Drone Company], we are at the forefront of drone
                technology, offering a wide range of services that cater to
                various industries. Our innovative solutions are designed to
                enhance efficiency, safety, and productivity. Explore our
                services to see how we can help you achieve your goals.
              </p>
              <p className="font-medium">Our Key Services Include:</p>
              <ul className="list-disc list-inside mb-2">
                <li>Aerial Photography and Videograph</li>
                <li>Surveying and Mapping</li>
                <li>Inspection and Monitoring</li>
                <li>Delivery Services</li>
                <li>Emergency Response</li>
              </ul>
              <p>
                Our cutting-edge drone services are designed to provide
                unparalleled value across multiple sectors. Whether you need
                breathtaking visuals, precise data collection, or efficient
                delivery solutions, we have the expertise and technology to meet
                your needs. Partner with us to experience the future of flight
                today.
              </p>
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="group flex mt-2 text-base w-fit items-center justify-center gap-1.5 rounded-full bg-orange-500 px-4 py-2 text-gray-50 transition-colors hover:bg-orange-700 uppercase"
            >
              More Info
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </motion.div>
          <div className="lg:flex items-center justify-center hidden">
            <motion.img
              animate={{ y: [20, -20] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              src={servicesUrl}
              alt="services"
              className="w-full h-auto lg:w-3/4 lg:h-3/4"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-neutral-500 h-[20vh] lg:h-[30vh] w-full">
          <div className="flex items-center justify-center">Content 1</div>
          <div className="flex items-center justify-center">Content 2</div>
          <div className="flex items-center justify-center">Content 3</div>
          <div className="flex items-center justify-center">Content 4</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-neutral-500 h-[80vh] lg:h-[100vh] w-full">
          <motion.div
            ref={targetRef}
            initial={{ opacity: 0, y: -20 }}
            animate={
              isInView1
                ? { opacity: 1, x: [30, -50, 0], y: [0] }
                : { opacity: 0, y: -20 }
            }
            transition={{ duration: 5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center py-6 px-2"
          >
            <h1 className="mb-2 text-4xl font-bold font-primary text-orange-500 lg:text-7xl text-center">
              About Us
            </h1>
            <h3 className="text-xl lg:mb-4 lg:text-3xl font-primary text-white text-center">
              Leading the Way in Drone Technology
            </h3>
            <div className="px-5 font-secondary text-white text-justify py-3">
              <p>
                At [Your Drone Company], we are pioneers in drone technology,
                committed to revolutionizing the way industries operate. Our
                passion for innovation drives us to develop cutting-edge drone
                solutions that enhance efficiency, safety, and productivity.
              </p>
              <p className="mt-3">
                We pride ourselves on delivering exceptional services across
                various sectors, including aerial photography, surveying,
                inspection, and delivery. Our dedicated team of experts ensures
                that every project is executed with precision and excellence.
                Partner with us and experience the future of flight today.
              </p>
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.8,
              }}
              className="group flex mt-5 text-base w-fit items-center justify-center gap-1.5 rounded-full bg-gray-500 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-700 uppercase"
            >
              Learn More
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </motion.div>
          <div className="hidden lg:flex items-center justify-center overflow-hidden rounded-[50px] mt-4 lg:mt-0">
            <img
              src={aboutUrl}
              alt="about-us"
              className="rounded-[50px] lg:rounded-br-3xl mt-4 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
