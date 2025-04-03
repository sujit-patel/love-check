import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Simulate form submission (you would typically call an API here)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus(
        "Thank you for your message! We will get back to you shortly."
      );
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-lg text-gray-600 mt-4">
              We’d love to hear from you!
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">
              Get In Touch
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Whether you have questions about our astrology services, need
              support, or simply want to say hello, feel free to reach out.
            </p>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-800 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-800 font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-800 font-medium"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-3 mt-4 text-white font-semibold rounded-md ${
                      isSubmitting
                        ? "bg-gray-400"
                        : "bg-blue-500 hover:bg-blue-700"
                    } focus:outline-none`}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </button>
                </form>

                {formStatus && (
                  <div className="mt-4 text-green-600 font-semibold">
                    {formStatus}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ContactUs;
