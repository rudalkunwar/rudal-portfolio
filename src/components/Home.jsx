import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex justify-center items-center overflow-hidden"
      style={{ backgroundImage: `url(images/kuns.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 120 }}
        className="text-center z-10"
      >
        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">
          <span className="block">Welcome to the</span>
          <span className="block">Digital Universe!</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-white mt-6 text-lg md:text-xl cursor-pointer hover:text-blue-400"
          onClick={() => alert("Let's explore together!")}
        >
          Click here to explore
        </motion.p>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5, type: "spring", stiffness: 120 }}
        src="https://via.placeholder.com/400"
        alt="Illustration"
        className="absolute bottom-0 right-0 mb-8 mr-8 w-64 sm:w-96"
      />
    </div>
  );
}

export default Home;
