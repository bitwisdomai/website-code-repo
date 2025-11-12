import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import ParticleNetwork from "../about/ParticleNetwork";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do consumers pay merchants with crypto and how private and secure are the transactions?",
      category: "Security & Privacy"
    },
    {
      question: "What is and why run a crypto node, how difficult is it to run, including updating, what is the incentive and what are the costs involved?",
      category: "Crypto Nodes"
    },
    {
      question: "What is a mobile phone crypto node and a laptop crypto node and what supported crypto node options exist?",
      category: "Crypto Nodes"
    },
    {
      question: "How much profit can be made running a crypto node in the BW Network and what's the commitment policy?",
      category: "Profitability"
    },
    {
      question: "Is BW competitive to traditional crypto payment gateway services and why would merchants prefer our system?",
      category: "Competitive Advantage"
    },
    {
      question: "What are the benefits and how quick is the settlement time for a merchant/customer transaction on the Lightning network?",
      category: "Transactions"
    },
    {
      question: "If traditional merchant transaction processing settlement takes 30+ days, what is the final settlement time and fairness level for all merchants on BW's system?",
      category: "Settlement"
    },
    {
      question: "What cryptocurrencies does BW support now and what will be supported in the near future?",
      category: "Cryptocurrencies"
    },
    {
      question: "Why does this system only support final transaction settlement to the merchant's wallet versus to currency?",
      category: "Settlement"
    },
    {
      question: "How many merchant stores can be set up on one node and how many crypto nodes can a business run?",
      category: "Scalability"
    },
    {
      question: "Does BW perform KYC on Qualifying BW Customers and who's responsible for KYC with onboarded merchants?",
      category: "Compliance"
    },
    {
      question: "What accounting/metrics are provided and does BW's system have support for merchant's proprietary POS terminal integration?",
      category: "Integration"
    },
    {
      question: "What are the advantages of running on-premises, a powerful workstation/server for the decentralized AI Module and what happens if the crypto nodes cannot reach it?",
      category: "Infrastructure"
    },
    {
      question: "Why did BW include AI and automation in its 12 patent-pending technologies and business model?",
      category: "Technology"
    },
    {
      question: "Why would someone 'Help Fund Developing Country Businesses' and who does this really help?",
      category: "Social Impact"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 overflow-hidden">
      {/* Particle Network Animation */}
      <ParticleNetwork />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaQuestionCircle className="text-cyan-400 text-3xl sm:text-4xl" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to common questions about BitWisdom AI Network
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#0E0E0E] border border-cyan-400/30 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded px-2 py-1 text-xs font-semibold text-cyan-400 mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-white text-base sm:text-lg font-medium leading-relaxed">
                      {faq.question}
                    </h3>
                  </div>
                  <FaChevronDown
                    className={`flex-shrink-0 text-cyan-400 text-xl transition-transform duration-300 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-cyan-400/20">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                      This question will be answered in detail. Please contact us directly for comprehensive information about this topic, or schedule a consultation with our team to discuss your specific needs.
                    </p>
                    <button className="mt-4 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                      Contact us for more details
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-cyan-400/10 to-transparent border border-cyan-400/30 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Please get in touch with our team.
          </p>
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg text-base font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:scale-105 active:scale-95">
            Contact Support
          </button>
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
    </section>
  );
};

export default ContactFAQ;
