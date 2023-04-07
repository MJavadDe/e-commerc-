import React from "react";

const Input = ({ type, placeholder, className }) => {
  return (
     <input
        dir="rtl"
        className={`font-vazir rounded bg-white placeholder:text-green-300 shadow-md px-2 py-1 font-bold outline-none text-green-500 ${className}`}
        type={type}
        placeholder={placeholder}
      />
  );
};

export default Input;
