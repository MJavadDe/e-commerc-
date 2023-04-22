import ListCartItem from "@/Components/CartItem/ListCartItem";
import HeadBox from "@/Components/headBox/HeadBox";
import Layout from "@/layouts/layout";
import CardPaymentList from "@/Components/payDetail cardList/CardPaymentList";
import CartLayout from "@/layouts/CartLayout";
import React, { useState } from "react";

function index(props) {
  // cart step is 1(cart) or 2(payment Detail) or 3(checkout)
  const [cartStep, setCartStep] = useState(1);
  const listItem = [
    {
      id: 1,
      name: "دوره ریکت جی اس پیش رفته صفر تا صد",
      instructor: "استاد احسان مولایی",
      price: "250000",
      img: "/images/html.jpg",
    },
    {
      id: 2,
      name: "دوره ریکت جی اس پیش رفته صفر تا صد",
      instructor: "استاد احسان مولایی",
      price: "350000",
      img: "/images/react.jpg",
    },
  ];
  return (
    <>
      <CartLayout cartStep={cartStep}>
        <div className="flex flex-col lg:flex-row justify-between bg-secondary-very-light rounded-lg gap-8 p-8">
          <ListCartItem className="lg:w-2/3" data={listItem} />
          <CardPaymentList className="lg:w-1/3" data={listItem} />
        </div>
      </CartLayout>
    </>
  );
}

export default index;
