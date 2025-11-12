import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const WhyRunNode = () => {
  const reasons = [
    {
      title: 'Over 7 Billion Crypto Holders Good Fortunes',
      description: 'Join a massive global community of crypto holders and benefit from the growing adoption of digital currencies worldwide.'
    },
    {
      title: 'Estimated Passive Income USD 50,000-200,000',
      description: 'Generate substantial passive income by running your crypto node. Average node operators earn between $50K to $200K annually.'
    },
    {
      title: '24/7 Bitcoin To Crypto Payment Of 2025 Arrive',
      description: 'Stay ahead with 24/7 automated Bitcoin and cryptocurrency payment processing capabilities for your business.'
    },
    {
      title: 'BTC Own 4 Millennium Plan to Keep Crypto for Payments In 2025',
      description: 'Be part of Bitcoin\'s long-term vision for sustainable cryptocurrency payment infrastructure that spans the millennium.'
    },
    {
      title: 'Save Your Merchants Mind with Every Transaction',
      description: 'Provide peace of mind to your merchants with secure, transparent, and efficient crypto transaction processing capabilities.'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Bitcoin Image */}
          <div className="relative order-2 lg:order-1">
            {/* Large Bitcoin Symbol */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] leading-none text-brand-primary opacity-80 font-bold">
                ₿
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-brand-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              Why run a crypto node in the Bitwisdom AI Network?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8">
              Be part of fast growing worldwide market, reduce transaction processing fees, earn passive merchant processing fees, and more.
            </p>

            {/* Reasons List */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-brand-primary text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base mb-1">{reason.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-[10px] sm:text-xs text-gray-500 mt-6 sm:mt-7 md:mt-8 italic">
              * This is not a total capital campaign, initial setup fees are required. Contact BW sales team for complete details about fee structure and revenue programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyRunNode
