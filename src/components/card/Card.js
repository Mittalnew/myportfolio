import React from "react";

const Card = ({ title, description, icon, image, link }) => (
  <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105 duration-300">
    {image && (
      <div
        className="h-48 bg-cover bg-center rounded-lg mb-4"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    )}
    {icon && <div className="text-4xl mb-4">{icon}</div>}
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
    {link && (
      <a href={link} className="text-[#28a745] underline mt-2 inline-block">
        View Project
      </a>
    )}
  </div>
);

export default Card;
