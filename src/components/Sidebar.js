import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { PiFilesFill } from "react-icons/pi";
import FollowMe from "../reuse compo/FollowMe";

const Sidebar = ({ scrollToSection }) => {
  return (
    <aside className="bg-black text-white h-full w-64 shadow-lg fixed">
      {" "}
      <div className="flex flex-col items-center mt-8">
        <img
          src="https://images.unsplash.com/photo-1712825565895-59ec3fb19fe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfE4wU0oxMDNESTFZfHxlbnwwfHx8fHw%3D"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-bold">Mittal Singh</h2>
      </div>
      {/* Navigation Links */}
      <div className="p-6 w-full">
        <ul className="space-y-6">
          <li
            className="flex items-center transition rounded p-3 hover:bg-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <FaHome className="mr-3" />
            Home
          </li>
          <li
            className="flex items-center transition rounded p-3 hover:bg-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <FaUser className="mr-3" />
            About Me
          </li>
          <li
            className="flex items-center transition rounded p-3 hover:bg-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection("whatIDo")}
          >
            <FaProjectDiagram className="mr-3" />
            What I Do
          </li>
          <li
            className="flex items-center transition rounded p-3 hover:bg-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection("Resume")}
          >
            <PiFilesFill className="mr-3" />
            Resume
          </li>
          <li
            className="flex items-center transition rounded p-3 hover:bg-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection("MyWorkPortfolio")}
          >
            <BsClipboardDataFill className="mr-3" />
            Portfolio
          </li>
          <li
            className="flex items-center transition rounded p-3 hover:bg-gray-600 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            <FaEnvelope className="mr-3" />
            Contact
          </li>
        </ul>
      </div>
      <div className="p-6 w-full">
        <FollowMe showHeading={false} />
      </div>
    </aside>
  );
};

export default Sidebar;
