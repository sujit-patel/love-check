import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-pink-600 to-pink-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-2">
          <img src="/love.png" className="w-16" alt="Love" />
          <div className="text-white text-3xl font-bold">
            <Link to="/">LoveCheck</Link>
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-black transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-black transition-colors duration-300"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-black"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-700 py-4 space-y-4">
          <Link
            to="/"
            className="block px-4 py-2 text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
