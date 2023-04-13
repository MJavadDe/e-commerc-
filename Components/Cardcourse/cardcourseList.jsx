import React from "react";
import Cardcourse from "./cardcourse";
import FilterCourseCard from "../filterCourseCard/filterCourseCard";

const CardcourseList = () => {
  const data = [
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
    {
      title: "دوره ریکت",
      img: "/06.png",
      instructor: "حسامی",
      time: "7:50:00",
      price: "500000",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-8 mx-auto">
      <FilterCourseCard />
      {data.map((item, index) => (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <Cardcourse key={index} data={item} />
        </div>
      ))}
    </div>
  );
};

export default CardcourseList;
