import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import FAQHero from "../components/faq/FAQHero";
import FAQContent from "../components/faq/FAQContent";
import Footer from "../components/landing/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <NavBar />
      <FAQHero />
      <FAQContent />
      <Footer />
    </div>
  );
};

export default FAQPage;
