import Button from "@/Commons/buttons/Button";
import Image from "next/image";
import React from "react";
import checkMark from "./checkmark.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SuccessOrder(props) {
  return (
    <div className=" m-4 shadow-2xl rounded-3xl flex flex-col justify-center items-center w-[480px]  mx-auto">
      {/* <Image src={checkMark} alt="success" className='mb-8 mt-6'/> */}
      <CheckCircleIcon className="text-secondary text-8xl m-10" />
      <h3 className="mb-16 font-bold">سفارش شما با موفقیت ثبت شد</h3>
      <p className="mb-8">
        اکنون میتوانید دوره خود را در داشبورد خود مشاهده کنید
      </p>
      <Button className="mb-8 px-40 py-2 rounded-lg bg-primary-dark text-white">
        رفتن به داشبورد
      </Button>
    </div>
  );
}

export default SuccessOrder;

// 475 px
// "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
