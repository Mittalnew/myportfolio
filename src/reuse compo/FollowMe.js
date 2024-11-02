import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const FollowMe = ({ showHeading = true }) => {
  return (
    <div className="p-2 w-full">
      {showHeading && (
        <h3 className="text-lg font-bold mb-4 text-left">Follow Me</h3>
      )}
      <div className="flex justify-start space-x-4 text-[#28a745] text-xl">
        <a href="#" className="hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-white transition">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-white transition">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default FollowMe;
