import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r text-black from-pink-200 to-pink-600 shadow-md py-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center px-4">
        {/* Copyright Text */}
        <p className="text-lg text-black mb-4 md:mb-0 text-center md:text-left">
          &copy; 2025 Love Check - Astrology Love Compatibility
        </p>

        {/* Navigation Links */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end items-center space-y-2 md:space-y-0 md:space-x-4 font-bold">
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/privacy" className="hover:text-blue-100">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-100">
              Terms of Service
            </Link>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
