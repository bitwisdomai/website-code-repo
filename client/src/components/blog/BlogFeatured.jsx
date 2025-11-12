import React, { useState, useEffect } from "react";
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";
import ParticleNetwork from "../about/ParticleNetwork";

const BlogFeatured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts = [
    {
      title: "Revolutionizing Cryptocurrency Payments with AI Technology",
      description: "Discover how BitWisdom AI Network is transforming the way merchants and customers interact with cryptocurrency through cutting-edge automation and secure payment processing.",
      author: "BitWisdom Team",
      date: "15 Dec 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "The Future of Lightning Network in Merchant Transactions",
      description: "Explore how the Lightning Network is enabling instant, low-cost Bitcoin transactions for businesses worldwide, revolutionizing the payment processing industry.",
      author: "Tech Insights",
      date: "12 Dec 2024",
      readTime: "7 min read",
      category: "Cryptocurrency"
    },
    {
      title: "Building Profitable Crypto Node Networks",
      description: "Learn the strategies and best practices for establishing and maintaining crypto nodes that generate consistent revenue while supporting decentralized networks.",
      author: "Network Team",
      date: "10 Dec 2024",
      readTime: "10 min read",
      category: "Business"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const currentPost = featuredPosts[currentSlide];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 overflow-hidden">
      {/* Particle Network Animation */}
      <ParticleNetwork />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-gray-900/80 via-[#0E0E0E]/80 to-black border border-cyan-400/30 rounded-2xl p-8 sm:p-10 md:p-12 overflow-hidden backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)]">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center" key={currentSlide}>
            {/* Featured Image Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 rounded-2xl p-6 backdrop-blur-sm border border-cyan-400/30">
                <div className="bg-black rounded-xl p-6 shadow-2xl border border-cyan-400/20">
                  <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg h-48 sm:h-64 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Featured Article
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-black/80">
                        <div className="w-12 h-1 bg-black/30 rounded"></div>
                        <div className="w-3 h-3 bg-black/50 rounded-full"></div>
                        <div className="w-12 h-1 bg-black/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6" style={{ animation: "fadeIn 0.5s ease-in" }}>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-1.5 text-sm">
                <span className="text-cyan-400 font-semibold">{currentPost.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white hover:text-cyan-300 transition-colors duration-300">
                {currentPost.title}
              </h2>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {currentPost.description}
              </p>

              <button className="group flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-black px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:scale-105 active:scale-95">
                Read Article
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="flex items-center gap-6 pt-4 border-t border-cyan-400/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                    <FaUser className="text-black text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{currentPost.author}</p>
                    <p className="text-sm text-gray-400">{currentPost.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaClock className="w-4 h-4 text-cyan-400" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
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
      `}</style>
    </section>
  );
};

export default BlogFeatured;
