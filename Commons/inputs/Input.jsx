import React from "react";

const Input = ({ type, placeholder, className }) => {
  return (
     <input
        dir="rtl"
        className={`font-vazir rounded bg-white placeholder:text-primary shadow-md px-2 py-1 outline-none text-green-500 h-[50px] ${className}`}
        type={type}
        placeholder={placeholder}
      />
  );
};

export default Input;
