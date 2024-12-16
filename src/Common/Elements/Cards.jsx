import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} px-4 py-6 bg-white rounded-[4px] shadow-sm shadow-gray-100`}
    >
      {children}
    </div>
  );
};

export default Card;
