import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function ListCartItem({ className, data }) {
  let product = useSelector((state) => state.products.cart);

  return (
    <div
      className={`flex-col mx-auto bg-primary-light rounded-lg flex gap-3 p-3 font-vazir ${className}`}
    >
      {product.length === 0 ? (
        <div className="text-blue text-center">سبد خرید خالی است</div>
      ) : (
        product.map((item, index) => (
          <CartItem key={`item-index`} data={item} />
        ))
      )}
    </div>
  );
}

export default ListCartItem;
