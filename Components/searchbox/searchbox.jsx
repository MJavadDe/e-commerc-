import React from "react";
import Input from "@/Commons/inputs/Input";

import "public/search.png";
export default function Searchbox({ placeholder, className, onClick }) {
  return (
    <div className="flex justify-between rounded bg-white shadow-md px-[20px] w-[510px]">
      <Input
        className={`placeholder-green-500 w-full shadow-none px-0 ${className}`}
        placeholder={placeholder}
      />
      <div className="flex items-center cursor-pointer" onClick={onClick}>
        <img src="search.png"></img>
      </div>
    </div>
  );
}
