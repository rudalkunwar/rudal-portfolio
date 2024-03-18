import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-500 to-blue-400 min-h-screen font-poppins"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 text-center">
        ABOUT ME
      </h2>
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-4">
            <div className="relative">
              <img
                src="images/rudalkunwar.jpg"
                alt="Rudal Kunwar"
                className="relative z-40 object-cover w-full h-96 rounded-lg md:rounded-tr-[80px] md:rounded-bl-[80px] md:px-4 md:py-4"
              />
              <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 md:block"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <h1 className="pl-2 text-3xl md:text-4xl font-bold border-l-8 border-blue-400 mb-6 px-4 py-2">
                Hi, I'm Rudal Kunwar
              </h1>
              <p className="mt-2 mb-6 text-lg leading-7 text-gray-900 px-4">
                I'm a Full Stack Developer passionate about creating amazing web
                applications and solving real-world problems using technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
