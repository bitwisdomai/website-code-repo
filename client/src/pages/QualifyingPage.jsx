import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import QualifyingHero from "../components/qualifying/QualifyingHero";
import QualifyingCustomers from "../components/qualifying/QualifyingCustomers";
import QualifyingClosing from "../components/qualifying/QualifyingClosing";
import Footer from "../components/landing/Footer";

const QualifyingPage = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <QualifyingHero />
      <QualifyingCustomers />
      <QualifyingClosing />
      <Footer />
    </div>
  );
};

export default QualifyingPage;
