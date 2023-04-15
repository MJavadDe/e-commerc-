import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import PriceFormat from "@/utilitie/priceFormat";

function CartItem({ data }) {
  return (
    <div className="flex justify-between px-3 py-4 items-center mx-auto gap-12 bg-white rounded-lg">
      <Image src={data.img} width="52" height="52" />
      <div className="text-primary">
        <p>{data.title}</p>
        <p>مدرس دوره: {data.instructor}</p>
      </div>
      <div className="text-primary-dark"> <PriceFormat price={data.price} /> </div>
      <div>
        <DeleteIcon className="" />
      </div>
    </div>
  );
}

export default CartItem;
