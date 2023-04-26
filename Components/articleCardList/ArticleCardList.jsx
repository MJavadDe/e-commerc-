import React, { Fragment, useState } from "react";
import ArticleCard from "./ArticleCard";
import { usePosts } from "@/hooks/services/usePosts";

export default function ArticleCardList({ router, per_page }) {
  const [postsCount, setpostsCount] = useState(`?per_page=${per_page}`);

  const { data, isLoading, isFetching, isSuccess } = usePosts(postsCount);

  // console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-[58px] flex-wrap">
      {router.route === "/posts" && <FilterCourseCard />}
      {isLoading && <h1>loading</h1>}
      {!isLoading &&
        data.map((item, index) => (
          <Fragment key={index}>
            <ArticleCard key={index} prop={item} />
          </Fragment>
        ))}
    </div>
  );
}
