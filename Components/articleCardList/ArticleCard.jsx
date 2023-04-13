import React from "react";
import Button from "@/Commons/buttons/Button";
import Image from "next/image";

import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Message";
import LikeIcon from "@mui/icons-material/FavoriteBorder";

export default function ArticleCard({ prop }) {
  return (
    <div className="shadow-md rounded-md">
      <div className=" bg-primary-light rounded-t-md">
      <Image src={prop.img} width={300} height={200} className="w-full" />
      </div>
      <div className="grid gap-[14px] mt-[14px] border-b-[1px] border-gray pb-[20px] px-[20px]">
        <div className="text-secondary-default text-[14px]">{prop.title}</div>
        <div className="font-medium text-[20px]">{prop.name}</div>
        <div className="flex gap-[7px]">
          <i>{ <PersonIcon /> }</i>
          <span className="text-start font-light">{prop.author}</span>
        </div>
      </div>
      <div className="grid grid-flow-col justify-between py-[24px] px-[20px]">
        <div>
          <Button
            className={
              "cursor-pointer bg-primary-light rounded-md py-[5px] px-[22px] text-gray hover:bg-secondary-light hover:text-white"
            }
          >
            مطالعه
          </Button>
        </div>
        <div className="grid grid-flow-col gap-3">
          <div className="cursor-pointer">{ <CommentIcon /> }</div>
          <div className="cursor-pointer">{ <LikeIcon /> }</div>
        </div>
      </div>
    </div>
  );
}
