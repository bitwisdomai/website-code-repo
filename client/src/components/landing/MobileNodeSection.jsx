import React from "react";
import nodeMobileImg from "../../assets/Nodemobile.png";

const MobileNodeSection = () => {
  return (
    <>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(-3px, -3px) rotate(-1deg); }
          20% { transform: translate(3px, 2px) rotate(1deg); }
          30% { transform: translate(-2px, 3px) rotate(-0.5deg); }
          40% { transform: translate(2px, -2px) rotate(0.5deg); }
          50% { transform: translate(-3px, 2px) rotate(-1deg); }
          60% { transform: translate(3px, -3px) rotate(1deg); }
          70% { transform: translate(-2px, -2px) rotate(-0.5deg); }
          80% { transform: translate(2px, 3px) rotate(0.5deg); }
          90% { transform: translate(-3px, -2px) rotate(-1deg); }
        }
        .shake-animation {
          animation: shake 4s ease-in-out infinite;
        }
      `}</style>
      <section className="relative bg-black text-white py-10 sm:py-14 md:py-18 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img
              src={nodeMobileImg}
              alt="Mobile Phone Crypto Node"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] h-auto drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] shake-animation"
            />
          </div>

        {/* Right Side - Content */}
        <div className="z-10 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <div className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
              Introducing the Mobile Phone
            </div>
            <div className="bg-gradient-to-b from-white to-[#00f0ff] bg-clip-text text-transparent">
              Crypto Node
            </div>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Revolutionary mobile node technology that transforms your smartphone
            into a powerful crypto processing node. Experience the future of
            decentralized transactions right in your pocket.
          </p>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Join thousands of node operators who are earning passive income
            while contributing to the security and efficiency of the BitWisdom
            AI Network.
          </p>

          {/* Optional CTA Button */}
          <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-md transition shadow-lg text-xs sm:text-sm md:text-base w-full sm:w-auto">
              Learn More About Mobile Nodes
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MobileNodeSection;
