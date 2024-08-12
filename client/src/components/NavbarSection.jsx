import droneSvg from "../assets/img/drone-svg.svg";
import { useEffect, useRef, useState } from "react";

const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside); // Listen for clicks outside

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 left-0 shadow-lg bg-indigo-900"
          : "absolute mt-20 bg-transparent"
      } w-full transition-all duration-700 z-20`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={droneSvg} className="h-16" alt="FPV Logo" />
          <span className="self-center text-4xl text-white font-primary italic font-semibold whitespace-nowraptext-white">
            FPV Company
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`${
              isMenuOpen ? "bg-indigo-900" : "bg-transparent"
            } font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-900 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0`}
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-indigo-500 rounded md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-indigo-500 md:hover:bg-transparent md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-indigo-500 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-indigo-500 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-indigo-500 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
