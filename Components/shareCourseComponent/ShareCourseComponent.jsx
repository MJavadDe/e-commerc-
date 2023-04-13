import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

function ShareCourseComponent(props) {
  return (
    <div className="flex justify-center items-center shadow-xl h-[120px]">
      <h5 className=" text-primary-default font-bold px-24 ">به اشتراک گذاری</h5>
      
        <div className="text-primary-default px-3 py-3 m-3 rounded-full shadow-md"><TwitterIcon className=""/></div>
        <div className="text-primary-default px-3 py-3 m-3 rounded-full shadow-md "><TelegramIcon /></div>
        <div className="text-primary-default px-3 py-3 m-3 rounded-full shadow-md"><FacebookIcon /></div>
     
    </div>
  );
}

export default ShareCourseComponent;
