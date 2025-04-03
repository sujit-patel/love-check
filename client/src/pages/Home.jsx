import React from "react";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function Home() {
  return (
    <div className="min-h-screen flex items-center justify-between flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
