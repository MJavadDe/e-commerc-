import Layout from "@/Components/layout";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ShopCart = () => {
  return (
    <Layout title="Shop">
      <h1>this is shop cart</h1>
      <Link href="shopcart/purchaseDetail">
        <Button>purchase Detail</Button>
      </Link>
      <Link href="shopcart/purchaseProgress">
        <Button>purchase Progress</Button>
      </Link>
      <Link href="/">back to home</Link>
    </Layout>
  );
};

export default ShopCart;
