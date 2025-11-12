import React, { useState, useEffect } from "react";
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";
import ParticleNetwork from "../about/ParticleNetwork";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const BlogFeatured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPosts = [
    {
      title: "Revolutionizing Cryptocurrency Payments with AI Technology",
      description: "Discover how BitWisdom AI Network is transforming the way merchants and customers interact with cryptocurrency through cutting-edge automation and secure payment processing.",
      author: "BitWisdom Team",
      date: "15 Dec 2024",
      readTime: "8 min read",
      category: "Technology",
      image: blog1
    },
    {
      title: "The Future of Lightning Network in Merchant Transactions",
      description: "Explore how the Lightning Network is enabling instant, low-cost Bitcoin transactions for businesses worldwide, revolutionizing the payment processing industry.",
      author: "Tech Insights",
      date: "12 Dec 2024",
      readTime: "7 min read",
      category: "Cryptocurrency",
      image: blog2
    },
    {
      title: "Building Profitable Crypto Node Networks",
      description: "Learn the strategies and best practices for establishing and maintaining crypto nodes that generate consistent revenue while supporting decentralized networks.",
      author: "Network Team",
      date: "10 Dec 2024",
      readTime: "10 min read",
      category: "Business",
      image: blog3
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
    <section className="relative bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Particle Network Animation */}
      <ParticleNetwork />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-gray-900/80 via-[#0E0E0E]/80 to-black border border-cyan-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center" key={currentSlide}>
            {/* Featured Image */}
            <div className="relative order-1">
              <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-cyan-400/30">
                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-cyan-400/20">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2" style={{ animation: "fadeIn 0.5s ease-in" }}>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm">
                <span className="text-cyan-400 font-semibold">{currentPost.category}</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white hover:text-cyan-300 transition-colors duration-300">
                {currentPost.title}
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                {currentPost.description}
              </p>

              <button className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-black px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:scale-105 active:scale-95">
                Read Article
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-cyan-400/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-black text-xs sm:text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">{currentPost.author}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{currentPost.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <FaClock className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
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
