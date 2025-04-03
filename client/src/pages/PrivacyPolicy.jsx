import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
            <p className="text-lg text-gray-600 mt-4">
              Your privacy is important to us.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
            <p className="text-gray-700 mt-4 text-lg">
              Welcome to Love Check! This Privacy Policy explains how we handle
              the information you provide while using our website. By using our platform,
              you agree to this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Information We Collect
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Love Check does not collect or store any personal information.  
              Our website only processes the names you enter to generate a love compatibility percentage.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              For website analytics and performance improvement, we may use cookies.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              How We Use Information
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              The names you enter are processed in real-time to display a random love compatibility percentage.
              We do not save or share this data.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              Cookies may be used to track general usage trends, such as page visits, for improving the user experience.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Data Security</h2>
            <p className="text-gray-700 mt-4 text-lg">
              Love Check does not store personal data, so there is no risk of data breaches.
              Any information entered is processed instantly and not saved.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Cookies</h2>
            <p className="text-gray-700 mt-4 text-lg">
              We use cookies to understand how users interact with our site.
              These cookies do not collect personal information and are used only for analytics and website performance.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              You can disable cookies in your browser settings if you prefer.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-800">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              We may update this Privacy Policy from time to time.
              Any changes will be reflected on this page.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PrivacyPolicy;
