import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-m">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#28a745]">Mittal</span>. All Rights Reserved.
        </p>

        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="text-white hover:text-gray-400 transition">
            Terms & Policy
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
