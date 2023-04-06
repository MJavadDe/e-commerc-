import React from "react";
import Button from "@/Commons/buttons/Button";
import Link from "next/link";
import "public/shopping-bag.png";
import "public/user.png";
import "public/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#F3FCF8] top-[30px] flex justify-between px-4 w-full rounded-md">
      <div className="grid grid-flow-col gap-4 items-center">
        <Link href="/">
          <Button children={<img src="logo.png"></img>} />
        </Link>
        <Link href="/">خانه</Link>
        <Link href="/courses">دوره ها</Link>
        <Link href="/blog">بلاگ</Link>
        <Link href="/connect">تماس با ما</Link>
        <Link href="/aboutUs">درباره ما</Link>
      </div>
      <div className="grid grid-flow-col gap-2 items-center">
        <Link href="/shopcart">
          <Button
            className={
              "bg-[#198643] rounded-full w-[40px] h-[40px] grid justify-center items-center"
            }
          >
            <img src="shopping-bag.png"></img>
          </Button>
        </Link>
        <Link href="/auth"></Link>
        <Link href="/dashbord">
          <Button
            className={
              "bg-[#198643] rounded-full w-[40px] h-[40px] grid justify-center items-center"
            }
          >
            <img src="user.png"></img>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
