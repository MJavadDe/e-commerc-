import ListCartItem from "@/Components/CartItem/ListCartItem";
import Layout from "@/Components/layout";
import CartLayout from "@/layouts/CartLayout";
import React, { useState } from "react";

function index(props) {
  // cart step is 1(cart) or 2(payment Detail) or 3(checkout) 
  const [cartStep,setCartStep] = useState(2)
  return (
    <Layout title="Cart">
      <CartLayout cartStep={cartStep}>
        <ListCartItem />
      </CartLayout>
    </Layout>
  );
}

export default index;
