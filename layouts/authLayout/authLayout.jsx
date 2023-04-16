import Button from "@/Commons/buttons/Button";
import React, { useState } from "react";
import style from "./authLayout.module.css";

const AuthLayout = () => {
  const [active, setActive] = useState(false);
  const handleClick1 = () => {
    setActive(true);
  };
  const handleClick2 = () => {
    setActive(false);
  };
  return (
    <div className="bg-primary-very-light bg-circle">
      <div className="bg-secondary-light w-[212px] h-[60px] flex justify-between items-center rounded-full relative">
        <div
          className={`w-[50%] bg-white rounded-full absolute h-[90%] transition ease-in-out delay-150 ${
            active ? style.left : style.right
          }`}
        ></div>

        <Button
          onClick={() => handleClick1()}
          className={`w-[50%] h-[90%] flex justify-center items-center cursor-pointer text-blue z-10`}
        >
          ثبت نام
        </Button>
        <Button
          onClick={() => handleClick2()}
          className={`w-[50%] h-[90%] flex justify-center items-center cursor-pointer text-blue z-10`}
        >
          ورود
        </Button>
      </div>
    </div>
  );
};

export default AuthLayout;
