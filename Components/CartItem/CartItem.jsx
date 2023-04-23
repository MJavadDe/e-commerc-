import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import PriceFormat from "@/utilitie/priceFormat";
import { removeProduct } from "@/store/productSlice";
import { useDispatch } from "react-redux";

function CartItem({ data }) {
  const dispatch = useDispatch()
const handleDelete=(e)=>{
  dispatch(removeProduct(e))
}
  return (
    <div className="flex justify-between px-3 py-4 items-center mx-auto gap-12 bg-white rounded-lg w-full">
      <Image src={data.images[0].src} width="52" height="52" alt="cart-item"/>
      <div className="text-primary">
        <p>{data.name}</p>
        <p>مدرس دوره: {data.teacher.name}</p>
      </div>
      <div className="text-primary-dark"> <PriceFormat price={data.price} /> </div>
      <div onClick={()=>handleDelete(data)}>
        <DeleteIcon className="hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default CartItem;
