import Button from "@/Commons/buttons/Button";
import React, { useState } from "react";
import style from "./authLayout.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useEffect } from "react";

const AuthLayout = ({ children, image }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleClickSignup = () => {
    // setActive(true);
    router.replace("/auth/signup");
  };
  const handleClickLogin = () => {
    // setActive(false);
    router.replace('/auth/login')
  };
  useEffect(() => {
    router.pathname == "/auth/signup" ? setActive(true) : setActive(false);
  }, []);

  return (
    <div className="bg-primary-very-light bg-circle flex flex-col-reverse  lg:flex-row justify-between items-center lg:h-[60rem]">
      {children}

      <div className="flex flex-col items-center py-20 ">
        <Image
          className="z-10 hidden lg:block"
          src={image}
          width={500}
          height={300}
          alt="register"
        />

        <div className="bg-secondary-light w-[212px] h-[60px] flex justify-between items-center rounded-full relative">
          <div
            className={`w-[50%] bg-white rounded-full absolute h-[90%] transition-all duration-1000   ${
              active ? style.left : style.right
            }`}
          ></div>

          <Button
            onClick={() => handleClickSignup()}
            className={`w-[50%] h-[90%] flex justify-center items-center cursor-pointer text-blue z-10`}
          >
            ثبت نام
          </Button>
          <Button
            onClick={() => handleClickLogin()}
            className={`w-[50%] h-[90%] flex justify-center items-center cursor-pointer text-blue z-10`}
          >
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
