/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import contacts1Url from "../assets/img/hero_inner_02.jpg";
import { useRef, useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { MdEmail, MdOutgoingMail } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

const ContactUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [errData, setErrData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value.trim(),
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData || !formData.userName) {
      errors.userName = "Your name is required.";
    }
    if (!formData || !formData.userEmail) {
      errors.userEmail = "Your email is required.";
    }
    if (!formData || !formData.userMessage) {
      errors.userMessage = "Your message is required.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrData(errors);
      return;
    }

    try {
      setLoading(true);
      // Prepare email parameters
      const templateParams = {
        userName: formData.userName,
        userEmail: formData.userEmail,
        userMessage: formData.userMessage,
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      );

      // Reset form and show success message
      setFormData({
        userName: "",
        userEmail: "",
        userMessage: "",
      });
      setErrData(null);
      toast.success("Your message has been sent successfully!");
      setLoading(false);
    } catch (error) {
      setErrData(error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div
      className="h-[120vh] bg-fixed bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${contacts1Url})` }}
    >
      <motion.div
        ref={ref}
        style={{ scale }}
        initial={{ opacity: 0, y: 200 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 2, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        exit={{ opacity: 0, y: -200 }}
        className="max-w-4xl mx-auto h-screen px-4"
      >
        <h1 className="text-4xl text-center font-bold font-primary text-orange-500 md:text-7xl mb-8">
          Contact Us
        </h1>
        <div className="border border-neutral-500 rounded-[50px] lg:rounded-br-[70px] bg-blue-500 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] w-full">
            <div className="flex flex-col items-center justify-center p-4 lg:p-8">
              <h1 className="text-2xl font-bold font-primary text-orange-500 lg:text-4xl text-center mb-4">
                Company Contact Details
              </h1>
              <div className="grid grid-cols-2 space-x-3 mb-4">
                <div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <span className="text-3xl">
                      <IoMdMailOpen />
                    </span>
                    <h3 className="text-base font-semibold">Email</h3>
                  </div>
                  <p className="text-sm italic">contact@bold-themes.com</p>
                  <p className="text-sm italic">info@bold-themes.com</p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <span className="text-3xl">
                      <IoLocationOutline />
                    </span>
                    <h3 className="text-base font-semibold font-primary">
                      Address
                    </h3>
                  </div>
                  <p className="text-sm italic">300 E North Water St,</p>
                  <p className="text-sm italic">Chicago, USA</p>
                </div>
              </div>
              <div className="grid grid-cols-2 space-x-3 -ml-8">
                <div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <span className="text-3xl">
                      <FaRegClock />
                    </span>
                    <h3 className="text-base font-semibold font-primary">
                      Working Hours
                    </h3>
                  </div>
                  <p className="text-sm italic">Mon-Sat: 09AM - 08PM</p>
                  <p className="text-sm italic">Sun: Closed</p>
                </div>
                <div>
                  <div className="flex items-center gap-x-2 mb-2">
                    <span className="text-3xl">
                      <MdOutlinePhoneAndroid />
                    </span>
                    <h3 className="text-base font-semibold font-primary">
                      Phone
                    </h3>
                  </div>
                  <p className="text-sm italic">+99 1478 789 25</p>
                  <p className="text-sm italic">+99 1478 789 25</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="p-4 lg:p-8 rounded-[50px] lg:rounded-0 lg:rounded-br-[70px] flex flex-col md:justify-center md:items-center mg::gap-y-4 md:h-full w-full"
              >
                <div className="px-4 p-2">
                  <div className="w-full mb-5">
                    <div className="relative">
                      <input
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="Enter your Name"
                        className="peer pt-[0.65rem] pb-[0.4rem] px-10 bg-transparent border-2 rounded-md placeholder-shown:border-gray-400 placeholder:text-gray-500 text-white focus:outline-none w-full focus:text-white focus:border-white"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                      <FormIcon name="user" />
                    </div>
                    {errData?.userName && (
                      <p className="text-red-500">{errData.userName}</p>
                    )}
                  </div>
                  <div className="w-full mb-5">
                    <div className="relative">
                      <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        placeholder="Enter your Email"
                        className="peer pt-[0.65rem] pb-[0.4rem] px-10 bg-transparent border-2 rounded-md placeholder-shown:border-gray-400 placeholder:text-gray-500 text-white focus:outline-none w-full focus:text-white focus:border-white"
                        value={formData.userEmail}
                        onChange={handleChange}
                      />
                      <FormIcon name="gmail" />
                    </div>
                    {errData?.userEmail && (
                      <p className="text-red-500">{errData.userEmail}</p>
                    )}
                  </div>
                  <div className="w-full mb-5">
                    <div className="relative">
                      <textarea
                        name="userMessage"
                        id="userMessage"
                        placeholder="Enter message"
                        rows="5"
                        className="peer pt-[0.65rem] pb-[0.4rem] px-10 bg-transparent border-2 rounded-md placeholder-shown:border-gray-400 placeholder:text-gray-500 text-white focus:outline-none w-full focus:text-white focus:border-white"
                        value={formData.userMessage}
                        onChange={handleChange}
                      />
                      <FormIcon name="chat" />
                    </div>
                    {errData?.userMessage && (
                      <p className="text-red-500">{errData.userMessage}</p>
                    )}
                  </div>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="hover:text-blue-800 flex items-center justify-center group text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md font-semibold px-12 py-2 hover:scale-[1.02] duration-500"
                >
                  {loading ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-gray-200 animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        />
                      </svg>
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : (
                    <>
                      Let's Connect
                      <span className="scale-0 -translate-x-10 origin-left group-hover:scale-100 group-hover:translate-x-3 duration-300 transition-all delay-200 ease-in-out">
                        <MdOutgoingMail />
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FormIcon = ({ name }) => {
  return (
    <span
      className={`peer-placeholder-shown:grayscale peer-focus:grayscale-0 peer-active:grayscale-0 absolute left-3 ${
        name === "chat" ? "top-[0.8rem]" : "top-1/2 -translate-y-1/2"
      }`}
    >
      {name === "user" && <FaUser color="#5EEAC3" />}
      {name === "gmail" && <MdEmail color="red" />}
      {name === "chat" && <IoChatboxEllipses color="blue" />}
    </span>
  );
};

export default ContactUsSection;
