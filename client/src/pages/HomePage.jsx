import React from "react";
import Banner from "../components/landing/Banner";
import Hero from "../components/landing/Hero";
import FeaturesSection from "../components/landing/FeaturesSection";
import ProfitCalculator from "../components/landing/ProfitCalculator";
import PaymentTransition from "../components/landing/PaymentTransition";
import CryptoPaymentsSection from "../components/landing/CryptoPaymentsSection";
import BitWisdom from "../components/landing/BitWisdom";
import CryptoNodeSection from "../components/landing/CryptoNodeSection";
import ContactForm from "../components/landing/ContactForm";
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Banner */}
      <Banner />
      {/* <Hero /> */}
      <FeaturesSection />
      <ProfitCalculator />
      <PaymentTransition />
      <CryptoPaymentsSection />
      <BitWisdom />
      <CryptoNodeSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;
