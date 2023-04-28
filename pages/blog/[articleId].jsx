import ArticleContent from "@/Components/articleContent/ArticleContent";
import SshareArticle from "@/Components/shareArticleComponent/SshareArticle";
import { useRouter } from "next/router";
import { usePosts } from "@/hooks/services/usePosts";
import { QueryClient, dehydrate } from "react-query";
import { Skeleton } from "antd";

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
  if (isLoading) return (<div className="w-full">
<Skeleton
    avatar
    paragraph={{
      rows: 20,
    }}
  />
  </div>);
 if(!isLoading) return (
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
