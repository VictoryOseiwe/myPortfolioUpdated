import React from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
