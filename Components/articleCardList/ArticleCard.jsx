import React, { useState } from "react";
import Button from "@/Commons/buttons/Button";
import Image from "next/image";
import Link from "next/link";

import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Message";
import LikeIcon from "@mui/icons-material/FavoriteBorder";

export default function ArticleCard({ prop }) {
  return (
    <div className="shadow-md rounded-md font-vazir flex flex-col">
      <div className=" bg-primary-light rounded-t-md">
        <Image
          src={prop.images ? prop.images : "/blogdefault.png"}
          width={300}
          height={200}
          className="w-full h-[300px]"
          alt="article"
        />
      </div>
      <div className="grid gap-[14px] mt-[14px] pb-[20px] px-[20px]">
        <div className="text-secondary-default text-[14px] text-secondary">
          {prop.name}
        </div>
        <div className="font-medium text-[15px] lg:text-[20px] text-blue">
          {prop.name}
        </div>
        <div className="flex gap-[7px]">
          <PersonIcon className="text-gray" />
          <span className="text-start font-light text-gray">{prop.author}</span>
        </div>
      </div>
      <div className=" bg-gray w-[90%] h-[1px] self-center"></div>
      <div className="grid grid-flow-col justify-between py-[24px] px-[20px]">
        <div>
          <Link href={`blog/${prop.id}`}>
            <Button
              className={
                "cursor-pointer text-blue bg-primary-light rounded-md py-[5px] px-[22px] hover:bg-secondary-light hover:text-white"
              }
            >
              مطالعه
            </Button>
          </Link>
        </div>
        <div className="grid grid-flow-col gap-3">
          <CommentIcon className="text-gray" />
          <LikeIcon className="text-gray" />
        </div>
      </div>
    </div>
  );
}
