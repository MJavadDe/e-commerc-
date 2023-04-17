import Button from "@/Commons/buttons/Button";
import Input from "@/Commons/inputs/Input";
import React from "react";

const SignupForm = () => {
  return (
    <div className="flex flex-col items-center w-[80%] lg:w-1/3 lg:mr-20 gap-5 z-10 py-5">
      <h3 className="text-blue">حساب کاربری خود را ایجاد کنید</h3>
      <Input className="w-full rounded-xl" placeholder="ایمیل" />
      <Input className="w-full rounded-xl" placeholder="رمز عبور" />
      <Input className="w-full rounded-xl" placeholder="تکرار رمز" />
      <Button className="bg-secondary-light w-full text-blue h-[50px] rounded-xl flex items-center justify-center cursor-pointer">
        ثبت نام
      </Button>
    </div>
  );
};

export default SignupForm;
