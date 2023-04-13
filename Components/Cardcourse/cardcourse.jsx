import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Image from "next/image";
import PriceFormat from "@/utilitie/priceFormat";
// import Axs from ""

function Cardcourse({data}) {
  return (
    <div dir="rtl" className="font-vazir flex flex-col gap-2 shadow-md h-full justify-between">
      <Image src={data.img} width={300} height={200} className="w-full" />
      <div className="px-4">
        <p>{data.title}</p>
      </div>
      <div className="px-3">
        <PersonIcon className="text-gray" />
        <span className="text-gray px-1">{data.instructor}</span>
      </div>
      <div className=" bg-gray w-[90%] h-[1px] self-center"></div>
      <div className="flex justify-between w-[95%] self-center my-3">
        <div className="flex gap-1">
          <AccessAlarmIcon className="text-gray" />
          <span className="text-gray">{data.time}</span>
        </div>
        <span className="text-green-700">
            <PriceFormat price={data.price}></PriceFormat>
        </span>
      </div>
    </div>
  );
}

export default Cardcourse;
