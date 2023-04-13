import Layout from '@/Components/layout';
import Navbar from '@/Components/navbar/Navbar';
import Searchbox from '@/Components/searchbox/searchbox';
import React from 'react';
import CardList from "@/Components/payDetail cardList/CardList"

const Home = () => {
  return (
    <Layout title="Home page">
          {/* <Searchbox placeholder={"جستجوی دوره های مختلف"}></Searchbox> */}

          <CardList></CardList>
    </Layout>
  );
};

export default Home;
