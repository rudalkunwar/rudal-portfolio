import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Technology Used</h2>
            <ul className="text-gray-600">
              <li>
                <Link
                  to="https://react.dev/"
                  className="text-blue-500 hover:underline"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  to="https://tailwindcss.com"
                  className="text-blue-500 hover:underline"
                >
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
            <ul className="text-gray-600">
              <li>
                <Link
                  to="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <BsGithub />
                  <span>Github</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <BsLinkedin />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <BsInstagram />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <BsTwitter />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <BsFacebook />
                  <span>Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-gray-600 mb-4 sm:mb-0">© Rudalkunwar 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
