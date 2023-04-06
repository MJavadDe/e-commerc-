import Image from "next/image";
import React from "react";
import Err from "./Group.png";

function Errore404(props) {
  return (
    <div className="flex flex-col justify-center items-center  ">
      <Image src={Err} alt="" className="" />
      <p className="mt-8">صفحه یافت نشد</p>
      <button className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-24 rounded-full mt-6 ">بازگشت به خانه</button>
    </div>
  );
}

export default Errore404;
