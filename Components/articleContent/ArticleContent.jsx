import Image from "next/image";
import React from "react";

import "public/blogdefault2.png";

export default function ArticleContent() {
  const data = {
    img: "/article-content.png",
    title:
      "ام آی تی و اریکسون برای تحقیق در مورد نسل بعدی شبکه های تلفن همراه ،توافقنامه همکاری منعقد می کنند",
    writeDate: "1400/06/05",
    author: "سینا رضایی",
    header:
      "دو پروژه تحقیقاتی در زمینه طراحی سخت افزار پیشرفته می تواند روزی شبکه های تلفن همراه نسل فایو جی و سیکس جی را تقویت کند",
    content:
      "مقاله زیر از انتشار مشترک آزمایشگاه تحقیقات مواد ام آی تی و تحقیقات اریکسون اقتباس شده است.با ورود به عصر جدیدی برای وسایل الکترونیکی مجهز به شبکه های فایو جی و در نهایت سیکس جی ، آزمایشگاه تحقیقات مواد ام آی تی و اریکسون در دو پروژه تحقیقاتی همکاری می کنند که به دنبال کمک به ایجاد زیرساخت شبکه جدید مورد نیاز برای تقویت موارد استفاده واقعاً انقلابی نسل بعدی است. شبکه های تلفن همراه را به ارمغان می آورد نسل های جدید شبکه تلفن همراه سرعت فوق العاده سریع ، تأخیر کم و قابلیت اطمینان فوق العاده را برای کاربر نهایی به ارمغان می آورند. شبکه های بزرگ و غنی از ویژگیها ساختار های پیچیده ای برای مدیریت اپراتورهای شبکه هستند. اریکسون در حال تحقیق بر روی شبکه های شناختی است که با تکیه بر هوش مصنوعی می توانند یک .شبکه امن ، بسیار خودکار و داده محور را فعال کنند",
  };
  return (
    <div className="font-vazir">
      <Image
        src={data.img}
        width={300}
        height={200}
        className="w-full"
        alt="blog img"
      />
      <div className="mt-[39px] mb-[62px] text-center font-semibold text-blue">
        {data.title}
      </div>
      <div>
        <div className="grid grid-flow-col justify-between">
          <div className="grid gap-[15px]">
            <p className="text-gray">نوشته شده در تاریخ</p>
            <p className="text-gray">{data.writeDate}</p>
          </div>
          <div className="grid gap-[15px]">
            <p className="text-gray">نوشته شده توسط</p>
            <p className="text-gray">{data.author}</p>
          </div>
        </div>
        <div className="text-center mt-[60px] mb-[60px] font-semibold text-blue">
          {data.header}
        </div>
        <div className="text-blue">{data.content}</div>
      </div>
    </div>
  );
}
