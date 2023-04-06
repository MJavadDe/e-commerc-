import React from "react";

export default function Card(prop) {
  const item = prop.item;
  return (
    <div className="bg-gray-50 grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded items-center">
      <div className="truncate col-span-4">{item.name}</div>
      <div className="col-span-1">{item.price}</div>
      <div className="col-span-1">{item.currency}</div>
    </div>
  );
}
