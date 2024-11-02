import React from "react";
import Header from "../reuse compo/Header";
import Card from "../components/card/Card";
const MyWorkPortfolio = () => {
  const projects = [
    {
      title: "Netflix clone",
      description: "A detailed project about React development.",
      image: "https://i.ytimg.com/vi/GV3HUDMQ-F8/sddefault.jpg",
      link: "#",
    },
    {
      title: "Ecommerce clone",
      description: "An innovative project in UI/UX design.",
      image:
        "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png",
      link: "#",
    },
    {
      title: "AI chatbot",
      description: "A comprehensive full-stack development project.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY15Up2GwaQLHcagWxA8GoHiHxGs2Ve9tRIw&s",
      link: "#",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1636955860106-3cecd7d3dc9f?q=80&w=1887&auto=format&fit=crop')",
      }}
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <Header title="PORTFOLIO" subtitle="My Work" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorkPortfolio;
