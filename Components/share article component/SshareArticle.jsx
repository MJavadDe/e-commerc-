import React from "react";

import TelegramIcon from "@mui/icons-material/Telegram";
// import DeleteIcon from '@mui/icons-material/Delete';
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";

function SshareArticle(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-3 text-primary font-bold">اشتراک گذاری</h1>
      <div className="flex">
        <span className=" m-1 p-1 rounded-full border border-gray flex justify-center items-center w-10 h-10 ">
          <TelegramIcon className="text-gray" />
        </span>

        <span className=" m-1 p-1 rounded-full border border-gray flex justify-center items-center w-10 h-10 ">
          <ShareIcon className="text-gray" />
        </span>
        <span className=" m-1 p-1 rounded-full border border-gray flex justify-center items-center w-10 h-10 ">
          <YouTubeIcon className="text-gray" />
        </span >
        <span className=" m-1 p-1 rounded-full border border-gray flex justify-center items-center w-10 h-10 ">
          <InstagramIcon className="text-gray" />
        </span>
        <span className=" m-1 p-1 rounded-full border border-gray flex justify-center items-center w-10 h-10 ">
          <TwitterIcon className="text-gray" />
        </span>
        <span className=" m-1 p-1 rounded-full border border-gray flex justify-center items-center w-10 h-10 ">
          <WhatsAppIcon className="text-gray"  />
        </span>
      </div>
    </div>
  );
}

export default SshareArticle;
