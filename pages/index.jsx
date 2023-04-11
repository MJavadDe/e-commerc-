import Layout from "@/Components/layout";
import Navbar from "@/Components/navbar/Navbar";
import Searchbox from "@/Components/searchbox/searchbox";
import React from "react";
import CardList from "@/Components/payDetail cardList/CardList";
import PriceFormat from "@/utilitie/priceFormat";

const Home = () => {
  return (
    <Layout title="Home page">
      {/* <Searchbox placeholder={"جستجوی دوره های مختلف"}></Searchbox> */}
      <PriceFormat price={500000} className='text-secondary-default' />
      <CardList></CardList>
    </Layout>
  );
};

export default Home;
