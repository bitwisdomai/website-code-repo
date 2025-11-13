import React from "react";
import heroBackImg from "../../assets/HEROBACK.jpg";
import ParticleNetwork from "../about/ParticleNetwork";
import { FaStar } from "react-icons/fa";

const BlogHero = () => {
  return (
    <section className="relative bg-[#0E0E0E] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackImg})` }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black"></div>

      {/* Particle Network Animation */}
      <ParticleNetwork />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <FaStar className="text-cyan-400 text-base sm:text-lg md:text-xl" />
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">Latest Updates</span>
        </div>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2"
          style={{
            animation: "fadeInUp 1s ease-out"
          }}
        >
          <span className="text-white">Discover Our </span>
          <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">Insights</span>
        </h1>
        <p
          className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2"
          style={{
            animation: "fadeInUp 1s ease-out 0.3s both"
          }}
        >
          Stay up-to-date with the latest trends, news, and insights from the BitWisdom AI Network
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

export default BlogHero;
