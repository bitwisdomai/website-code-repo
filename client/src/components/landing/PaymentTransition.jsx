import React from "react";
import antiquatedImg from "../../assets/Group-112.png";
import phoneImg from "../../assets/phone.png";
// import bitcoinCoins from "../../assets/bitcoin-coins.png"; // Optional: or include in same image as phone

const PaymentTransition = () => {
  return (
    <section
      className="relative py-20 px-6 flex items-center justify-center text-white"
      style={{
        backgroundColor: "#111827",
        backgroundImage:
          "radial-gradient(circle at top, #1a1a2e 0%, #0c0c18 90%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-6 mb-12 flex-wrap">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "#A5F3FC",
              textShadow: "0 0 8px #38BDF8",
            }}
          >
            From Antiquated
          </h2>

          {/* Arrow */}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-sky-400"
          >
            <path
              d="M5 20H75M75 20L60 5M75 20L60 35"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "#A5F3FC",
              textShadow: "0 0 8px #38BDF8",
            }}
          >
            To Innovative
          </h2>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={antiquatedImg}
              alt="Old payment terminal"
              className="w-[320px] md:w-[380px] drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Phone Image */}
            <div className="relative flex items-center justify-center mb-8">
              <img
                src={phoneImg}
                alt="Bitwisdom phone"
                className="w-[350px] md:w-[250px] drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              />
            </div>

            {/* E-commerce Platforms */}
            <p
              className="text-sky-200 text-sm md:text-base mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Also Supports Leading E-Commerce Platforms
            </p>

            {/* Platform Logos */}
            <div className="flex flex-wrap justify-center gap-3 mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Magento_Logo.svg"
                alt="Magento"
                className="h-8 bg-white p-1 rounded"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c5/WooCommerce_logo.svg"
                alt="WooCommerce"
                className="h-8 bg-white p-1 rounded"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
                alt="Shopify"
                className="h-8 bg-white p-1 rounded"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/PrestaShop_Logo.svg"
                alt="PrestaShop"
                className="h-8 bg-white p-1 rounded"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Drupal_wordmark.svg"
                alt="Drupal"
                className="h-8 bg-white p-1 rounded"
              />
            </div>

            <p className="text-gray-400 text-xs">
              *Our POS system is the core — eCommerce integrations are available
              as add-ons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTransition;
