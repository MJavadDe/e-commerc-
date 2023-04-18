import Button from "@/Commons/buttons/Button";
import Input from "@/Commons/inputs/Input";
import Image from "next/image";
import React from "react";

const ForgetPass = ({protect}) => {
  return (
    <div className="flex justify-center bg-circle lg:justify-between bg-primary-very-light lg:h-[50rem] h-[30rem] mb-[40rem] lg:px-10">
      <div className="flex flex-col items-center w-[90%] lg:w-1/3 lg:mr-20 gap-10 z-10 p-5 mt-0 lg:mt-[10rem]">
        <h3 className="text-blue">فراموشی رمز عبور</h3>
        <Input className="w-full rounded-xl" placeholder="ایمیل" />
        
        <Button className="bg-secondary-light w-full text-blue h-[50px] rounded-xl flex items-center justify-center cursor-pointer">
          دریافت کد
        </Button>
      </div>
      <Image className="hidden z-10 lg:block h-[400px] mt-[10rem]" src="/images/forgetpass.png" width={500} height={200} alt="register"/>
      </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {protect:true}, // will be passed to the page component as props
  }
}


export default ForgetPass;
