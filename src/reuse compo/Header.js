import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[130px] font-bold text-gray-900 whitespace-nowrap">
        {title}
      </h2>
      <h2 className="relative text-4xl font-bold text-white mb-2">
        {subtitle}
        <hr className="w-[80px] border-b-2 border-[#28a745] mx-auto" />
      </h2>
    </div>
  );
};

export default Header;
