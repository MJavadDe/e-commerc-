import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import PriceFormat from "@/utilitie/priceFormat";

function CartItem({ data }) {
  return (
    <div className="flex justify-between px-3 py-4 items-center mx-auto gap-12 bg-white rounded-lg w-full">
      <Image src={data.img} width="52" height="52" alt="cart-item"/>
      <div className="text-primary">
        <p>{data.name}</p>
        <p>مدرس دوره: {data.instructor}</p>
      </div>
      <div className="text-primary-dark"> <PriceFormat price={data.price} /> </div>
      <div>
        <DeleteIcon className="hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default CartItem;
