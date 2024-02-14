import React from "react";
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill } from "react-icons/ri";
import { FaLaravel, FaPhp, FaWordpress } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import MERN from "./MERN";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description:
        "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
      icon: <RiHtml5Fill size={40} />,
    },
    {
      title: "CSS",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML.",
      icon: <RiCss3Fill size={40} />,
    },
    {
      title: "JavaScript",
      description:
        "JavaScript is a programming language that enables interactive web pages and is an essential part of web development.",
      icon: <RiJavascriptFill size={40} />,
    },
    {
      title: "PHP",
      description:
        "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.",
      icon: <FaPhp size={40} />,
    },
    {
      title: "Laravel",
      description:
        "Laravel is a PHP framework for web artisans, providing expressive and elegant syntax while building web applications.",
      icon: <FaLaravel size={40} />,
    },
    {
      title: "MERN Stack",
      description:
        "The MERN stack is a JavaScript stack used for building full-stack web applications, consisting of MongoDB, Express.js, React.js, and Node.js.",
      icon: <MERN />, // Replace YourMERNStackIconComponent with the actual MERN Stack icon component
    },
    {
      title: "Tailwind CSS",
      description: "Tailwind CSS is a utility-first CSS framework.",
      icon: <SiTailwindcss size={40} />,
    },
    {
      title: "MySQL",
      description:
        "MySQL is an open-source relational database management system.",
      icon: <SiMysql size={40} />, // Replace YourMySQLIconComponent with the actual MySQL icon component
    },
    {
      title: "WordPress",
      description:
        "WordPress is a free and open-source content management system.",
      icon: <FaWordpress size={40} />, // Replace YourWordPressIconComponent with the actual WordPress icon component
    },
  ];

  return (
    <div className="py-8 bg-gray-100" id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
          MY SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 my-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
