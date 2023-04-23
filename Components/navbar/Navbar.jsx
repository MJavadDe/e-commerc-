import React, { useEffect, useRef } from "react";
import Button from "@/Commons/buttons/Button";
import Link from "next/link";
import NavLink from "./NavLink";
import Avatar from "@/Components/avatar/Avatar";
import Search from "@/Components/searchbox/searchbox";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "public/shopping-bag.png";

import "public/logo-1.png";
import "public/profile.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  function checkUrl ( NavLink) {
    for (NavLink ; ; ) {
      if (NavLink.url == "" ){ref.current.style.left =NavLink.offsetLeft && NavLink.offsetWidth };
    }
  }

  const ref = useRef();

  const refrence = useRef();
  const handleClick = (event) => {
     changeNavBorder(event.target);
  };

  const handleHover = (event) => {
    changeNavBorder(event.target);
  };

  const handelOnMouseOutNavBar = () => {
    const currentNav = refrence.current.querySelector(
      `a[href="${router.pathname}"]`
    );
    changeNavBorder(currentNav);
  };
  const changeNavBorder = (el) => {
   if(el){
      ref.current.style.width = `${el.offsetWidth}px`;
      ref.current.style.left = `${el.offsetLeft}px`;
    }
  };

  useEffect(() => {
    const currentNav = refrence.current.querySelector(
      `a[href="${router.pathname}"]`
    );
      changeNavBorder(currentNav);
    
  }, [router.pathname]);

  const handleSidebar = () => {
    if (document.querySelector("#sidebar").classList.contains("fixed")) {
      document.querySelector("#sidebar").classList.replace("fixed", "hidden");
    } else {
      document.querySelector("#sidebar").classList.replace("hidden", "fixed");
    }
  };

  return (
    <div className="mx-auto bg-primary-light flex font-vazir justify-between px-4 py-[15px] rounded-md">
      <div className="flex items-center">
        <div className="md:hidden">
          {
            <MenuIcon
              className=" text-secondary text-4x1 cursor-pointer"
              onClick={handleSidebar}
            />
          }
          <div
            className="hidden top-0 right-0 w-[350px] bg-white rounded-l-md h-screen z-50 transition-all"
            id="sidebar"
          >
            <div className="flex justify-between items-center px-[20px] py-[12.5px] bg-secondary-very-light rounded-tl-md">
              <NavLink
                url=""
                children={
                  <Button
                    children={
                      <Image
                        src="/logo-1.png"
                        width={40}
                        height={40}
                        alt="logo"
                      />
                    }
                    className={""}
                  />
                }
              />
              <div>
                {
                  <CloseIcon
                    className="text-black cursor-pointer w-[30px] h-[30px]"
                    onClick={handleSidebar}
                  />
                }
              </div>
            </div>
            <div className="px-[12px] py-[16px]">
              <div className="bg-secondary-very-light rounded-md px-[10px] py-[8px]">
                <div className="flex justify-center items-center gap-[29px]">
                  <div className="rounded-full">
                    <img src="/profile.png" alt="profileimg" />
                  </div>
                  <span className="text-center">مریم مهاجر </span>
                </div>
                <Search
                  className={"bg-[#82D8B9] rounded-[50px] mt-[8px]"}
                  placeholder={"جستجوی دوره..."}
                ></Search>
              </div>
              <div className="bg-secondary-very-light rounded-md mt-[16px] px-[12.5px] pt-[23px] pb-[15px] grid grid-flow-row gap-[5px]">
                <div className="px-[21px] py-[10px] rounded-md text-white bg-primary-dark">
                  <NavLink children="خانه" url="" />
                </div>
                <div className="px-[21px] py-[10px] rounded-md text-secondary-light hover:bg-primary-light transition-all">
                  <NavLink children="دوره ها" url="courses" />
                </div>
                <div className="px-[21px] py-[10px] rounded-md text-secondary-light hover:bg-primary-light transition-all">
                  <NavLink children="بلاگ" url="blog" />
                </div>
                <div className="px-[21px] py-[10px] rounded-md text-secondary-light hover:bg-primary-light transition-all">
                  <NavLink children="تماس با ما" url="Contact" />
                </div>
                <div className="px-[21px] py-[10px] rounded-md text-secondary-light hover:bg-primary-light transition-all">
                  <NavLink children="درباره ما" url="aboutUs" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={refrence} onMouseLeave={handelOnMouseOutNavBar} className="relative hidden md:flex items-center gap-14 text-blue">
          <NavLink
            url=""
            children={
              <Button
                children={
                  <Image src="/logo-1.png" width={40} height={40} alt="logo" />
                }
                className={"logoSite"}
              />
            }
          />
          <NavLink   onMouseEnter={handleHover} onMouseLeave={()=>{}}   onClick={handleClick} children="خانه"url=""/>
          <NavLink   onMouseEnter={handleHover} onMouseLeave={()=>{}}   onClick={handleClick} children="دوره ها" url="courses" />
          <NavLink   onMouseEnter={handleHover} onMouseLeave={()=>{}}   onClick={handleClick} children="بلاگ" url="blog" />
          <NavLink   onMouseEnter={handleHover} onMouseLeave={()=>{}}   onClick={handleClick} children="تماس با ما" url="Contact" />
          <NavLink   onMouseEnter={handleHover} onMouseLeave={()=>{}}     onClick={handleClick} children="درباره ما" url="aboutUs" />
          <div
            ref={ref}
            className={`absolute transition-all w-6 bottom-0 left-[77.5%] border-primary border-b-2`}
          ></div>
        </div>
      </div>
      <div className="flex md:hidden">
        <NavLink
          url=""
          children={
            <Button
              children={
                <Image src="/logo-1.png" width={40} height={40} alt="logo" />
              }
              className={""}
            />
          }
        />
      </div>

      <div className="flex gap-2 bg- items-center">
        <Link href="/cart" className="hidden md:block">
          <Button
            className={
              "bg-[#198643] rounded-full w-[40px] h-[40px] grid justify-center items-center"
            }
          >
            <i>{<ShoppingBag className="text-white" />}</i>
          </Button>
        </Link>
        <Link href="/auth"></Link>
        <Link href="/auth">
          <Button
            className={
              "bg-[#198643] rounded-full w-[40px] h-[40px] grid justify-center items-center"
            }
          >
            <i>{<PersonIcon className="text-white" />}</i>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
