import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyContent from "../components/privacy/PrivacyContent";
import Footer from "../components/landing/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <NavBar />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
