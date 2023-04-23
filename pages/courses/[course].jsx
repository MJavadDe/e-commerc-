import Button from "@/Commons/buttons/Button";
import CourseInfo from "@/Components/CourseInfo/CourseInfo";
import ShareCourseComponent from "@/Components/shareCourseComponent/ShareCourseComponent";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProducts } from "@/hooks/services";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/productSlice";
import { QueryClient, dehydrate } from "react-query";

const SingleCourse = () => {
  const dispatch = useDispatch();
  const bought = () => {
    dispatch(addProduct({ item }));
  };
  const router = useRouter();
  const { data, isLoading, isFetching, isSuccess } = useProducts(
    `include=${router.query.course}`
  );
  let item =false
  if (isSuccess) {
     item = data && data[0];
  }
  // console.log(data);
  return (
    <>
      {item ? (
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-[30%] gap-20">
            <CourseInfo item={item} bought={bought} />
            <Button className="bg-primary-light rounded-md py-5 px-2 text-blue">
              سوالات خود را میتوانید در اینجا مطرح کنید
            </Button>
            <ShareCourseComponent />
          </div>
          <div className="w-[60%]">
            <div className="relative h-1/2">
              <Image src={item.images[0].src} layout="fill" />
            </div>
            <div className="h-1/2 p-5">
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["Products", `indlude=${context.query.course}`],
    () => fetchProducts(`indlude=${context.query.course}`)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default SingleCourse;
