import React from "react";

const AmlKycContent = () => {
  const sections = [
    {
      title: "1. INTRODUCTION",
      content: [
        "BitWisdom Ai Network, (\"the Company\" or \"we\"), as a provider of software solutions for facilitating cryptocurrency transactions between merchants and consumers, is committed to complying with all applicable Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. The Company implements policies and procedures designed to detect and prevent money laundering, terrorist financing, and other illegal activities related to cryptocurrency transactions conducted through our platform. This AML/KYC policy establishes guidelines for identity verification, monitoring of transactions, reporting of suspicious activity, and maintaining compliance with legal requirements."
      ]
    },
    {
      title: "2. PURPOSE",
      content: [
        "The purpose of this AML/KYC Policy is to:",
        "• Ensure that BitWisdom Ai Network adheres to anti-money laundering and know-your-customer regulations in all jurisdictions where it operates.",
        "• Establish a clear framework for identifying and verifying the identities of all users interacting with the software, including Licensees, Merchants, and Consumers.",
        "• Prevent and detect any suspicious or unlawful activity, including money laundering and terrorist financing, through the use of the BitWisdom Ai Network platform.",
        "• Promote transparency and compliance with relevant international and national laws regarding cryptocurrency transactions."
      ]
    },
    {
      title: "3. DEFINITIONS",
      subsections: [
        {
          subtitle: "AML (Anti-Money Laundering)",
          content: "Refers to the policies, regulations, and procedures that prevent criminals from disguising illegally obtained funds as legitimate financial gains."
        },
        {
          subtitle: "KYC (Know Your Customer)",
          content: "A process by which BitWisdom Ai Network verifies the identity of its users, merchants, and consumers, ensuring that they are not involved in illegal activities such as money laundering or fraud."
        },
        {
          subtitle: "Licensee",
          content: "An entity or individual who has acquired the right to use BitWisdom Ai Network's software to facilitate cryptocurrency transactions for their onboarded merchants and consumers."
        },
        {
          subtitle: "Merchant",
          content: "A business or individual onboarded by the Licensee to use BitWisdom Ai Network's software to facilitate cryptocurrency transactions."
        },
        {
          subtitle: "Consumer",
          content: "An individual or entity that interacts with a Merchant to complete cryptocurrency transactions using BitWisdom Ai Network's software."
        },
        {
          subtitle: "Suspicious Activity",
          content: "Any transaction or activity that seems unusual, irregular, or inconsistent with the customer's known activities, or that raises concerns regarding its potential involvement in money laundering or other illegal activities."
        }
      ]
    },
    {
      title: "4. CUSTOMER DUE DILIGENCE (CDD)",
      content: [
        "BitWisdom Ai Network will conduct Customer Due Diligence (CDD) on all Licensees, Merchants, and Consumers using our platform in compliance with the KYC process. This process will involve obtaining and verifying the identity of users before granting access to the software. The level of due diligence applied will be based on the risk profile of the user."
      ],
      subsections: [
        {
          subtitle: "4.1. Initial Identity Verification",
          content: "BitWisdom Ai Network will require all Licensees, Merchants, and Consumers to provide sufficient documentation to verify their identity. The information may include, but is not limited to:\n\n• Full legal name\n• Date of birth (for individuals)\n• Physical address\n• Government-issued identification (e.g., passport, driver's license)\n• Business registration documents (for merchants)\n• Proof of address (e.g., utility bills, bank statements)\n• Tax identification number or equivalent, as applicable\n\nFor merchants, BitWisdom Ai Network will verify that the business is legally registered and operational, and that its ownership structure is transparent. We will also assess the legitimacy of the business, including understanding the nature of the business and its sources of funds."
        },
        {
          subtitle: "4.2. Enhanced Due Diligence (EDD)",
          content: "In cases where the customer is considered to be of higher risk (e.g., politically exposed persons (PEPs), high-net-worth individuals, customers with a history of suspicious activity, or customers from high-risk jurisdictions), BitWisdom Ai Network will conduct Enhanced Due Diligence (EDD). This process may include more rigorous checks such as:\n\n• Obtaining additional documentation to verify the source of funds.\n• Monitoring transactions more closely.\n• Conducting more frequent reviews of the customer's activities on the platform."
        },
        {
          subtitle: "4.3. Ongoing Monitoring",
          content: "BitWisdom Ai Network will continuously monitor transactions conducted by Licensees, Merchants, and Consumers on the platform. This includes:\n\n• Tracking the frequency, volume, and geographical location of transactions to detect any patterns indicative of suspicious activity.\n• Comparing transactions with known patterns of money laundering or other illegal activities.\n• Reviewing account activity for inconsistencies with the customer's profile and typical business behavior."
        }
      ]
    },
    {
      title: "5. REPORTING SUSPICIOUS ACTIVITY",
      content: [
        "BitWisdom Ai Network will take appropriate steps to identify, monitor, and report suspicious activity as part of its commitment to preventing money laundering, terrorist financing, and other financial crimes."
      ],
      subsections: [
        {
          subtitle: "5.1. Suspicious Activity Reporting (SAR)",
          content: "If BitWisdom Ai Network detects or suspects any activity that is inconsistent with the customer's profile, or if the Company becomes aware of any suspicious behavior such as:\n\n• Unexplained large transactions\n• Frequent transactions to or from high-risk jurisdictions\n• Transactions involving high-volume, low-value transactions\n• Anomalies or inconsistencies in KYC information\n\nBitWisdom Ai Network will file a Suspicious Activity Report (SAR) with the relevant regulatory authorities, as required by law. BitWisdom Ai Network will cooperate fully with law enforcement and regulatory bodies in any investigations relating to suspicious or illegal activity."
        },
        {
          subtitle: "5.2. Cooperation with Authorities",
          content: "BitWisdom Ai Network will cooperate with law enforcement agencies and regulatory authorities in the event of an investigation into suspicious transactions or illegal activity. The Company will comply with lawful requests for information related to customer activities and transactions on the platform."
        }
      ]
    },
    {
      title: "6. RISK ASSESSMENT AND MONITORING",
      content: [
        "BitWisdom Ai Network will regularly assess the risks associated with each user, merchant, and consumer using the platform. These assessments will include the evaluation of the user's country of origin, transaction behavior, and the type of business conducted by the merchant."
      ],
      subsections: [
        {
          subtitle: "6.1. Risk-Based Approach",
          content: "The Company will implement a risk-based approach to KYC and AML procedures, meaning that higher-risk customers or transactions will be subject to enhanced scrutiny. For example:\n\n• Higher-risk jurisdictions: Customers or transactions linked to countries with weak AML/KYC regulations or known to be high-risk for money laundering may undergo additional scrutiny.\n• PEPs (Politically Exposed Persons): Individuals who are considered politically exposed, or who have significant political influence, will be subject to enhanced due diligence."
        },
        {
          subtitle: "6.2. Continuous Risk Monitoring",
          content: "BitWisdom Ai Network will continuously monitor risk levels associated with users and transactions. The Company will adapt its AML/KYC processes to respond to emerging risks and changes in regulatory requirements."
        }
      ]
    },
    {
      title: "7. TRAINING AND COMPLIANCE",
      content: [
        "BitWisdom Ai Network is committed to providing ongoing AML/KYC training to its employees, agents, and other relevant personnel. This training will include:",
        "• Identification of suspicious activity: Recognizing potential signs of money laundering or terrorist financing.",
        "• Proper procedures for reporting suspicious activity.",
        "• Regular updates on changes to AML/KYC regulations to ensure compliance with evolving legal standards.",
        "The Company will also ensure that all personnel are familiar with the specifics of cryptocurrency-related money laundering risks and the regulatory frameworks governing digital assets."
      ]
    },
    {
      title: "8. RECORDKEEPING AND DATA SECURITY",
      content: [
        "BitWisdom Ai Network will maintain accurate records of all customer identification information, transaction history, and other relevant data in accordance with AML and KYC regulations. These records will be stored securely and kept confidential in compliance with applicable data protection laws."
      ],
      subsections: [
        {
          subtitle: "8.1. Retention of Records",
          content: "The Company will retain records of KYC documentation and transaction data for at least five (5) years following the completion of a transaction or the termination of a business relationship, as required by applicable AML regulations."
        },
        {
          subtitle: "8.2. Data Protection and Privacy",
          content: "BitWisdom Ai Network is committed to protecting the privacy and security of user data and will comply with all relevant data protection laws in the jurisdictions in which it operates."
        }
      ]
    },
    {
      title: "9. COMPLIANCE WITH JURISDICTIONAL REGULATIONS",
      content: [
        "BitWisdom Ai Network will comply with all applicable AML and KYC regulations in the jurisdictions where it operates. This includes, but is not limited to, adherence to the regulations in the United States, European Union, and other relevant territories with respect to cryptocurrency and digital asset transactions.",
        "If any changes to local or international regulations require updates to this policy, BitWisdom Ai Network will promptly revise its practices to ensure ongoing compliance."
      ]
    },
    {
      title: "10. POLICY REVIEW AND UPDATES",
      content: [
        "BitWisdom Ai Network will regularly review and update this AML/KYC Policy to ensure it reflects the latest regulatory requirements and industry best practices. Changes to this policy will be communicated to relevant stakeholders, and new procedures will be implemented as necessary."
      ]
    },
    {
      title: "11. CONCLUSION",
      content: [
        "BitWisdom Ai Network is committed to fighting money laundering, terrorist financing, and other illicit activities by ensuring full compliance with AML and KYC regulations. By enforcing strict customer due diligence, monitoring transactions, and reporting suspicious activity, BitWisdom Ai Network will continue to foster a secure and transparent environment for cryptocurrency transactions."
      ]
    }
  ];

  return (
    <section className="relative bg-[#0E0E0E] text-white py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Introduction */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
              ANTI-MONEY LAUNDERING (AML) AND KNOW YOUR CUSTOMER (KYC) POLICY
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Effective Date: 11/24/2025
          </p>
        </div>

        {/* AML/KYC Sections */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group border border-cyan-400/30 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,191,255,0.2)]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
                <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
                  {section.title}
                </span>
              </h2>
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {section.content && section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.subsections && section.subsections.map((subsection, sIndex) => (
                  <div key={sIndex} className="pl-2 sm:pl-3 md:pl-4 mt-3 sm:mt-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300 mb-2 sm:mb-3">
                      {subsection.subtitle}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 bg-cyan-400/10 border border-cyan-400/50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8"
          style={{
            animation: "fadeInUp 0.6s ease-out 1.2s both",
          }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-cyan-400">
            Commitment to Compliance
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            BitWisdom Ai Network is dedicated to maintaining the highest standards of compliance with AML and KYC regulations. We continuously monitor our processes and procedures to ensure we meet all regulatory requirements and protect our platform from illegal activities. If you have questions about our AML/KYC policies, please contact us.
          </p>
        </div>
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

export default AmlKycContent;
