import ArticleCard from "@/Components/articleCardList/ArticleCard";
import ArticleCardList from "@/Components/articleCardList/ArticleCardList";
import ArticleContent from "@/Components/articleContent/ArticleContent";
import CourseIcons from "@/Components/courseIcons/CourseIcons";
import Layout from "@/Components/layout";
import Searchbox from "@/Components/searchbox/searchbox";
import ServicesCard from "@/Components/servicesCard/ServicesCard";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <Layout title="Home page">
      <div className="font-vazir">
        <div className="flex flex-col-reverse md:flex-row justify-between bg-[url('/images/background2.png')] sm:bg-[url('/images/background.png')] h-[28rem] md:h-[25rem] bg-cover">
          <div className="flex flex-col px-8 justify-between">
            <div className="flex flex-col gap-5 pt-10 mb-10 md:mb-0">
              <h1 className="text-blue text-center text-lg md:text-2xl">
                آموزش برنامه نویسی، خودآموزی، ورود به بازارکار
              </h1>
              <h3 className="text-blue text-center">
                حرفه ای شدن رو از امروز شروع کن
              </h3>
            </div>
            <Searchbox
              className="hidden md:flex mb-20"
              placeholder="جستجوی دوره های مختلف ..."
            />
            <ServicesCard />
          </div>
          <div className="self-center mt-5 sm:ml-7">
            <div className=" bg-primary-very-light rounded-full">
              <Image
                src="/images/part_1.png"
                width={300}
                height={300}
                className="w-[260px] sm:w-[290px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full hidden sm:flex mt-10">
          <CourseIcons />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
