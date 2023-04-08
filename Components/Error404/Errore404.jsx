import Button from "@/Commons/buttons/Button";
import Image from "next/image";
import React from "react";
import Err from "./Group.png";

function Errore404(props) {
  return (
    <div className="font-vazir flex flex-col justify-center items-center p-4  h-screen">
      <Image src={Err} alt="" className="" />
      <p className="mt-8">صفحه یافت نشد</p>
      <Button className="bg-secondary-300 py-2 px-24 rounded-xl mt-6 ">بازگشت به خانه</Button>

    </div>
  );
}

export default Errore404;