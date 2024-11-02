// WhatIDo.js
import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaReact,
  FaNpm,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import Card from "../components/card/Card";
import Header from "../reuse compo/Header";

const WhatIDo = () => {
  const services = [
    {
      title: "Front-End Development",
      description:
        "Building interactive, dynamic UIs using React, HTML, and CSS.",
      icon: <FaReact className="text-blue-500" />,
    },
    {
      title: "Responsive Design",
      description:
        "Creating mobile-friendly, responsive layouts for all devices.",
      icon: <FaMobileAlt className="text-green-500" />,
    },
    {
      title: "API Integration",
      description: "Connecting the app to RESTful and GraphQL APIs.",
      icon: <FaServer className="text-purple-500" />,
    },
    {
      title: "Code Optimization",
      description:
        "Improving performance and ensuring seamless user experiences.",
      icon: <FaCode className="text-yellow-500" />,
    },
  ];

  const tools = [
    { name: "Webpack", icon: <FaCode className="text-gray-300" /> },
    { name: "Babel", icon: <FaCode className="text-gray-300" /> },
    { name: "Redux", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "NPM", icon: <FaNpm className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1636955860106-3cecd7d3dc9f?q=80&w=1887&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-gray-900"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Header
          title={<span className="text-gray-700">SERVICES</span>}
          subtitle="What I Do?"
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        {/* Additional Tools and Proficiencies */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white animate-fadeInUp">
          <h3 className="text-3xl font-bold mb-6 text-center">
            React Developer Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                {tool.icon}
                <span className="mt-2 text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
