import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

const GetToKnow = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUSAExpanded, setIsUSAExpanded] = useState(false);

  const points = [
    "Are you motivated to make profit unlocking an unrealized revenue stream? Then let's get started!",
    "Profit has been made mining, staking, trading and holding cryptocurrency, and now profit can be made facilitating transactions.",
    "How did we come up with a way for you to make profit facilitating crypto transactions?",
    "We always wondered why we couldn't use crypto in everyday life, so surely someone had thought of a way.",
    "After months of research, we found no one had created a way to use crypto daily, so we set out to make this a reality!",
    "We wanted transactions to be decentralized, private, secure, fast, simple and at the lowest fees possible.",
    "We realized our goal would be to embrace today's technology with the use of automation and Ai.",
    "We started the cybersecurity from the ground up with a patent-pending Clearnet connection method, which is now implemented on all nodes.",
    "We chose the gold-standard, Bitcoin, but chose the lightning network for speed.",
    "We modeled our entire patent-pending automated system after the Bitcoin blockchain, to make it as decentralized and redundant as possible.",
    "We wanted to create an incentive for businesses to run their own node and onboard merchants.",
    "After 12 patent-pending technologies, we've created inventions we feel honored to share with the world.",
    "Some businesses have spent voluminous capital to implement systems to accept cryptocurrency and yet others are amassing it.",
    "Businesses today are building their own Bitcoin Strategic Reserve, and you can too:",
    "We've created the incentive for your business to run a crypto node; we define as an automated cryptocurrency transactional facilitation server.",
    "Sounds complicated? We've done the heavy lifting on the back-end to provide a simpler experience.",
    "Choose your own hardware, our hardware or cloud-based node. We can advise this based on your needs.",
    "You take care of the modest initial up-front investment and leave the deployment to us.",
    "Onboard the merchants you're already serving who already trust you with our simple onboarding app.",
    "If your merchants download, buy or already have a supported crypto wallet, they can start accepting Bitcoin in as little as 30 minutes.",
    "We've designed our tiered licensing fee structure to allow your business to become cash flow positive quicker, based on merchant transactions.",
    "We've created accounting and reporting systems for your business and your merchant's stores.",
    "Our focus on uptime, high availability, redundancy and disaster recovery provides your business with node self-healing and automated backup.",
    "We allow any of our customers to run their own Ai system server to take full advantage of our node self-healing technology.",
    "Never-before-seen Ai technology allows all crypto nodes worldwide to work in a collaborative, cooperative way for lowest fee settlement.",
    "A win-win for everyone, your merchants save on transaction processing fees and you get a residual.",
    "Our system has no merchant chargebacks or PCI Compliance!",
    "Contact us or schedule a callback today to transform your merchant network!",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Get to know{" "}
          <span className="text-blue-400">Bitwisdom AI Network</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* USA Registered Customers Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="mb-4">
              <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                USA Only
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              USA Registered Customers Only
            </h3>
            <p className="text-gray-300 mb-6">
              Learn about exclusive business and opportunities available for USA
              registered customers and how you can get started with our
              platform.
            </p>
            <button
              type="button"
              onClick={() => setIsUSAExpanded(!isUSAExpanded)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
            >
              Learn more
              {isUSAExpanded ? (
                <FaChevronUp className="transition-transform" />
              ) : (
                <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isUSAExpanded
                  ? "max-h-[2000px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-white/20 pt-6 space-y-4">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-gray-200 hover:text-white transition-colors"
                    style={{
                      animation: isUSAExpanded
                        ? `fadeInUp 0.5s ease-out ${index * 0.03}s both`
                        : "none",
                    }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="flex-1 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Potential Customers Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
            <div className="mb-4">
              <span className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Global
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Potential Customers In 50 Other Countries
            </h3>
            <p className="text-gray-300 mb-6">
              Discover new international businesses you can join and expand your
              operations to serve our global network.
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors group"
            >
              Learn more
              {isExpanded ? (
                <FaChevronUp className="transition-transform" />
              ) : (
                <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
              )}
            </button>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded
                  ? "max-h-[2000px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-white/20 pt-6 space-y-4">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-gray-200 hover:text-white transition-colors"
                    style={{
                      animation: isExpanded
                        ? `fadeInUp 0.5s ease-out ${index * 0.03}s both`
                        : "none",
                    }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="flex-1 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GetToKnow;
