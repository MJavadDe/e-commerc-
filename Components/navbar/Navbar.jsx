import React, { useRef } from "react";
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
  const ref = useRef();

  const handleClick = (event) => {
    console.log(event.target);
    ref.current.style.width = `${event.target.offsetWidth}px`;
    ref.current.style.left = `${event.target.offsetLeft}px`;
  };

  return (
    <div className="mx-auto bg-primary-light flex font-vazir justify-between px-4 py-[15px] rounded-md">
      <div>
        <div className="md:hidden">
          {<MenuIcon className=" text-secondary text-4xl cursor-pointer" />}
        </div>
        <div className="relative hidden md:flex items-center gap-14 text-blue">
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
          <NavLink onClick={handleClick} children="خانه" url="" />
          <NavLink onClick={handleClick} children="دوره ها" url="courses" />
          <NavLink onClick={handleClick} children="بلاگ" url="blog" />
          <NavLink onClick={handleClick} children="تماس با ما" url="Contact" />
          <NavLink onClick={handleClick} children="درباره ما" url="aboutUs" />
          <div
            ref={ref}
            className="absolute transition-all w-20 bottom-0 border-primary border-b-2"
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
