import React from 'react'
import Cardcourse from './cardcourse';

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
   }
 ];
  return (
    <div className="grid grid-cols-4 gap-8 mx-auto">
      {data.map((item, index) => (
        <div className=' col-span-12 md:col-span-4 lg:col-span-1'>
          <Cardcourse key={index} data={item} />
        </div>
      ))}
    </div>
  );
}

export default CardcourseList
