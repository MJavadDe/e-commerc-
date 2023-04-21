import Layout from "@/Components/layout";
import Link from "next/link";
import React from "react";
import  ArticleCardList  from '@/Components/articleCardList/ArticleCardList';
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';
import Searchbox from "@/Components/searchbox/searchbox";
import Paginations from "@/Components/pagination/Pagination";

const Blog = ({x}) => {
  return (
    <>
      <div className=" flex flex-col font-vazir">
        <div className="flex flex-col gap-5 lg:flex-row justify-between md:gap-5 bg-secondary-very-light lg:h-[4.3rem] md:h-[7rem] rounded-xl items-center mb-10 lg:text-base md:text-sm sm:text-sm p-3 md:flex-col sm:flex-col sm:gap-5">
          <div className="lg:w-[30rem] md:w-[full]">
            <Searchbox
              className="text-secondary-light rounded-md"
              placeholder="جستجوی مقاله های مختلف"
            />
          </div>
          <div className="flex items-center">
            <span>مرتب سازی براساس تاریخ</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <ArticleCardList/>
        <div className="mt-5">
          <Paginations />
        </div>
      </div>
    </>
  );};

export default Blog;
