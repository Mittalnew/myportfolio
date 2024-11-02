import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../reuse compo/Header";
import FollowMe from "../reuse compo/FollowMe";

const Contact = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1636955860106-3cecd7d3dc9f?q=80&w=1887&auto=format&fit=crop')",
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-gray-900 opacity-80"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Header title="CONTACT" subtitle="Get in Touch" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Contact Information */}
          <div className="text-white space-y-8">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-300">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#28a745]" /> +91 9644969571
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-3 text-[#28a745]" />{" "}
                mittalchauhan56@gmail.com
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-[#28a745]" /> Gururgram,
                India
              </p>
            </div>
            <FollowMe showHeading={true} />
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#28a745]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#28a745]"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 mb-4 bg-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#28a745]"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-[#28a745] text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-[#28a745] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
