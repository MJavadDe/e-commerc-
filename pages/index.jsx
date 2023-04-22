import CardcourseList from "@/Components/Cardcourse/cardcourseList";
import ArticleCard from "@/Components/articleCardList/ArticleCard";
import ArticleCardList from "@/Components/articleCardList/ArticleCardList";
import ArticleContent from "@/Components/articleContent/ArticleContent";
import CourseIcons from "@/Components/courseIcons/CourseIcons";
import Layout from "@/Components/layout";
import Searchbox from "@/Components/searchbox/searchbox";
import ServicesCard from "@/Components/servicesCard/ServicesCard";
import TeacherCarusel from "@/Components/teacherCarousel/TeacherCarusel";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import HeadBox from "./../Components/headBox/HeadBox";
import axios from "axios"

const Home = ({data}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col-reverse md:flex-row justify-between bg-primary-very-light bg-circle h-[28rem] md:h-[25rem] bg-cover">
          <div className="flex flex-col px-8 justify-between z-10">
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
          <div className="self-center mt-5 sm:ml-7 z-10">
            <div className=" bg-primary-very-light rounded-full">
              <Image
                src="/images/part_1.png"
                width={300}
                height={300}
                className="w-[260px] sm:w-[290px]"
                alt="hero"
              />
            </div>
          </div>
        </div>
        <div className="w-full hidden sm:flex">
          <CourseIcons />
        </div>
        <div className="flex flex-col">
          <HeadBox
            url="/courses"
            title="آخرین دوره های مجموعه"
            buttonTitle="مشاهده همه دوره ها"
          />
          <CardcourseList data={data} router={router} />
        </div>
        <div className="flex flex-col">
          <HeadBox
            url="/blog"
            title="آخرین مقالات سایت"
            buttonTitle="مشاهده همه مقالات"
            className="text-secondary"
          />
          <ArticleCardList />
        </div>

        {/* Teachers Section Start */}
        <TeacherCarusel />
        {/* Teachers Section End*/}

        <div className="flex flex-col">
          <HeadBox
            url="/courses"
            title="دوره های محبوب"
            buttonTitle="مشاهده همه دوره ها"
            className="text-secondary"
          />
          <CardcourseList data={data} router={router} />
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(){
  const {data} = await axios.get("http://localhost:3000/api/productsList?per_page=8")
if(!data){
  notFound = true
}
return{
  props:{data}
}
}

export default Home;
