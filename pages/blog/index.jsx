import Layout from "@/Components/layout";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <Layout title="Blog">
      <h1>blog section is here</h1>
      <Link href="/">back to home</Link>
    </Layout>
  );
};

export default Blog;
