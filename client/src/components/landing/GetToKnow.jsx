import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const GetToKnow = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
          Get to know Bitwisdom AI Network
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {/* USA Registered Customers Card */}
          <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 border border-red-800 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8 hover:border-red-600 transition">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-red-400">
              USA Registered Customers Only
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6">
              Learn about exclusive business and opportunities available for USA registered customers and how you can get started with our platform.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition font-semibold text-sm sm:text-base">
              Learn more <FaArrowRight />
            </a>
          </div>

          {/* Potential Customers Card */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-800 rounded-lg p-5 sm:p-6 md:p-7 lg:p-8 hover:border-blue-600 transition">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">
              Potential Customers In 50 Other Countries
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6">
              Discover new international businesses you can join and expand your operations to serve our global network.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold text-sm sm:text-base">
              Learn more <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetToKnow
