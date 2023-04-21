import React from "react";

const Input = ({ type, placeholder, className }) => {
  return (
     <input
        dir="rtl"
        className={`font-vazir rounded bg-transparent placeholder:text-primary shadow-md px-2 py-1 outline-none text-blue h-[50px] ${className}`}
        type={type}
        placeholder={placeholder}
      />
  );
};

export default Input;
