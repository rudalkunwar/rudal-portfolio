import React from "react";

function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center filter grayscale flex justify-center items-center"
      style={{ backgroundImage: `url(images/kuns.jpg)` }}
    >
      <div className="lg:w-2/3 mt-10 text-center mx-auto">
        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">
          Welcome to the Digital Universe!
          {/* <span className="text-white"><br/>I'm Rudal</span> */}
        </h1>
      </div>
    </div>
  );
}

export default Home;
