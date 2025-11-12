import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFAQ from "../components/contact/ContactFAQ";
import Footer from "../components/landing/Footer";

const ContactPage = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
      <Footer />
    </div>
  );
};

export default ContactPage;
