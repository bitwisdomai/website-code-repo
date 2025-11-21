import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import Footer from "../components/landing/Footer";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <NavBar />
      <TermsHero />
      <TermsContent />
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
