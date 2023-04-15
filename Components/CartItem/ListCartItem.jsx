import React from "react";
import CartItem from "./CartItem";

function ListCartItem(props) {
  const listItem = [
    {
      id: 1,
      title: "دوره ریکت جی اس پیش رفته صفر تا صد",
      instructor: "استاد احسان مولایی",
      price: "250000",
      img: "/images/html.jpg",
    },
    {
      id: 2,
      title: "دوره ریکت جی اس پیش رفته صفر تا صد",
      instructor: "استاد احسان مولایی",
      price: "250000",
      img: "/images/react.jpg",
    },
  ];
  return (
    <div className="flex-col justify-between mx-auto bg-primary-light rounded flex gap-3 p-3 font-vazir">
      {listItem.map((item, index) => (
        <CartItem key={`item-index`} data={item} />
      ))}
    </div>
  );
}

export default ListCartItem;
