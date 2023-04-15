import ArticleContent from "@/Components/articleContent/ArticleContent";
import Layout from "@/Components/layout";
import Paginations from "@/Components/pagination/Pagination";
import SshareArticle from "@/Components/shareArticleComponent/SshareArticle";
import { useRouter } from "next/router";
import React from "react";


const SingleMag = () => {
  const router = useRouter();

  return (
    <>
      <ArticleContent />
      <SshareArticle />
    </>
  );
};

export default SingleMag;
