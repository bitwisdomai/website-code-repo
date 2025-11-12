import React from "react";
import about1Img from "../../assets/about1.jpg";
import ParticleNetwork from "./ParticleNetwork";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0E0E0E] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${about1Img})` }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90"></div>

      {/* Particle Network Animation */}
      <ParticleNetwork />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-28 py-20 sm:py-24 md:py-32 lg:py-40 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-cyan-300 animate-fade-in-up"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            animation: "fadeInUp 1s ease-out"
          }}
        >
          About BitWisdom AI Network
        </h1>
        <p
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{
            animation: "fadeInUp 1s ease-out 0.3s both"
          }}
        >
          Innovating the future of cryptocurrency transactions with cutting-edge technology and unwavering dedication
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;
