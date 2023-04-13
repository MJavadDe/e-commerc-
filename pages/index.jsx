import Layout from '@/Components/layout';

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
