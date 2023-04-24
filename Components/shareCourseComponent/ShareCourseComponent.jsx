import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

function ShareCourseComponent(props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center shadow-all h-[120px] rounded-md text-blue">
      <h5 className="text-primary-default  px-24 ">به اشتراک گذاری</h5>
      <div className="flex">
        <div className="text-primary-default px-3 py-3 m-3 rounded-full shadow-share"><TwitterIcon className=""/></div>
        <div className="text-primary-default px-3 py-3 m-3 rounded-full shadow-share "><TelegramIcon /></div>
        <div className="text-primary-default px-3 py-3 m-3 rounded-full shadow-share"><FacebookIcon /></div>
        </div>
    </div>
  );
}

export default ShareCourseComponent;
