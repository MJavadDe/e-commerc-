import Input from '@/Commons/inputs/Input';
import React from 'react'

const CheckoutCart = () => {
  return (
    <div className="font-vazir  bg-primary-light rounded-xl text-gray-dark w-full lg:w-[70%]">
      <div className="w-full p-10 flex flex-col items-center gap-8">
        <h3 className=" self-start mb-10">جزئیات صورت حساب</h3>
        <div className="flex flex-col sm:flex-row gap-5 justify-between w-[95%]">
          <div className="flex flex-col gap-3 sm:w-[40%]">
            <span>نام</span>
            <Input className={"rounded-xl bg-white"} />
          </div>
          <div className="flex flex-col gap-3 sm:w-[40%]">
            <span>نام خانوادگی</span>
            <Input className={"rounded-xl bg-white"} />
          </div>
        </div>
        <div className="flex flex-col w-[95%] gap-3">
          <span>شماره همراه</span>
          <Input placeholder="...۰۹۱۲۴۵۲" className={"rounded-xl placeholder:text-gray bg-white"} />
        </div>
        <div className="flex flex-col w-[95%] gap-3">
          <span>آدرس ایمیل</span>
          <Input placeholder="cheloi-darabi@gmail.com" className={"rounded-xl placeholder:text-gray bg-white"} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutCart
