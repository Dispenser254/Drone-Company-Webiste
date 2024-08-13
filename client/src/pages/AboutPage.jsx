import videoUrl from "../assets/video/about.mp4";
import FooterSection from "../components/FooterSection";
import { PiDroneDuotone } from "react-icons/pi";
import { BiPodcast } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import aboutUrl from "../assets/img/about.jpg";
import team1 from "../assets/img/team_01.jpg";
import team2 from "../assets/img/team_02.jpg";
import team3 from "../assets/img/team_03.jpg";
import team4 from "../assets/img/team_04.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetRef = useRef(null);
  const isInView1 = useInView(targetRef, { once: true });
  return (
    <div className="bg-indigo-900">
      <div className="relative h-[75vh]">
        <div className="sticky overflow-hidden h-full">
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
        <div className="absolute inset-0 bg-neutral-950/80" />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5, type: "spring", delay: 0.5 }}
          className="h-[75vh] max-w-4xl mx-auto absolute z-10 flex flex-col items-start justify-end top-0 left-0 p-4"
        >
          <h1 className="text-4xl font-bold font-primary text-orange-500 md:text-7xl mb-6">
            About <span className="underline">FPV</span> Company
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 font-secondary font-light">
            At FPV, we provide professional aerial filming and photography
            services, as well as full post production services for all manner of
            aerial applications.
          </p>
        </motion.div>
      </div>
      <div className="bg-neutral-100 h-[170vh] md:h-[120vh] grid grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden">
          <img src={aboutUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{
            duration: 2,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5,
          }}
          exit={{ opacity: 0, y: -200 }}
          className="flex flex-col justify-center gap-y-6 px-4"
        >
          <h1 className="text-base font-bold">AERIAL PHOTOGRAPHY</h1>
          <h3 className="font-bold font-primary text-orange-500 text-3xl md:text-5xl">
            We Are Drone Pilots
          </h3>
          <p className="text-xl md:text-2xl text-black mb-10 font-secondary font-light">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex flex-col">
              <div className="flex items-center justify-start gap-x-2">
                <span>
                  <PiDroneDuotone className="h-8 w-8" />
                </span>
                <h3 className="text-sm font-semibold">AWARDS</h3>
              </div>
              <p className="font-extralight italic">
                A drone is an unmanned aerial vehicle (UAV) that is fitted with
                various equipment including photography.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-start gap-x-2">
                <span>
                  <BiPodcast className="h-8 w-8" />
                </span>
                <h3 className="text-sm font-semibold">FAST CREW</h3>
              </div>
              <p className="font-extralight italic">
                Our drone services provide you with a skilled UAV pilot that
                will provide drone videography.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-start gap-x-2">
                <span>
                  <GrGamepad className="h-8 w-8" />
                </span>
                <h3 className="text-sm font-semibold">LICENSE</h3>
              </div>
              <p className="font-extralight italic">
                Professionally cultivate one-to-one customer service with robust
                ideas dynamically innovate.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-start gap-x-2">
                <span>
                  <IoBriefcaseOutline className="h-8 w-8" />
                </span>
                <h3 className="text-sm font-semibold">EXPERIENCE</h3>
              </div>
              <p className="font-extralight italic">
                Engage worldwide methodologies with web-enabled technology.
                Interactively coordinate proactive.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-white h-[150vh] md:h-[120vh] flex flex-col items-center justify-center">
        <motion.div
          ref={targetRef}
          initial={{ opacity: 0, y: 200 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{
            duration: 2,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5,
          }}
          exit={{ opacity: 0, y: -200 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="font-bold font-secondary md:text-xl mb-4">
            AERIAL PHOTOGRAPHY
          </h1>
          <h3 className="text-3xl font-bold font-primary text-orange-500 md:text-5xl mb-6">
            Our Dedicated Team
          </h3>
          <div className="flex flex-col overflow-hidden md:flex-row items-center justify-center gap-y-8 md:gap-y-0 md:gap-x-4 px-8">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={team1}
                  alt=""
                  className="h-40 w-40 md:h-60 md:w-60 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <span className="text-xs font-bold">PILOT</span>
                <h1 className="text-2xl">Staephan HUMBERT</h1>
                <p className="md:text-base text-black text-center font-secondary font-light">
                  Experienced photographer, videographer, film editor and
                  responsible pilot.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={team2}
                  alt=""
                  className="h-40 w-40 md:h-60 md:w-60 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <span className="text-xs font-bold">PHOTOGRAPHER</span>
                <h1 className="text-2xl">Jack KOWALSKI</h1>
                <p className="md:text-base text-black text-center font-secondary font-light">
                  Ten years of flying experience. Affordable UAV services for
                  aerial drone inspections.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={team3}
                  alt=""
                  className="h-40 w-40 md:h-60 md:w-60 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <span className="text-xs font-bold">PILOT</span>
                <h1 className="text-2xl">Leo SIMON</h1>
                <p className="md:text-base text-black text-center font-secondary font-light">
                  Licensed 107 and 33 exempt drone operator with more than five
                  years flying experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src={team4}
                  alt=""
                  className="h-40 w-40 md:h-60 md:w-60 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <span className="text-xs font-bold">PILOT</span>
                <h1 className="text-2xl">Thomas PERMUTT</h1>
                <p className="md:text-base text-black text-center font-secondary font-light">
                  Professional photojournalist for the local CBS affiliate &
                  recently freelance drone pilot.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
