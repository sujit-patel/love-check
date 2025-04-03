import React, { useEffect, useState } from "react";
import axios from "axios";
function Hero() {
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName && partnerName) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/check-love`,
          {
            userName,
            partnerName,
          }
        );
        console.log(response.data);

        setResult(
          `Compatibility for ${userName} and ${partnerName}: ${response.data.compatibility}%`
        );
      } catch (error) {
        console.error("Error while checking compatibility:", error);
        setResult("Something went wrong. Please try again later.");
      }
    } else {
      setResult("Please enter both names.");
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
      style={{ backgroundImage: "url('/assets/astrology love.png')" }}
    >
      {/* Hero Content */}
      <div className="text-center mb-12 bg-black bg-opacity-70 p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Find Out How Much Love You Share 💕
        </h1>
        <p className="mt-4 text-lg">
          Enter your name and your partner's name to check your love
          compatibility!
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-white border border-pink-500 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-gray-800 font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="text-black w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="partnerName"
              className="block text-gray-800 font-medium"
            >
              Partner's Name
            </label>
            <input
              type="text"
              id="partnerName"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="text-black w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your partner's name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-300"
          >
            Check Love 💖
          </button>
        </form>
      </div>

      {/* Result Message */}
      {result && (
        <div className="mt-8 w-full max-w-md bg-gradient-to-r from-pink-300 via-pink-600 to-pink-300 p-6 rounded-lg shadow-xl text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Your Love Compatibility Result
          </h2>
          <p className="text-xl font-semibold">
            {result} <span>💕</span>
          </p>
        </div>
      )}
    </section>
  );
}

export default Hero;
