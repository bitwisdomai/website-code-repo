import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Transformation = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">From Antiquated</h2>
          <FaArrowRight className="text-brand-primary text-xl sm:text-2xl md:text-3xl transform rotate-90 sm:rotate-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">To Innovative</h2>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Old Method */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-800 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
              {/* Placeholder for credit card machine image */}
              <div className="text-4xl sm:text-5xl md:text-6xl">💳</div>
            </div>
            <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base px-2">
              Traditional payment terminals with high fees and limited accessibility
            </p>
          </div>

          {/* Right Side - New Method */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6 border-2 border-brand-primary">
              {/* Placeholder for crypto payment image */}
              <div className="text-4xl sm:text-5xl md:text-6xl">₿</div>
            </div>
            <div className="text-center px-2">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                New Blueprint by Launching E-Commerce Businesses
              </h3>
              <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                <span className="bg-gray-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded text-[10px] sm:text-xs md:text-sm">Shopify</span>
                <span className="bg-gray-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded text-[10px] sm:text-xs md:text-sm">WooCommerce</span>
                <span className="bg-gray-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded text-[10px] sm:text-xs md:text-sm">Magento</span>
                <span className="bg-gray-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded text-[10px] sm:text-xs md:text-sm">BigCommerce</span>
                <span className="bg-gray-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded text-[10px] sm:text-xs md:text-sm">PrestaShop</span>
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-3 sm:mt-4">
                *Use the platform that best fits your business or explore this innovative marketplace!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transformation
