import React from "react";
import Button from "@/Commons/buttons/Button";
import Link from "next/link";
import NavLink from "./NavLink";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import "public/shopping-bag.png";

import "public/logo-1.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mx-auto bg-primary-light flex font-vazir justify-between px-4 py-[15px] rounded-md">
      <div>
        <div className="md:hidden">
          {<MenuIcon/>}
        </div>
        <div className="hidden md:flex items-center gap-3">
        <NavLink url="" children={<Button children={<Image src="/logo-1.png" width={40} height={40} alt="logo" />} className={""}/>}/>
        <NavLink children="خانه" url=""/>
        <NavLink children="دوره ها" url="courses"/>
        <NavLink children="بلاگ" url="blog"/>
        <NavLink children="تماس با ما" url="Contact"/>
        <NavLink children="درباره ما" url="aboutUs"/>
        </div>
      </div>
      <div className="flex md:hidden">
          <NavLink url="" children={<Button children={<Image src="/logo-1.png" width={40} height={40} alt="logo" />} className={""}/>}/>
      </div>
      <div className="flex gap-2 bg- items-center">
        <Link href="/cart" className="hidden md:block">
          <Button
            className={
              "bg-[#198643] rounded-full w-[40px] h-[40px] grid justify-center items-center"
            }
          >
            <i>{<ShoppingBag className="text-white"/>}</i>
          </Button>
        </Link>
        <Link href="/auth"></Link>
        <Link href="/dashbord">
          <Button
            className={
              "bg-[#198643] rounded-full w-[40px] h-[40px] grid justify-center items-center"
            }
          >
          <i>{ <PersonIcon className="text-white"/> }</i>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
