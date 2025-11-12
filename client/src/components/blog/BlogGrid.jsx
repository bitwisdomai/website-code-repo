import React, { useState } from "react";
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["All", "Technology", "Cryptocurrency", "AI & Automation", "Business", "Security"];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Bitcoin Lightning Network for Merchants",
      description: "Learn how the Lightning Network enables instant, low-cost Bitcoin transactions for your business.",
      author: "BitWisdom Team",
      date: "10 Dec 2024",
      readTime: "6 min read",
      gradient: "from-cyan-900 to-blue-900",
      tags: ["Cryptocurrency", "Technology"]
    },
    {
      id: 2,
      title: "The Role of AI in Modern Payment Processing",
      description: "Discover how artificial intelligence is revolutionizing transaction automation and security.",
      author: "Tech Insights",
      date: "8 Dec 2024",
      readTime: "7 min read",
      gradient: "from-blue-900 to-indigo-900",
      tags: ["AI & Automation", "Technology"]
    },
    {
      id: 3,
      title: "KYC Best Practices for Cryptocurrency Networks",
      description: "Essential guidelines for maintaining compliance while onboarding network customers.",
      author: "Security Team",
      date: "5 Dec 2024",
      readTime: "5 min read",
      gradient: "from-gray-900 to-gray-800",
      tags: ["Security", "Business"]
    },
    {
      id: 4,
      title: "Building a Profitable Crypto Node Infrastructure",
      description: "A comprehensive guide to setting up and maintaining crypto nodes for maximum returns.",
      author: "BitWisdom Team",
      date: "2 Dec 2024",
      readTime: "9 min read",
      gradient: "from-cyan-900 to-cyan-800",
      tags: ["Cryptocurrency", "Business"]
    },
    {
      id: 5,
      title: "Smart Contract Integration with Payment Systems",
      description: "How smart contracts enhance security and automation in merchant transactions.",
      author: "Dev Team",
      date: "28 Nov 2024",
      readTime: "8 min read",
      gradient: "from-indigo-900 to-purple-900",
      tags: ["Technology", "Security"]
    },
    {
      id: 6,
      title: "Future of Decentralized Payment Networks",
      description: "Exploring emerging trends and innovations in cryptocurrency payment ecosystems.",
      author: "Industry Analysis",
      date: "25 Nov 2024",
      readTime: "6 min read",
      gradient: "from-blue-900 to-cyan-900",
      tags: ["Cryptocurrency", "Technology"]
    }
  ];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.tags.includes(selectedCategory));

  return (
    <section className="relative bg-[#0E0E0E] text-white py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            All Blog <span className="text-cyan-400">Posts</span>
          </h2>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">Filter By:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-black border border-cyan-400/30 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 cursor-pointer flex-1 sm:flex-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat === "All" ? "all" : cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl sm:rounded-2xl overflow-hidden border border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image/Gradient Header */}
              <div className={`relative h-36 sm:h-40 md:h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center p-4 sm:p-6`}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold opacity-20 text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    BitWisdom
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                {/* Author Info and Arrow Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-black text-xs" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-white truncate">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  </div>
                  <button className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  </button>
                </div>

                {/* Read Time */}
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <FaClock className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap pt-1 sm:pt-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 sm:px-3 py-1 bg-cyan-400/10 rounded-full text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            <button className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 w-full sm:w-auto">
              Load More Articles
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-8 sm:py-10 md:py-12">
            <p className="text-gray-400 text-base sm:text-lg px-4">No articles found in this category.</p>
          </div>
        )}
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

export default BlogGrid;
