import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header id="home" className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-between font-sans text-black bg-gray-300">
      <div className="mx-5 md:mx-20 flex flex-col md:flex-row items-center">
        <div className="md:mr-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">Hello, I'm Rudal Kunwar</h1>
          <p className="text-lg md:text-xl">Fullstack Web Developer</p>
          <div className="py-5">
            <ul className="flex gap-5">
              <li>
                <Link to="https://github.com/rudalkunwar/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-500">
                  <BsGithub size={20} />
                </Link>
              </li>
              <li>
                <Link to="https://np.linkedin.com/in/rudal-kunwar-4561bb260" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-500">
                  <BsLinkedin size={20} />
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center text-gray-600 hover:text-blue-500">
                  <BsInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center text-gray-600 hover:text-blue-500">
                  <BsTwitter size={20} />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/kuns.ruzal" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-500">
                  <BsFacebook size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-96 mt-12 md:mt-0 md:h-auto">
            <img
              // src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29ranhlanJ1MHphb2x3Nmp1OXA3bDBxemw4ajZ6Zm5kcHBsYnAweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VgGpnYeMVljm1vRA6g/giphy.gif"
              alt="goofyluffy"
              src="https://media.tenor.com/UTxKJNlZilwAAAAi/luffy-monkey-d-luffy.gif"
              className="object-cover object-center w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
