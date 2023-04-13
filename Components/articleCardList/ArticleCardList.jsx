import React, { Fragment } from "react";
import ArticleCard from "./ArticleCard";

import "public/blogdefault.png";

export default function ArticleCardList() {
  const data = [
    {
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
    },
    {
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
    },
    {
      img: "/blogdefault.png",
      title: "مقاله شماره 17",
      name: "میشه یه شبه برنامه نویس شد؟",
      author: "حسامی",
    },
  ];
  return (
    <div className="grid grid-flow-col grid-cols-3 gap-[58px] flex-wrap">
      {data.map((item) => {
        return (
          <Fragment>
            <ArticleCard prop={item}></ArticleCard>
          </Fragment>
        );
      })}
    </div>
  );
}
