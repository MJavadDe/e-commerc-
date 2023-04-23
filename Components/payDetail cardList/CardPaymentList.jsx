import React from "react";
import { Fragment } from "react";
import Button from "@/Commons/buttons/Button";

import style from "./CardPaymentList.module.css";
import PaymentCard from "../paymentCardList/PaymentCard";
import PriceFormat from "@/utilitie/priceFormat";
import { useSelector } from "react-redux";

export default function CardPaymentList({ setCartStep }) {
  // const data = prop.paymentCardList
  let product = useSelector((state) => state.products.cart);
  let totalPrice = 0;
  product.map((item) => {
    totalPrice += parseInt(item.price);
  });
  const handleClick = ()=>{
    setCartStep((e)=>e + 1)
  }
  return (
    <div className=" rounded-md grid gap-3 p-[21px] border font-vazir bg-white">
      <div
        className={`font-semibold border-primary-default pb-[20px] ${style.borderbuttomdashedcustom}`}
      >
        جزئیات پرداخت
      </div>
      <div className="grid gap-[8px] my-[10px]">
        {product.map((item, index) => {
          return (
            <Fragment key={index}>
              <PaymentCard item={item} />
            </Fragment>
          );
        })}
      </div>
      <div
        className={`grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center h-[50px] items-center border-primary-default ${style.bordertopdashedcustom}`}
      >
        <div className="truncate col-span-4 font-semibold">
          مبلغ قابل پرداخت
        </div>
        <div className="col-span-1 font-semibold whitespace-nowrap">
          <PriceFormat price={totalPrice} />
        </div>
      </div>
      <Button
        className={
          "bg-primary-dark h-[50px] grid items-center text-white rounded-md hover:bg-primary-default cursor-pointer"
        }
        onClick={handleClick}
      >
        تکمیل فرایند خرید
      </Button>
    </div>
  );
}
