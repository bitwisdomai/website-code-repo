import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import LicenseHero from "../components/license/LicenseHero";
import LicenseContent from "../components/license/LicenseContent";
import Footer from "../components/landing/Footer";

const LicenseAgreementPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <NavBar />
      <LicenseHero />
      <LicenseContent />
      <Footer />
    </div>
  );
};

export default LicenseAgreementPage;
