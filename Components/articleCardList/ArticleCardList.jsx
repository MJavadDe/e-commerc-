import React, { Fragment } from "react";
import ArticleCard from "./ArticleCard";

import "public/blogdefault.png";

export default function ArticleCardList() {
  const data = [
    {
      id:1,
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
    },
    {
      id:2,
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
    },
    {
      id:3,
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
      
    },
    {
      id:4,
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
      
    },
    {
      id:5,
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
      
    },
    {
      id:6,
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
      
    }
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-[58px] flex-wrap">
      {data.map((item , index) => {
        return (
          <Fragment key={index}>
            <ArticleCard prop={item}></ArticleCard>
          </Fragment>
        );
      })}
    </div>
  );
}
