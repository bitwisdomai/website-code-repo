import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import ParticleNetwork from "../about/ParticleNetwork";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do consumers pay merchants with crypto and how private and secure are the transactions?",
      answer: "Consumers pay by scanning a wallet QR code; the transaction is recorded on the blockchain. Privacy depends on the blockchain used—Bitcoin and Lightning offer pseudonymity, not full anonymity.",
      category: "Security & Privacy"
    },
    {
      question: "What is and why run a crypto node, how difficult is it to run, including updating, what is the incentive and what are the costs involved?",
      answer: "A crypto node validates and relays transactions, supporting network integrity. It's not difficult with automated software; costs involve electricity, uptime, and hardware, with rewards or fees as incentives.",
      category: "Crypto Nodes"
    },
    {
      question: "What is a mobile phone crypto node and a laptop crypto node and what supported crypto node options exist?",
      answer: "A mobile or laptop node is a lightweight version that connects to the network but doesn't store full blockchain data. BW supports full, pruned, and lightweight nodes depending on device capacity.",
      category: "Crypto Nodes"
    },
    {
      question: "How much profit can be made running a crypto node in the BW Network and what's the commitment policy?",
      answer: "Profit depends on node uptime, transaction volume, and network usage. BW has no fixed return or lock-in period; earnings vary with network activity and fees collected.",
      category: "Profitability"
    },
    {
      question: "Is BW competitive to traditional crypto payment gateway services and why would merchants prefer our system?",
      answer: "BW removes intermediaries and settles directly on-chain or via Lightning. Merchants avoid high gateway fees and delays but assume responsibility for managing their own wallets and conversions.",
      category: "Competitive Advantage"
    },
    {
      question: "What are the benefits and how quick is the settlement time for a merchant/customer transaction on the Lightning network?",
      answer: "Lightning Network transactions settle within seconds. It enables instant, low-fee micropayments with finality once confirmed.",
      category: "Transactions"
    },
    {
      question: "If traditional merchant transaction processing settlement takes 30+ days, what is the final settlement time and fairness level for all merchants on BW's system?",
      answer: "Settlement on BW is immediate once the blockchain confirms payment. All merchants receive funds directly without intermediaries, so fairness depends on network rules, not a central authority.",
      category: "Settlement"
    },
    {
      question: "What cryptocurrencies does BW support now and what will be supported in the near future?",
      answer: "BW currently supports Bitcoin and Lightning-based payments. Future integrations will depend on node compatibility, network stability, and regulatory compliance.",
      category: "Cryptocurrencies"
    },
    {
      question: "Why does this system only support final transaction settlement to the merchant's wallet versus to currency?",
      answer: "Because BW operates as a decentralized payment protocol, not a fiat exchange. It transfers crypto directly to the merchant's wallet, avoiding custodial and regulatory obligations.",
      category: "Settlement"
    },
    {
      question: "How many merchant stores can be set up on one node and how many crypto nodes can a business run?",
      answer: "Multiple stores can operate under one node, limited by hardware and bandwidth. Businesses can run multiple nodes if they want to distribute load or operate in different locations.",
      category: "Scalability"
    },
    {
      question: "Does BW perform KYC on Qualifying BW Customers and who's responsible for KYC with onboarded merchants?",
      answer: "BW performs KYC where legally required, primarily for network-level participants. Merchants remain responsible for customer KYC or AML compliance within their jurisdictions.",
      category: "Compliance"
    },
    {
      question: "What accounting/metrics are provided and does BW's system have support for merchant's proprietary POS terminal integration?",
      answer: "BW provides transaction logs, balance summaries, and node performance metrics. POS integration is supported through APIs and plugin modules, depending on merchant system compatibility.",
      category: "Integration"
    },
    {
      question: "What are the advantages of running on-premises, a powerful workstation/server for the decentralized AI Module and what happens if the crypto nodes cannot reach it?",
      answer: "Running on-premises provides faster processing, full data control, and independence from cloud reliance. If unreachable, nodes continue operating with limited functionality until reconnected.",
      category: "Infrastructure"
    },
    {
      question: "Why did BW include AI and automation in its 12 patent-pending technologies and business model?",
      answer: "AI and automation handle dynamic network optimization, predictive analytics, and fraud detection. They reduce manual management and improve system efficiency.",
      category: "Technology"
    },
    {
      question: "Why would someone 'Help Fund Developing Country Businesses' and who does this really help?",
      answer: "It channels crypto liquidity into real businesses that lack traditional financing. The funding supports local economic growth while giving contributors measurable social and financial impact.",
      category: "Social Impact"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Particle Network Animation */}
      <ParticleNetwork />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-2">
            <FaQuestionCircle className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300 text-center sm:text-left"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Find answers to common questions about BitWisdom AI Network
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
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
                  className="w-full flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 rounded px-2 py-1 text-xs font-semibold text-cyan-400 mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed pr-2">
                      {faq.question}
                    </h3>
                  </div>
                  <FaChevronDown
                    className={`flex-shrink-0 text-cyan-400 text-base sm:text-lg md:text-xl transition-transform duration-300 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 border-t border-cyan-400/20">
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-3 sm:mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center bg-gradient-to-r from-cyan-400/10 to-transparent border border-cyan-400/30 rounded-xl p-5 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 px-2">
            Can't find the answer you're looking for? Please get in touch with our team.
          </p>
          <button className="bg-cyan-400 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:scale-105 active:scale-95 w-full sm:w-auto">
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
