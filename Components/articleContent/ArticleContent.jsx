import Image from "next/image";
import React from "react";

export default function ArticleContent({prop}) {
  return (
    <div className="font-vazir">
      <Image
        src={prop.images ? prop.images : "/blogdefault.png"}
        width={300}
        height={200}
        className="w-full"
        alt="single-blog-img"
      />
      <div className="mt-[39px] mb-[62px] text-center font-semibold text-blue">
        {prop.title}
      </div>
      <div>
        <div className="grid grid-flow-col justify-between">
          <div className="grid gap-[15px]">
            <p className="text-gray">نوشته شده در تاریخ</p>
            <p className="text-gray">{prop.modified}</p>
          </div>
          <div className="grid gap-[15px]">
            <p className="text-gray">نوشته شده توسط</p>
            <p className="text-gray">{prop.author}</p>
          </div>
        </div>
        <div className="text-center mt-[60px] mb-[60px] font-semibold text-blue">
          {prop.header}
        </div>
        <div className="text-blue" dangerouslySetInnerHTML={{ __html: prop.content }}></div>
      </div>
    </div>
  );
}
