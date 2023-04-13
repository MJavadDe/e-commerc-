import HeadBox from "@/Components/headBox/HeadBox";
import Layout from "@/Components/layout";
import React from "react";

const Home = () => {
  return (
    <Layout title="Home page">
<HeadBox title="آخرین مقالات سایت" buttonTitle="مشاهده همه مقالات" url="/blog" />
    </Layout>
  );
};

export default Home;
