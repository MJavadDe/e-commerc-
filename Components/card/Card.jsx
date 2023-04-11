import React from "react";

export default function Card({ name, price, currency }) {
  return (
    <div className="bg-gray-50 grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded items-center">
      <div className="truncate col-span-4">{name}</div>
      <div className="col-span-1">{price}</div>
      <div className="col-span-1">{currency}</div>
    </div>
  );
}
