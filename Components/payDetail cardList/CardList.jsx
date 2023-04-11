import React from "react";
import Button from "@/Commons/buttons/Button";

export default function CardList() {
  return (
    <div className="w-[415px] rounded-md grid gap-3 p-[21px] border">
      <div className="font-semibold border-b-[1px] border-b- border-dashed border-primary-default pb-[20px]">
        جزئیات پرداخت
      </div>
      <div className="grid gap-[8px] my-[10px]">
        <div className="bg-[#F7F7F7] grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded-md h-[45px] items-center">
          <div className="truncate col-span-4">
            دوره نکست جی اس مقدماتی از صفر تا صد{" "}
          </div>
          <div className="col-span-1">90.000</div>
          <div className="col-span-1">تومان</div>
        </div>
        <div className="bg-[#F7F7F7] grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded-md h-[45px] items-center">
          <div className="truncate col-span-4">
            دوره نکست جی اس مقدماتی از صفر تا صد{" "}
          </div>
          <div className="col-span-1">90.000</div>
          <div className="col-span-1">تومان</div>
        </div>
        <div className="bg-[#F7F7F7] grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded-md h-[45px] items-center">
          <div className="truncate col-span-4">
            دوره نکست جی اس مقدماتی از صفر تا صد{" "}
          </div>
          <div className="col-span-1">90.000</div>
          <div className="col-span-1">تومان</div>
        </div>
        <div className="bg-[#F7F7F7] grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center rounded-md h-[45px] items-center">
          <div className="truncate col-span-4">
            دوره نکست جی اس مقدماتی از صفر تا صد{" "}
          </div>
          <div className="col-span-1">90.000</div>
          <div className="col-span-1">تومان</div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-6 gap-1 p-2 justify-center h-[50px] items-center border-t-[1px] border-dashed border-primary-default">
        <div className="truncate col-span-4 font-semibold">
          مبلغ قابل پرداخت
        </div>
        <div className="col-span-1 font-semibold">300.000</div>
        <div className="col-span-1 font-semibold">تومان</div>
      </div>
      <Button
        className={
          "bg-secondary-light h-[50px] grid items-center text-white rounded-md"
        }
      >
        تکمیل فرایند خرید
      </Button>
    </div>
  );
}
