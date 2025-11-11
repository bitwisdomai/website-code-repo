import React from "react";
import Banner from "../components/landing/Banner";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import ProfitEstimator from "../components/landing/ProfitEstimator";
import Transformation from "../components/landing/Transformation";
import CryptoPayments from "../components/landing/CryptoPayments";
import GetToKnow from "../components/landing/GetToKnow";
import WhyRunNode from "../components/landing/WhyRunNode";
import ContactUs from "../components/landing/ContactUs";
import Footer from "../components/landing/Footer";
import FeaturesSection from "../components/landing/FeaturesSection";
import ProfitCalculator from "../components/landing/ProfitCalculator";
import PaymentTransition from "../components/landing/PaymentTransition";
import CryptoPaymentsSection from "../components/landing/CryptoPaymentsSection";
import BitWisdom from "../components/landing/BitWisdom";
import CryptoNodeSection from "../components/landing/CryptoNodeSection";
import ContactForm from "../components/landing/ContactForm";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Banner */}
      <Banner />
      <Hero />
    </div>
  );
};

export default HomePage;
