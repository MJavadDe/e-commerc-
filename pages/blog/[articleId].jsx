import ArticleContent from "@/Components/articleContent/ArticleContent";
import SshareArticle from "@/Components/shareArticleComponent/SshareArticle";
import { useRouter } from "next/router";
import { usePosts } from "@/hooks/services/usePosts";
import { QueryClient, dehydrate } from "react-query";

import React from "react";

const SingleMag = () => {
  const router = useRouter();
  const { data, isLoading, isFetching, isSuccess } = usePosts(
    `/${router.query.articleId}`
  );
  let item = false;
  if (isSuccess) {
    item = data && data[0];
  }

  return (
    <>
      <ArticleContent prop={item} />
      <SshareArticle />
    </>
  );
};

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default SingleMag;
