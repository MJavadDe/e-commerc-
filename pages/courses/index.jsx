import CardcourseList from "@/Components/Cardcourse/cardcourseList";
import Layout from "@/layouts/layout";
import Searchbox from "@/Components/searchbox/searchbox";
import Link from "next/link";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paginations from "./../../Components/pagination/Pagination";
import { useRouter } from "next/router";
import { fetchProducts } from "@/hooks/services";
import { QueryClient, dehydrate } from "react-query";

const Courses = () => {
  // console.log(data);
  const router = useRouter();
  return (
    <>
      <div className=" flex flex-col font-vazir">
        <div className="flex flex-col gap-5 lg:flex-row justify-between md:gap-5 bg-secondary-very-light lg:h-[4.3rem] md:h-[7rem] rounded-xl items-center mb-10 lg:text-base md:text-sm sm:text-sm p-3 md:flex-col sm:flex-col sm:gap-5">
          <div className="lg:w-[30rem] md:w-[full]">
            <Searchbox
              className="text-secondary-light rounded-md"
              placeholder="جستجوی دوره های مختلف"
            />
          </div>
          <div className="flex items-center">
            <span>مرتب 1سازی بر اساس قیمت</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <CardcourseList router={router} />
        <div className="mt-5">
          <Paginations total={13} />
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["Products", "per_page=11"], () =>
    fetchProducts("per_page=11")
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

// export async function getServerSideProps(context) {
//   const page = context.query.page ? context.query.page : 1;
//   const { data } = await axios.get(
//     `http://localhost:3000/api/productsList?per_page=11&page=${page}`
//   );
//   if (!data) {
//     notFound = true;
//   }
//   return {
//     props: { data },
//   };
// }
export default Courses;
