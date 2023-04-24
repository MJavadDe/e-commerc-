import ListCartItem from "@/Components/CartItem/ListCartItem";
import HeadBox from "@/Components/headBox/HeadBox";
import Layout from "@/layouts/layout";
import CardPaymentList from "@/Components/payDetail cardList/CardPaymentList";
import CartLayout from "@/layouts/CartLayout";
import React, { useState } from "react";
import CheckoutCart from "@/Components/checkoutInformationCart/checkoutCart";
import SuccessOrder from "@/Components/SuccessOrder/SuccessOrder";

function index(props) {
  // cart step is 1(cart) or 2(payment Detail) or 3(checkout)
  const [cartStep, setCartStep] = useState(1);

  return (
    <>
      <CartLayout cartStep={cartStep}>
        {cartStep === 1 && (
          <div className="flex flex-col lg:flex-row justify-between bg-secondary-very-light rounded-lg gap-8 p-8">
            <ListCartItem className="lg:w-2/3" />
            <CardPaymentList setCartStep={setCartStep} className="lg:w-1/3" />
          </div>
        )}
        {cartStep === 2 && (
          <div className="flex flex-col lg:flex-row justify-between bg-secondary-very-light rounded-lg gap-8 p-8">
            <CheckoutCart />
            <CardPaymentList setCartStep={setCartStep} className="lg:w-1/3" />
          </div>
        )}
        {cartStep === 3 && (
          <div className=" bg-secondary-very-light rounded-lg p-8">
            <SuccessOrder />
          </div>
        )}
      </CartLayout>
    </>
  );
}

export default index;
