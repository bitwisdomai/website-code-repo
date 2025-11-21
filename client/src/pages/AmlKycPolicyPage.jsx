import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import AmlKycHero from "../components/amlkyc/AmlKycHero";
import AmlKycContent from "../components/amlkyc/AmlKycContent";
import Footer from "../components/landing/Footer";

const AmlKycPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <NavBar />
      <AmlKycHero />
      <AmlKycContent />
      <Footer />
    </div>
  );
};

export default AmlKycPolicyPage;
