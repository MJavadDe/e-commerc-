import React from "react";
import Input from "@/Commons/inputs/Input";

import "public/search.png";
export default function Searchbox({ placeholder, className, onClick }) {
  return (
    <div className={`flex justify-between rounded-xl bg-white shadow-md px-[20px] w-full ${className}`}>
      <Input
        className={`placeholder:text-primary-dark shadow-none px-0 w-full`}
        placeholder={placeholder}
      />
      <div className="flex items-center cursor-pointer" onClick={onClick}>
        <img src="search.png"></img>
      </div>
    </div>
  );
}
