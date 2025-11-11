import React from "react";

const FeatureCard = ({ number, title, description }) => (
  <div className="relative border border-[#00BFFF] rounded-lg p-6 bg-[#1A1A1A] hover:bg-[#222222] transition-colors group">
    {/* Number Badge */}
    <div className="absolute -top-4 left-6 bg-[#0D0D0D] px-3 py-1 border border-[#00BFFF] rounded text-[#00BFFF] font-mono text-sm">
      {number}
    </div>

    {/* Content */}
    <div className="mt-4">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Deploy Anywhere",
      description:
        "We will help you launch a crypto node in the cloud, or your own locally-hosted hardware by using Bluvision's patent-pending massively secure connection procedures.",
    },
    {
      number: "02",
      title: "Integrate Seamlessly",
      description:
        "When your merchant integrates a simple onboarding process, they choose from a range of POS, pool, and/or connect their ecommerce platform to start accepting crypto payments in as little as a 30 minute signup process.",
    },
    {
      number: "03",
      title: "Receive Instantly",
      description:
        "Initial .3:1 second consumer/merchant settlement is followed by instantaneous transactional speeds prior to your business. Then final settlement occurs at lowest network fees using Bluvision's patented protocol to stream directly to your merchants' connected wallet.",
    },
  ];

  return (
    <section className="bg-[#0D0D0D] pt-16 pb-4 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center bg-[#00BFFF] text-black px-5 py-2 rounded font-medium text-sm">
            Qualifying Bluvision AI Network Customers
          </div>

          {/* Brain Icon */}
          <div className="w-16 h-16">
            <svg
              viewBox="0 0 64 64"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Brain outline */}
              <path
                d="M32 8C24 8 18 14 18 22C18 24 18.5 26 19.5 27.5C18.5 29 18 31 18 33C18 38 21 42 25 44C23 46 22 49 22 52C22 56 25 60 30 61C31 61 32 61 33 61C38 61 42 57 42 52C42 49 41 46 39 44C43 42 46 38 46 33C46 31 45.5 29 44.5 27.5C45.5 26 46 24 46 22C46 14 40 8 32 8Z"
                stroke="#00BFFF"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Circuit lines */}
              <line
                x1="46"
                y1="22"
                x2="54"
                y2="18"
                stroke="#00BFFF"
                strokeWidth="1.5"
              />
              <circle cx="54" cy="18" r="2" fill="#00BFFF" />

              <line
                x1="46"
                y1="28"
                x2="54"
                y2="28"
                stroke="#00BFFF"
                strokeWidth="1.5"
              />
              <circle cx="54" cy="28" r="2" fill="#00BFFF" />

              <line
                x1="46"
                y1="34"
                x2="54"
                y2="38"
                stroke="#00BFFF"
                strokeWidth="1.5"
              />
              <circle cx="54" cy="38" r="2" fill="#00BFFF" />

              {/* Brain details */}
              <path
                d="M28 18C26 20 25 23 25 26"
                stroke="#00BFFF"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M36 18C38 20 39 23 39 26"
                stroke="#00BFFF"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M26 36C28 38 30 39 33 39"
                stroke="#00BFFF"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
