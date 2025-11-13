import React, { useState, useEffect, useRef } from "react";

const ProfitCalculator = () => {
  const canvasRef = useRef(null);
  const [monthlyTransactions, setMonthlyTransactions] = useState(50000);
  const [profitPercentage, setProfitPercentage] = useState(50);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [annualProfit, setAnnualProfit] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const calculateProfit = () => {
    const monthly = (monthlyTransactions * profitPercentage) / 100 / 12;
    setMonthlyProfit(monthly);
    setAnnualProfit(monthly * 12);
  };

  useEffect(() => {
    calculateProfit();
  }, [monthlyTransactions, profitPercentage]);

  const resetToDefaults = () => {
    setMonthlyTransactions(50000);
    setProfitPercentage(50);
  };

  return (
    <div className="relative min-h-screen bg-[#0E0E0E] text-white flex flex-col justify-start overflow-hidden">
      {/* Background Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-14 md:pb-16">
        {/* Heading */}
        <div className="mb-8 sm:mb-9 md:mb-10 text-left max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide">
            <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent whitespace-nowrap">
              Total Profit Estimator — Running a Crypto
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
              Node on the BitWisdom AI Network
            </span>
          </h1>
          <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm">
            There will be one input and two outputs of monthly and annual
            profit.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="bg-white/95 text-gray-800 border border-gray-300 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left */}
          <div>
            <div className="mb-6 sm:mb-7 md:mb-8">
              <label className="block text-gray-800 text-xs sm:text-sm font-semibold mb-2">
                Combined Monthly Transactions (USD)
              </label>
              <input
                type="number"
                value={monthlyTransactions}
                onChange={(e) => setMonthlyTransactions(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
              />
            </div>

            <div className="mb-6 sm:mb-7 md:mb-8">
              <label className="block text-gray-800 text-xs sm:text-sm font-semibold mb-2">
                Merchant Residual Profit Share to Node Owner (%)
              </label>
              <input
                type="number"
                value={profitPercentage}
                onChange={(e) => setProfitPercentage(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
              />
              <p className="text-gray-500 text-xs mt-2">
                What percent of the savings/residual profit flows to the
                business running the node.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-7 md:mt-8">
              <button
                onClick={calculateProfit}
                className="bg-sky-500 text-white font-semibold px-4 sm:px-5 md:px-7 py-2.5 rounded-md hover:bg-sky-600 transition text-sm sm:text-base"
              >
                Calculate Estimated Profit
              </button>
              <button
                onClick={resetToDefaults}
                className="border border-gray-400 text-gray-700 font-semibold px-4 sm:px-5 md:px-7 py-2.5 rounded-md hover:bg-gray-100 transition text-sm sm:text-base"
              >
                Reset to Defaults
              </button>
            </div>

            <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed mt-6 sm:mt-7 md:mt-8 max-w-2xl">
              *Does not account for initial equipment costs, subscription
              services, electricity, etc. All other countries will have a
              cost-of-living comparison to USA calculation adjustment to make
              the system fair and affordable for everyone. For qualifying
              BitWisdom AI Network customers considered as high-transactional
              volume merchants/institutions, the total profit will be even more
              favorable.
            </p>
          </div>

          {/* Right */}
          <div className="bg-sky-50 rounded-md p-4 sm:p-6 md:p-8 border border-sky-100 shadow-inner self-start">
            <div className="mb-6 sm:mb-7 md:mb-8">
              <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1">
                Estimated Monthly Profit to Node Owner
              </p>
              <p className="text-sky-600 text-2xl sm:text-3xl md:text-4xl font-bold">
                ${monthlyProfit.toFixed(0)}
              </p>
            </div>

            <div className="border-t border-gray-300 my-4 sm:my-5"></div>

            <div>
              <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1">
                Estimated Annual Profit
              </p>
              <p className="text-sky-600 text-xl sm:text-2xl font-bold">
                ${annualProfit.toFixed(0)}
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-2">
                Monthly Savings (All Merchants)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
