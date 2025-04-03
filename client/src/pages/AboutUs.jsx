import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUs() {
  return (
    <>
      <div className="min-h-screen flex justify-between flex-col">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
            <p className="text-lg text-gray-600 mt-4">
              Uncover the secrets of love through astrology and compatibility
              insights.
            </p>
          </header>

          {/* Why Choose Us? */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why Choose Us?
            </h2>
            <ul className="list-disc ml-6 mt-4 text-lg text-gray-700">
              <li>❤️ Fun and interactive love compatibility results.</li>
              <li>
                {" "}
                🌐 100% free and easy-to-use online tools for love insights.{" "}
              </li>
            </ul>
          </section>

          {/* Disclaimer Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Disclaimer</h2>
            <p className="text-gray-700 mt-4 text-lg">
              Please note that our astrology-based love compatibility readings
              are for entertainment purposes only. While astrology can offer
              fascinating insights, it should not replace professional
              relationship advice. Always trust your instincts and personal
              experiences when making important relationship decisions. Enjoy
              the journey, and let love guide you! 💖
            </p>
          </section>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutUs;
