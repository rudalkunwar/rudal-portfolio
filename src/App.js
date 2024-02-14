import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import GoToTop from "./components/GoTop";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <GoToTop/>
    </div>
  );
}

export default App;
