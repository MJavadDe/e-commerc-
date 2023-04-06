import Layout from "@/Components/layout";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <Layout title="About">
      <h1>this is about us</h1>
      <Link href="/">back to home</Link>
    </Layout>
  );
};

export default AboutUs;
