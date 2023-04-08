import Layout from '@/Components/layout';
import Navbar from '@/Components/navbar/Navbar';
import SshareArticle from '@/Components/share article component/SshareArticle';
import React from 'react';

const Home = () => {
  return (
    <Layout title="Home page">
      <SshareArticle />
    </Layout>
  );
};

export default Home;