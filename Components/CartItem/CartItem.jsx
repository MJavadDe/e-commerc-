import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";

function CartItem({ data }) {
  return (
    <div className="flex justify-between px-3 py-4 items-center mx-auto gap-12 bg-white rounded-lg">
      <Image src={data.img} width="52" height="52" />
      <div>
        <p>{data.title}</p>
        <p>مدرس دوره: {data.instructor}</p>
      </div>
      <div> {data.price}  تومان </div>
      <div>
        <DeleteIcon className="" />
      </div>
    </div>
  );
}

export default CartItem;
