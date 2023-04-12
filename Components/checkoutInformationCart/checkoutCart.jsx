import Input from '@/Commons/inputs/Input';
import React from 'react'

const CheckoutCart = () => {
  return (
    <div className="font-vazir  bg-primary-light rounded-xl text-gray-dark">
      <div className="w-full p-10 flex flex-col items-center gap-8">
        <h3 className=" self-start mb-10">جزئیات صورت حساب</h3>
        <div className="flex justify-between w-[95%]">
          <div className="flex flex-col w-[40%] gap-3">
            <span>نام</span>
            <Input className={"rounded-xl"} />
          </div>
          <div className="flex flex-col w-[40%] gap-3">
            <span>نام خانوادگی</span>
            <Input className={"rounded-xl"} />
          </div>
        </div>
        <div className="flex flex-col w-[95%] gap-3">
          <span>شماره همراه</span>
          <Input className={"rounded-xl"} />
        </div>
        <div className="flex flex-col w-[95%] gap-3">
          <span>آدرس ایمیل</span>
          <Input className={"rounded-xl"} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutCart
