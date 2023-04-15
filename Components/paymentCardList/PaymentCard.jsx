import React from "react";
import PriceFormat from "./../../utilitie/priceFormat";

export default function PaymentCard({ item }) {
  return (
    <div className="bg-[#F7F7F7] grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded-md h-[45px] items-center">
      <div className="truncate col-span-4">{item.name}</div>
      <div className="col-span-1 whitespace-nowrap">{<PriceFormat price={item.price}/>}</div>
    </div>
  );
}
