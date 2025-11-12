import React from "react";
import about1Img from "../../assets/about1.jpg";
import ParticleNetwork from "./ParticleNetwork";

const AboutValues = () => {
  const values = [
    "Free and Open-Source Software (FOSS)",
    "Self-Custody Funds",
    "Transactional Privacy",
    "Monetary Decentralization",
    "Redundancy",
    "Cybersecurity",
    "Anti-Money Laundering Frameworks",
    "Blockchain Technology",
    "Responsible Use of AI",
  ];

  return (
    <section className="bg-[#0E0E0E] text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-28 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${about1Img})` }}
      ></div>

      {/* Particle Network Animation */}
      <ParticleNetwork />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          style={{ animation: "fadeInDown 1s ease-out" }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-300 mb-3 sm:mb-4 px-2"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            What We Stand For
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-3 sm:mb-4" style={{ animation: "scaleX 1s ease-out 0.3s both" }}></div>
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2"
            style={{ animation: "fadeIn 1s ease-out 0.5s both" }}
          >
            At BitWisdom AI Network, we are passionate advocates for:
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-black border border-gray-800 hover:border-cyan-400 rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:scale-105 hover:-translate-y-1"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutValues;
