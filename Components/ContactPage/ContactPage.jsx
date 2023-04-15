import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Input from "@/Commons/inputs/Input";
import Button from "@/Commons/buttons/Button";

function ContactPage(props) {
  return (
    <div className="bg-primary-very-light rounded-xl bg-circle font-vazir">
      <div className="contactWraper xl:px-48 lg:px-32 px-4 lg:py-8 xl:py-14 py-5 flex flex-col md:flex-row-reverse xl:gap-44 lg:gap-32 gap-16 relative z-10">
      <div className="md:w-3/5 xl:w-1/2 lg:w-2/3 flex flex-col justify-center items-center gap-4">
          <h2 className="text-blue font-bold text-2xl mb-4">تماس با ما</h2>
          <Input
            className="w-full rounded-lg px-3 shadow-xl shadow-primary-light"
            placeholder="نام و نام خانوادگی"
          ></Input>
          <Input
            className="w-full rounded-lg px-3 shadow-xl shadow-primary-light"
            placeholder="ایمیل"
          ></Input>
          <Input
            className="w-full rounded-lg px-3 shadow-xl shadow-primary-light"
            placeholder="شماره موبایل"
          ></Input>
          <textarea
            className="resize-none w-full rounded-lg p-3 shadow-xl shadow-primary-light h-[180px] text-blue placeholder:text-primary outline-none"
            placeholder="متن  پیام"
          ></textarea>
          <Button className="w-full rounded-lg px-3 shadow-xl shadow-primary-light bg-secondary-light text-blue py-3 text-lg cursor-pointer">
            
            ارسال پیام
          </Button>
        </div>
        
        <div className="md:w-2/5 xl:w-1/2 lg:w-1/3">
          <div className=" flex  items-center py-12">
            <div className="px-8">
              <CallIcon className="text-primary text-3xl" />
            </div>
            <div>
              <h6 className="text-primary font-bold text-lg py-1">
                تماس بگیرید
              </h6>
              <p className="text-gray text-base">091012331212</p>
            </div>
          </div>

          <div className=" flex items-center py-12">
            <div className="px-8">
              <MessageIcon className="text-primary text-3xl" />
            </div>
            <div>
              <h6 className="text-primary font-bold text-lg py-1">
                مکاتبه ایمیلی
              </h6>
              <p className="text-gray text-base">hadis.hds80@gmail.com</p>
            </div>
          </div>

          <div className=" flex items-center py-12">
            <div className="px-8">
              <QueryBuilderIcon className="text-primary text-3xl" />
            </div>
            <div>
              <h6 className="text-primary font-bold text-lg py-1">ساعت کاری</h6>
              <p className="text-gray text-base">شنبه تا سه شنبه 18 تا 20</p>
              <p className="text-gray text-base">پنجشنبه ها 8 تا 12</p>
            </div>
          </div>

          <div className=" flex items-center py-12">
            <div className="px-8">
              <AddLocationAltIcon className="text-primary text-3xl" />
            </div>
            <div>
              <h6 className="text-primary font-bold text-lg py-1">نشانی</h6>
              <p className="text-gray text-base">شیراز خیابان فروردین</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default ContactPage;
