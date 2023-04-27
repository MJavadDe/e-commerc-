import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "@/layouts/layout";
import AuthLayout from "@/layouts/authLayout/authLayout";
import LoginForm from "@/Components/loginForm/loginForm";
import Image from "next/image";
import validation from './../../hooks/signIn/signin';

const Login = ({ animation }) => {
  const [active, setActive] = useState(true);
  const [serverResponse, setServerResponse] = useState(null)
  const router = useRouter()

    const signInFunction = async (username,password) => {
      setServerResponse(<span>لطفا منتظر بمانید</span>)
      let isUser = await validation(username,password);
      console.log(isUser);
      if(isUser){
        router.push("/dashbord")
        setServerResponse(" ")
        setServerResponse(<span className="text-green-800">با موفقیت وارد شدید</span>)
      }else{
        setServerResponse(" ")
        setServerResponse(<span className="text-red-600">کاربری با این مشخصات وجود ندارد</span>)
      }
      
    }
   
  return (
    <AuthLayout image="/images/login.png" active={active} setActive={setActive}>
      <LoginForm signInFunction={signInFunction} ServerResponse={serverResponse} />
    </AuthLayout>
  );
};
export async function getServerSideProps(context) {
  return {
    props: { animation: false }, // will be passed to the page component as props
  };
}

export default Login;
