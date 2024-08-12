import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import footerUrl from "../assets/img/slogan.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.footer
      ref={targetRef}
      style={{ scale, opacity }}
      className="border-t rounded-t-[50px] bg-indigo-950/50"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img
                src={footerUrl}
                className="h-24 lg:h-40  me-3"
                alt="FPV Logo"
              />
              <span className="text-2xl font-semibold font-primary italic text-orange-500 md:text-4xl text-center">
                Drone Company
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-500 font-medium py-2">
                <li>
                  <a href="" className="hover:underline hover:text-gray-100">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline hover:text-gray-100">
                    Services
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline hover:text-gray-100">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline hover:text-gray-100">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium py-2">
                <li>
                  <a href="" className="hover:underline hover:text-gray-100">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline hover:text-gray-100">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium py-2">
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-gray-100">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <a href="" className="hover:underline">
              FrodenZ Labs
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-100">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-100">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-100">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-100">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
