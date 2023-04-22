import Button from "@/Commons/buttons/Button";
import CourseInfo from "@/Components/CourseInfo/CourseInfo";
import ShareCourseComponent from "@/Components/shareCourseComponent/ShareCourseComponent";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProducts } from "@/hooks/services";

const SingleCourse = () => {
  const router = useRouter();
  const { data, isLoading, isFetching, isSuccess } = useProducts(
    "include=" + router.query.course
  );
// console.log(data);
  return (
    <>
      {data && (
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-[30%] gap-20">
            <CourseInfo data={data[0]} />
            <Button className="bg-primary-light rounded-md py-5 px-2 text-blue">
              سوالات خود را میتوانید در اینجا مطرح کنید
            </Button>
            <ShareCourseComponent />
          </div>
          <div className="w-[60%]">
            <div className="relative h-1/2">
              <Image src={data[0].images[0].src} layout="fill" />
            </div>
            <div className="h-1/2 p-5">
              <div dangerouslySetInnerHTML={{ __html: data[0].description }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCourse;
