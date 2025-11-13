import React from "react";
import antiquatedImg from "../../assets/Group-112.png";
import phoneImg from "../../assets/newphone.png";
import shopifyImg from "../../assets/shopify.png";
import woocommerceImg from "../../assets/wocommerce.png";
import drupalImg from "../../assets/drupal.png";

const PaymentTransition = () => {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-center text-white bg-[#0E0E0E]">
      <div className="max-w-[1400px] w-full text-center">
        {/* Header with centered arrow */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Text labels with arrow in between */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-40 lg:gap-52 xl:gap-64">
            <div className="flex justify-center md:justify-end md:flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
                From Antiquated
              </h2>
            </div>

            {/* Arrow in the middle */}
            <div className="flex justify-center">
              <svg
                width="120"
                height="40"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-sky-400 w-16 h-6 sm:w-24 sm:h-8 md:w-32 md:h-10 lg:w-40 lg:h-12 xl:w-48 xl:h-14 transform rotate-90 md:rotate-0"
              >
                <path
                  d="M5 20H115M115 20L100 5M115 20L100 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex justify-center md:justify-start md:flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-white to-[#00f0ff] bg-clip-text text-transparent">
                To Innovative
              </h2>
            </div>
          </div>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-40 lg:gap-52 xl:gap-64 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start items-center md:mr-auto">
            <img
              src={antiquatedImg}
              alt="Old payment terminal"
              className="w-full max-w-[160px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[420px] h-auto drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 md:ml-auto">
            {/* Phone Image */}
            <div className="relative flex items-center justify-center">
              <img
                src={phoneImg}
                alt="Bitwisdom phone"
                className="w-full max-w-[140px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[320px] h-auto drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              />
            </div>

            {/* E-commerce Platforms */}
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
              <p
                className="text-sky-200 text-xs sm:text-sm md:text-base px-2 sm:px-0"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Also Supports Leading E-Commerce Platforms
              </p>

              {/* Platform Logos */}
              <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 px-2 sm:px-0">
                <img
                  src={shopifyImg}
                  alt="Shopify"
                  className="h-5 sm:h-6 md:h-8 lg:h-10 bg-white p-1 rounded"
                />
                <img
                  src={woocommerceImg}
                  alt="WooCommerce"
                  className="h-5 sm:h-6 md:h-8 lg:h-10 bg-white p-1 rounded"
                />
                <img
                  src={drupalImg}
                  alt="Drupal"
                  className="h-5 sm:h-6 md:h-8 lg:h-10 bg-white p-1 rounded"
                />
              </div>

              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm px-2 sm:px-0">
                *Our POS system is the core — eCommerce integrations are available
                as add-ons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTransition;
