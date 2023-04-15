import React from "react";
import CartItem from "./CartItem";

function ListCartItem({className,data}) {
 
  return (
    <div className={`flex-col mx-auto bg-primary-light rounded-lg flex gap-3 p-3 font-vazir ${className}`}>
      {data.map((item, index) => (
        <CartItem key={`item-index`} data={item} />
      ))}
    </div>
  );
}

export default ListCartItem;
