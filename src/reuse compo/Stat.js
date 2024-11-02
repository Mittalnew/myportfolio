import React from "react";

const Stat = ({ number, text, index }) => {
  return (
    <div className="text-center relative">
      {index > 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gray-400"></div>
      )}
      <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
      <p className="text-gray-200">{text}</p>
    </div>
  );
};

export default Stat;
