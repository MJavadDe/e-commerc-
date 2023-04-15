import Button from "@/Commons/buttons/Button";
import Image from "next/image";
import React from "react";
import Err from "./Group.png";

function Errore404(props) {
  return (
    <div className="font-vazir flex flex-col justify-center items-center p-4  h-screen">
      <Image src={Err} alt="error" className="" />
      <p className="mt-8 text-blue">صفحه یافت نشد</p>
      <Button className="bg-secondary-light py-2 px-24 rounded-xl mt-6 text-blue">بازگشت به خانه</Button>

    </div>
  );
}

export default Errore404;