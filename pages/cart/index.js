import ListCartItem from "@/Components/CartItem/ListCartItem";
import Layout from "@/Components/layout";
import CartLayout from "@/layouts/CartLayout";
import React from "react";

function index(props) {
  return (
    <Layout title="Cart">
      <CartLayout>
        <ListCartItem />
      </CartLayout>
    </Layout>
  );
}

export default index;
