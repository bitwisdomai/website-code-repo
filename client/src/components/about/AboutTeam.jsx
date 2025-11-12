import React from "react";
import about2Img from "../../assets/about2.jpg";
import ParticleNetwork from "./ParticleNetwork";

const AboutTeam = () => {
  return (
    <section className="relative bg-black text-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden">
      {/* Background Image with subtle visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${about2Img})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Particle Network Animation */}
      <ParticleNetwork />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          style={{ animation: "fadeIn 1s ease-out" }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Team
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto" style={{ animation: "expandWidth 1s ease-out 0.3s both" }}></div>
        </div>

        {/* Team Description */}
        <div
          className="bg-[#0E0E0E] border border-gray-800 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]"
          style={{ animation: "slideInUp 1s ease-out 0.2s both" }}
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 transition-all duration-300">
            Our highly-motivated, multi-talented team of system architects, developers proficient in payment systems, coding, AI tech, graphic design and sales professionals all located worldwide, with over a century of combined experience, have done the heavy lifting on the back end to provide a safer, faster, simpler, more affordable and reliable merchant-to-customer transactional experience for our{" "}
            <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors cursor-default">Qualifying BW Customers</span>.
          </p>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            The excitement and dedication our team has, borders on the maniacal, for the introduction of these unique inventions to the world.
          </p>

          {/* Decorative accent */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400 animate-pulse"></div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes expandWidth {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 5rem;
              opacity: 1;
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutTeam;
