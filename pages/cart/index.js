import ListCartItem from "@/Components/CartItem/ListCartItem";
import HeadBox from "@/Components/headBox/HeadBox";
import Layout from "@/Components/layout";
import CartLayout from "@/layouts/CartLayout";
import React, { useState } from "react";

function index(props) {
  // cart step is 1(cart) or 2(payment Detail) or 3(checkout) 
  const [cartStep,setCartStep] = useState(1)
  return (
    <Layout title="Cart">
      <CartLayout cartStep={cartStep}>
        <ListCartItem />
      </CartLayout>
    </Layout>
  );
}

export default index;
