import React from "react";
import { Fragment } from "react";
import Button from "@/Commons/buttons/Button";

import style from "./CardPaymentList.module.css";
import PaymentCard from "./PaymentCard";

export default function CardPaymentList(prop) {
  // const data = prop.paymentCardList
  const data = [
    {
      name: "دوره نکست جی اس مقدماتی از صفر تا صد",
      price: "90.000",
      utility: "تومان",
    },
    {
      name: "دوره نکست جی اس مقدماتی از صفر تا صد",
      price: "90.000",
      utility: "تومان",
    },
    {
      name: "دوره نکست جی اس مقدماتی از صفر تا صد",
      price: "90.000",
      utility: "تومان",
    },
    {
      name: "دوره نکست جی اس مقدماتی از صفر تا صد",
      price: "90.000",
      utility: "تومان",
    },
  ];
  return (
    <div className="w-[415px] rounded-md grid gap-3 p-[21px] border">
      <div
        className={`font-semibold border-primary-default pb-[20px] ${style.borderbuttomdashedcustom}`}
      >
        جزئیات پرداخت
      </div>
      <div className="grid gap-[8px] my-[10px]">
        {data.map((item) => {
          return (
            <Fragment>
              <PaymentCard prop={item} />
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
        <div className="col-span-1 font-semibold">300.000</div>
        <div className="col-span-1 font-semibold">تومان</div>
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
