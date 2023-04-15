import React from "react";
import Button from "@/Commons/buttons/Button";

import PaymentCard from "./PaymentCard";
import PriceFormat from "@/utilitie/priceFormat";

export default function CardPaymentList({data}) {
  // const data = prop.paymentCardList
  const totalPrice = 0
  return (
    <div className="w-[415px] rounded-md grid gap-3 p-[21px] border">
      <div
        className={`font-semibold border-primary-default pb-[20px] `}
      >
        جزئیات پرداخت
      </div>
      <div className="grid gap-[8px] my-[10px]">
        {data.map((item,index) => {
          return (
            <>
              <PaymentCard key={`payCard-${index}`} item={item} />
              {totalPrice +=item.price}
            </>
          );
        })}
      </div>
      <div
        className={`grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center h-[50px] items-center border-primary-default`}
      >
        <div className="truncate col-span-4 font-semibold">
          مبلغ قابل پرداخت
        </div>
        <PriceFormat price={totalPrice} />
      </div>
      <Button
        className={
          "bg-secondary-light h-[50px] grid items-center text-white rounded-md hover:bg-primary-default cursor-pointer"
        }
      >
        تکمیل فرایند خرید
      </Button>
    </div>
  );
}
