import React from "react";

const BitWisdom = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-center px-2">
        <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
          Get to know BitWisdom AI Network
        </span>
      </h1>
      <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-10 sm:mb-12 md:mb-16 text-center px-2">
        Explore tailored insights for Qualifying BitWisdom Customers
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-[1500px] px-2">
        {/* USA Card */}
        <div className="bg-neutral-900 rounded-md shadow-lg shadow-cyan-900/20 hover:shadow-cyan-400/30 transition transform hover:-translate-y-1 p-6 sm:p-8 md:p-10 flex-1">
          <h2 className="text-cyan-400 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            USA Potential Customers Only
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
            Learn about exclusive licensing and opportunities available for
            customers in the United States.
          </p>
          <a
            href="#"
            className="text-cyan-400 text-xs sm:text-sm md:text-base font-semibold hover:underline transition"
          >
            Learn more +
          </a>
        </div>

        {/* Global Card */}
        <div className="bg-neutral-900 rounded-md shadow-lg shadow-cyan-900/20 hover:shadow-cyan-400/30 transition transform hover:-translate-y-1 p-6 sm:p-8 md:p-10 flex-1">
          <h2 className="text-cyan-400 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
            Potential Customers in All Other Countries
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
            Learn the benefits of joining BitWisdom AI Network as a business in
            any other part of the world.
          </p>
          <a
            href="#"
            className="text-cyan-400 text-xs sm:text-sm md:text-base font-semibold hover:underline transition"
          >
            Learn more +
          </a>
        </div>
      </div>
    </section>
  );
};

export default BitWisdom;
