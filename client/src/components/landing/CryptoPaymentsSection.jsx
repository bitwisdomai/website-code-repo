import React from "react";
import backgroundImg from "../../assets/backgroundhand.jpg";
import rightImg from "../../assets/newphone.png";

const CryptoPaymentsSection = () => {
  return (
    <section
      className="relative text-white py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-[4px]"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 space-y-6">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "#A5F3FC",
              textShadow: "0px 0px 10px #38BDF8",
            }}
          >
            Accept and Optimize <br /> Crypto Payments
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-lg">
            Leverage the leading crypto payment gateway of 2025, trusted and
            ranked by Forbes.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="text-sky-400 text-lg">✔</span>
              Support for 300+ cryptocurrencies and 75+ fiat currencies
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 text-lg">✔</span>
              Lowest market commission: just 0.5%
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 text-lg">✔</span>
              Handle up to 1,000 transactions simultaneously
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 text-lg">✔</span>
              Seamless fiat-to-crypto and crypto-to-fiat conversions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 text-lg">✔</span>
              Automatic coin conversion at competitive rates
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 text-lg">✔</span>
              24/7 dedicated support
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md transition shadow-lg">
              Get Expert Consultation
            </button>
            <button className="border border-sky-400 text-sky-300 hover:bg-sky-400 hover:text-white font-semibold px-6 py-3 rounded-md transition">
              Create Your Account
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={rightImg}
            alt="Crypto Payment Terminal"
            className="w-[900px] md:w-[720px] drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoPaymentsSection;
