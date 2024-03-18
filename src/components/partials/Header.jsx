import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  RiHome2Fill,
  RiUserFill,
  RiFileList2Fill,
  RiContactsFill,
  RiDownload2Fill,
} from "react-icons/ri";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/cv/Rudal_kunwar_CV.pdf"; // Replace with the path to your PDF file
    anchor.download = "Rudal-cv.pdf"; // Specify the filename for the downloaded file
    anchor.click();
  };

  return (
    <header className="pb-6 bg-white lg:pb-0 fixed top-0 w-full z-50 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <b>RudalKunwar</b>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              className="text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              <RiHome2Fill className="inline-block mr-1" /> Home
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              <RiUserFill className="inline-block mr-1" /> About
            </Link>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              <RiFileList2Fill className="inline-block mr-1" /> My Skills
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              <RiContactsFill className="inline-block mr-1" /> Contact
            </Link>
          </div>

          <button
            onClick={handleDownload}
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base cursor-pointer font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
          >
            <RiDownload2Fill className="inline-block mr-1" /> Download CV
          </button>
        </nav>

        {/* xs to lg */}
        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex py-2 text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                <RiHome2Fill className="inline-block mr-1" /> Home
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex py-2 text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                <RiUserFill className="inline-block mr-1" /> About
              </Link>

              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex py-2 text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                <RiFileList2Fill className="inline-block mr-1" /> My Skills
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex py-2 text-base cursor-pointer font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                <RiContactsFill className="inline-block mr-1" /> Contact
              </Link>
            </div>
          </div>

          <div className="px-6 mt-6">
            <button
              onClick={handleDownload}
              className="inline-flex justify-center px-4 py-3 text-base cursor-pointer font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
            >
              <RiDownload2Fill className="inline-block mr-1 mt-2" /> Download CV
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
