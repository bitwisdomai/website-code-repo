import React from "react";
import rightImg from "../../assets/bitback.jpg";

const CryptoNodeSection = () => {
  return (
    <section
      className="relative bg-black text-white min-h-screen flex items-center justify-center px-8 py-18 pt-4 pb-16 overflow-hidden"
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
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row justify-end">
        <div className="md:w-1/2 w-full text-right md:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4 font-orbitron leading-snug">
            Why run a crypto node <br /> in the BitWisdom AI Network?
          </h1>

          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Tap into a fast-growing worldwide market, reduce merchant processing
            fees, and unlock a new revenue stream.
          </p>

          <ul className="space-y-6 text-gray-200">
            <li>
              <span className="text-cyan-400 font-semibold">
                💠 Over 1 Billion Crypto Holders (2025 Forecast)
              </span>
              <p className="text-gray-400 text-sm mt-1">
                The number of global crypto users has exploded — rising from
                250M to 1B in just a few years. Ignoring this customer base
                means leaving money on the table.
              </p>
            </li>

            <li>
              <span className="text-cyan-400 font-semibold">
                💠 $4.5 Billion in Crypto Payments (Q1 2025 Alone)
              </span>
              <p className="text-gray-400 text-sm mt-1">
                Businesses around the world are already embracing crypto. Don’t
                get left behind — stay ahead of your competition.
              </p>
            </li>

            <li>
              <span className="text-cyan-400 font-semibold">
                💠 40% of Gen Z & Millennials Plan to Use Crypto for Payments in
                2025
              </span>
              <p className="text-gray-400 text-sm mt-1">
                A massive shift in consumer behavior is underway. 1 in 10 say
                they’ll use crypto regularly for purchases.
              </p>
            </li>

            <li>
              <span className="text-cyan-400 font-semibold">
                💠 Save Your Merchants More with Every Transaction
              </span>
              <p className="text-gray-400 text-sm mt-1">
                Crypto transaction fees are 50–90% lower than traditional
                payment processors — a win-win for everyone with more profit
                straight to your merchant’s bottom line.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CryptoNodeSection;
