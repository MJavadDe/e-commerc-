import React, { useEffect, useState } from "react";
import Cardcourse from "./cardcourse";
import FilterCourseCard from "../filterCourseCard/filterCourseCard";
import { useRouter } from "next/router";
import axios from "axios";


const CardcourseList = ({router}) => {
// const router = useRouter()
//   console.log(router)
// let data = []
const [data,setData] = useState([])
 const fetch = async()=>{setData( (await axios.get("http://localhost:3000/api/productsList")).data)
} 
useEffect(()=>{
fetch()
},[])
  // const data = [
  //   {
  //     id:1,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:2,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:3,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:4,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:5,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:6,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:7,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  //   {
  //     id:8,
  //     title: "دوره ریکت",
  //     img: "/06.png",
  //     instructor: "حسامی",
  //     time: "7:50:00",
  //     price: "500000",
  //   },
  // ];
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
