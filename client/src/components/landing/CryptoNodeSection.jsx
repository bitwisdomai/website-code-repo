import React from "react";
import rightImg from "../../assets/bitback.jpg";

const CryptoNodeSection = () => {
  return (
    <section
      className="relative bg-black text-white min-h-[600px] sm:min-h-[700px] md:min-h-screen flex items-center justify-center md:justify-end px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${rightImg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Slightly lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-black/40"></div>

      {/* Content aligned to the right */}
      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 xl:w-5/12 text-center md:text-right">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-snug">
          <div className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
            Why run a crypto node
          </div>
          <div className="bg-gradient-to-b from-white to-[#00f0ff] bg-clip-text text-transparent">
            in the BitWisdom AI Network?
          </div>
        </h1>

        <p className="text-gray-300 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg">
          Tap into a fast-growing worldwide market, reduce merchant processing
          fees, and unlock a new revenue stream.
        </p>

        <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-200 text-left md:text-right">
          <li>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-base">
              💠 Over 2 Billion Crypto Holders (2026 Forecast)
            </span>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              The number of worldwide crypto users has exploded — rising from
              250M to 2B in just a few years. Ignoring this customer base means
              leaving money on the table.
            </p>
          </li>

          <li>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-base">
              💠 $225 Billion in Crypto Payments (Q3 2025 Alone)
            </span>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Businesses around the world are already embracing crypto. Don't
              get left behind — stay ahead of your competition.
            </p>
          </li>

          <li>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-base">
              💠 70% of Gen Z & Millennials Plan to Use Crypto for Payments in
              2026
            </span>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              A massive shift in consumer behavior is underway. 1 in 4 say
              they'll use crypto regularly for purchases.
            </p>
          </li>

          <li>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm md:text-base">
              💠 Save Your Merchants More with Every Transaction
            </span>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Crypto transaction fees are 50–90% lower than traditional payment
              processors — a win-win for everyone with more profit straight to
              your merchant's bottom line.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CryptoNodeSection;
