import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/BitWisdom_Secondary_Logomark_Registered.png";
import phoneImg from "../../assets/footerback.png";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${phoneImg})`,
        }}
      ></div>

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="BitWisdom Logo"
              className="h-12 sm:h-14 md:h-16 mb-3 sm:mb-4 object-contain"
              loading="lazy"
            />
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mb-4 sm:mb-5 md:mb-6">
              BitWisdom AI Network has built and continues to build the future
              of crypto payments with patent-pending automated compliance and
              reporting tools.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg">
              <a
                href="https://www.facebook.com/profile.php?id=61581671382754"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://www.instagram.com/bitw.isdom68/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://x.com/BitWisdomai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="cursor-pointer hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://www.pinterest.com/BitWisdomai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP className="cursor-pointer hover:text-cyan-400 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/qualifying"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Qualifying BW Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/qualifying"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
                Legal
              </span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies-policy"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/aml-kyc-policy"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  AML/KYC Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/license-agreement"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  License Agreement
                </Link>
              </li>
            </ul>
          </div>

          {/* Unique Solutions */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              <span className="bg-gradient-to-b from-[#00f0ff] to-white bg-clip-text text-transparent">
                Unique Solutions
              </span>
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>
                <a
                  href="/#mobile-node"
                  className="hover:text-cyan-400 transition cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();

                    // If already on home page, scroll directly
                    if (location.pathname === "/") {
                      const scrollToSection = () => {
                        const section = document.getElementById("mobile-node-section");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth", block: "start" });
                          return true;
                        }
                        return false;
                      };

                      // Try to scroll immediately
                      if (!scrollToSection()) {
                        // If section not found (lazy loading), poll for it
                        let attempts = 0;
                        const maxAttempts = 50;
                        const intervalId = setInterval(() => {
                          attempts++;
                          if (scrollToSection() || attempts >= maxAttempts) {
                            clearInterval(intervalId);
                          }
                        }, 100);
                      }
                    } else {
                      // Store a flag in sessionStorage to scroll after redirect
                      sessionStorage.setItem("scrollToMobileNode", "true");
                      // Navigate to homepage and let the HomePage component handle scrolling
                      navigate("/");
                    }
                  }}
                >
                  Mobile Phone Crypto Node
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Laptop Crypto Node
                </a>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-cyan-400 transition"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Our Software
                </Link>
              </li>

              <li>
                <Link
                  to="/products#decentralized-ai"
                  className="hover:text-cyan-400 transition"
                  onClick={(e) => {
                    const section = document.getElementById("decentralized-ai");
                    if (window.location.pathname === "/products" && section) {
                      e.preventDefault();
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Decentralized AI
                </Link>
              </li>

              <li>
                <Link
                  to="/products#advanced-features"
                  className="hover:text-cyan-400 transition"
                  onClick={(e) => {
                    const section =
                      document.getElementById("advanced-features");
                    if (window.location.pathname === "/products" && section) {
                      e.preventDefault();
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Clearnet Security
                </Link>
              </li>

              <li>
                <Link
                  to="/products#advanced-features"
                  className="hover:text-cyan-400 transition"
                  onClick={(e) => {
                    const section =
                      document.getElementById("advanced-features");
                    if (window.location.pathname === "/products" && section) {
                      e.preventDefault();
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Node Self-Healing
                </Link>
              </li>

              <li>
                <Link
                  to="/products#advanced-features"
                  className="hover:text-cyan-400 transition"
                  onClick={(e) => {
                    const section =
                      document.getElementById("advanced-features");
                    if (window.location.pathname === "/products" && section) {
                      e.preventDefault();
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Automated Backup
                </Link>
              </li>

              <li>
                <Link
                  to="/products#advanced-features"
                  className="hover:text-cyan-400 transition"
                  onClick={(e) => {
                    const section =
                      document.getElementById("advanced-features");
                    if (window.location.pathname === "/products" && section) {
                      e.preventDefault();
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Mobile App for Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 border-t border-gray-700 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-3 sm:gap-0">
          <p className="text-center sm:text-left">
            ©2025{" "}
            <span className="text-cyan-400 font-semibold">
              BitWisdom AI Network TM
            </span>
          </p>
          <p className="text-center sm:text-right">
            Design & Development By{" "}
            <a
              href="https://tapvera.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
            >
              Tapvera Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
