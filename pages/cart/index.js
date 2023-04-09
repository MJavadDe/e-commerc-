import ListCartItem from "@/Components/CartItem/ListCartItem";
import Layout from "@/Components/layout";
import React from "react";

function index(props) {
  return (
    <Layout title="Cart">
      <ListCartItem />
    </Layout>
  );
}

export default index;
