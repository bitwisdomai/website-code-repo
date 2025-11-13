import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative bg-[#0E0E0E] text-white border-b border-gray-800 overflow-visible">
      <div className="flex w-full items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-4">
        {/* Centered Nav Links with Equal Spacing */}
        <div className="hidden lg:flex items-center justify-center gap-20 text-[15px] font-medium tracking-tight flex-1">
          <Link
            to="/"
            className={`${
              isActive("/") ? "text-cyan-400" : "hover:text-cyan-400"
            } transition`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              isActive("/about") ? "text-cyan-400" : "hover:text-cyan-400"
            } transition`}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={`${
              isActive("/blog") ? "text-cyan-400" : "hover:text-cyan-400"
            } transition`}
          >
            Blog
          </Link>

          <div className="relative group">
            <button className="hover:text-cyan-400 transition flex items-center gap-1">
              Our Products
              <span className="text-xs">▾</span>
            </button>
            {/* Dropdown Menu (optional) */}
            <div className="absolute hidden group-hover:block bg-[#1A1A1A] border border-gray-700 rounded shadow-lg mt-2 min-w-[180px] z-[9999]">
              <a
                href="#product1"
                className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-cyan-400"
              >
                Product 1
              </a>
              <a
                href="#product2"
                className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-cyan-400"
              >
                Product 2
              </a>
            </div>
          </div>

          <Link
            to="/qualifying"
            className={`${
              isActive("/qualifying") ? "text-cyan-400" : "hover:text-cyan-400"
            } transition whitespace-nowrap`}
          >
            Qualifying BW Customers
          </Link>
          <Link
            to="/contact"
            className={`${
              isActive("/contact") ? "text-cyan-400" : "hover:text-cyan-400"
            } transition`}
          >
            Contact Us
          </Link>

          {/* Grouped Buttons */}
          <div className="flex items-center gap-4">
            <button className="border border-cyan-400 text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#1A1A1A] transition">
              Product Waitlist
            </button>
            <button className="bg-cyan-400 text-black px-5 py-2 rounded text-sm font-semibold hover:bg-cyan-300 transition">
              Join Our Network
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-white"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-gray-800 px-6 py-5 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block ${
              isActive("/") ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`block ${
              isActive("/about") ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            About
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            className={`block ${
              isActive("/blog") ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Blog
          </Link>
          <a
            href="#products"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-cyan-400"
          >
            Our Products
          </a>
          <Link
            to="/qualifying"
            onClick={() => setIsMenuOpen(false)}
            className={`block ${
              isActive("/qualifying") ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Qualifying BW Customers
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`block ${
              isActive("/contact") ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-gray-700">
            <button className="w-full border border-cyan-400 text-white px-5 py-2 rounded text-sm hover:bg-[#1A1A1A] transition mb-3">
              Product Waitlist
            </button>
            <button className="w-full bg-cyan-400 text-black px-5 py-2 rounded text-sm font-semibold hover:bg-cyan-300 transition">
              Join Our Network
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
