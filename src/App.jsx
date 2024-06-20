import React from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
