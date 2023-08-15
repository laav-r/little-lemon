import React from "react";
import MainHeroSection from "../MainHeroSection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Main() {
  return (
    <main>
      <MainHeroSection />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
