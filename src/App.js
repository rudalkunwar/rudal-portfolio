import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Skills/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
