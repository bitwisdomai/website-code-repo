import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import AboutHero from "../components/about/AboutHero";
import AboutTeam from "../components/about/AboutTeam";
import AboutValues from "../components/about/AboutValues";
import AboutGoals from "../components/about/AboutGoals";
import Footer from "../components/landing/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <NavBar />
      <AboutHero />
      <AboutTeam />
      <AboutValues />
      <AboutGoals />
      <Footer />
    </div>
  );
};

export default AboutPage;
