import React from "react";
import Image from "next/image";
import PriceFormat from "@/utilitie/priceFormat";

const DashboardTable = () => {
  const courses = [
    {
      name: "ریکت",
      teacher: "دکتر بحرالعلوم",
      termName: "بهار",
      date: "1400",
      price: 250000,
      image: "/images/react.jpg",
    },
    {
      name: "ریکت",
      teacher: "دکتر بحرالعلوم",
      termName: "بهار",
      date: "1400",
      price: 250000,
      image: "/images/react.jpg",
    },
    {
      name: "ریکت",
      teacher: "دکتر بحرالعلوم",
      termName: "بهار",
      date: "1400",
      price: 250000,
      image: "/images/react.jpg",
    },
    {
      name: "ریکت",
      teacher: "دکتر بحرالعلوم",
      termName: "بهار",
      date: "1400",
      price: 250000,
      image: "/images/react.jpg",
    },
    {
      name: "ریکت",
      teacher: "دکتر بحرالعلوم",
      termName: "بهار",
      date: "1400",
      price: 250000,
      image: "/images/react.jpg",
    },
  ];
  return (
    <div dir="rtl" className="font-vazir">
      <div className="flex justify-around text-center mb-5 bg-[#46A094] text-white font-bold h-[63px] items-center">
        <h3 className="w-[10%]">تصویر</h3>
        <h3 className="w-[12%]">نام دوره</h3>
        <h3 className="w-[12%] hidden sm:block">مدرس</h3>
        <h3 className="w-[8%] hidden sm:block whitespace-nowrap">نام ترم</h3>
        <h3 className="w-[10%] hidden sm:block">تاریخ شروع</h3>
        <h3 className="w-[12%]">قیمت</h3>
      </div>
      <div className="flex flex-col gap-3">
        {courses.map((item, index) => (
          <div
            key={index}
            className="flex justify-around text-center items-center bg-[#E1F6ED] h-[63px] text-green-900 rounded"
          >
            <div className="w-[10%] flex justify-center">
              <Image src={item.image} width={50} height={50} />
            </div>
            <span className="w-[12%]  truncate">{item.name}</span>
            <span className="w-[12%]  truncate hidden sm:block">
              {item.teacher}
            </span>
            <span className="w-[8%] truncate hidden sm:block">
              {item.termName}
            </span>
            <span className="w-[10%]  truncate hidden sm:block">
              {item.date}
            </span>
            <span className="w-[12%]">
              <PriceFormat price={item.price}></PriceFormat>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTable;
