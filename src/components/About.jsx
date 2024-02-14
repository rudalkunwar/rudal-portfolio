import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-400 h-screen">
      <h2 className="text-center pt-10 text-4xl md:text-6xl font-bold text-black mb-8">
        ABOUT ME
      </h2>
      <div className="container mx-auto flex items-center justify-center">
        <div className="rounded-lg shadow-lg bg-white overflow-hidden flex md:flex-row flex-col w-full md:w-3/4 lg:w-1/2">
          <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-b from-purple-500 to-purple-600">
            <h1 className="text-3xl md:text-4xl text-white font-semibold mb-6">
              Hi, I'm Rudal Kunwar
            </h1>
            <p className="text-lg text-gray-200">
              I'm a Full Stack Developer passionate about creating amazing web
              applications and solving real-world problems using technology.
            </p>
            <p className="text-lg text-gray-200 mt-4">
              Let's build something awesome together!
            </p>
          </div>
          <div
            className="md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('images/rudalkunwar.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
