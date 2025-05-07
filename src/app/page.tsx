import React from "react";
import HeroSection from "../../component/HeroSection";
import AboutMe from "../../component/About";
import SkillsTools from "../../component/Skill";
import Projecjs from "../../component/Projecjs";
import Footer from "../../component/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutMe />
      <SkillsTools />
      <Projecjs />
      <Footer/>
    </React.Fragment>
  );
}
