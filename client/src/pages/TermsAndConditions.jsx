import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TermsAndConditions() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Welcome to Love Check – Your Love Compatibility Calculator!
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
            <p className="text-gray-700 mt-4 text-lg">
              These Terms and Conditions govern your use of the Love Check website.
              By accessing or using our services, you agree to these terms. If you do
              not agree, please do not use our website.
            </p>
          </section>

          {/* Use of Our Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Use of Our Services
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Love Check provides a simple love compatibility calculator based on names.
              The results displayed on the website are randomly generated for entertainment purposes only.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              User Responsibilities
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              As a user of Love Check, you agree to:
            </p>
            <ul className="list-disc ml-6 mt-4 text-lg text-gray-700">
              <li>Use the website for fun and entertainment purposes only.</li>
              <li>Not misuse or manipulate the website for harmful activities.</li>
              <li>Understand that the results are not scientifically accurate.</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              The results displayed on Love Check are purely for entertainment.
              We do not claim accuracy or guarantee real-world compatibility.
              Love Check will not be responsible for any decisions made based on the results.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800">
              Changes to These Terms
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              We may update these Terms and Conditions from time to time.
              Continued use of Love Check after changes means you accept the updated terms.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TermsAndConditions;
