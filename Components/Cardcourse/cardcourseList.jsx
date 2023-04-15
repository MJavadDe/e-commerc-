import React from "react";
import Cardcourse from "./cardcourse";
import FilterCourseCard from "../filterCourseCard/filterCourseCard";
import { useRouter } from "next/router";


const CardcourseList = ({router}) => {
// const router = useRouter()
//   console.log(router)
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
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
      {router.route === "/courses" && <FilterCourseCard />}
      {data.map((item, index) => (
        <div key={index}>
          <Cardcourse key={index} data={item} />
        </div>
      ))}
    </div>
  );
};

export default CardcourseList;
