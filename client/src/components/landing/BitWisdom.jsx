import React from "react";

const BitWisdom = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300 mb-2 sm:mb-3 text-center font-orbitron px-2">
        Get to know BitWisdom AI Network
      </h1>
      <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-10 md:mb-12 text-center px-2">
        Explore tailored insights for potential customers in your region.
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-5 md:gap-6 max-w-5xl w-full px-2">
        {/* USA Card */}
        <div className="bg-neutral-900 rounded-md shadow-lg shadow-cyan-900/20 hover:shadow-cyan-400/30 transition transform hover:-translate-y-1 p-4 sm:p-5 md:p-6 md:w-1/2">
          <h2 className="text-cyan-400 font-semibold text-base sm:text-lg mb-2 sm:mb-3">
            USA Potential Customers Only
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
            Learn about exclusive licensing and opportunities available for
            customers in the United States.
          </p>
          <a
            href="#"
            className="text-cyan-400 text-xs sm:text-sm font-semibold hover:underline transition"
          >
            Learn more +
          </a>
        </div>

        {/* Global Card */}
        <div className="bg-neutral-900 rounded-md shadow-lg shadow-cyan-900/20 hover:shadow-cyan-400/30 transition transform hover:-translate-y-1 p-4 sm:p-5 md:p-6 md:w-1/2">
          <h2 className="text-cyan-400 font-semibold text-base sm:text-lg mb-2 sm:mb-3">
            Potential Customers in All Other Countries
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
            Discover how international businesses can join and license BitWisdom
            AI Network globally.
          </p>
          <a
            href="#"
            className="text-cyan-400 text-xs sm:text-sm font-semibold hover:underline transition"
          >
            Learn more +
          </a>
        </div>
      </div>
    </section>
  );
};

export default BitWisdom;
