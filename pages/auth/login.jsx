import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "@/Components/layout";
import AuthLayout from "@/layouts/authLayout/authLayout";
import LoginForm from "@/Components/loginForm/loginForm";
import Image from "next/image";

const Login = ({animation}) => {
  return (
    <AuthLayout image="/images/login.png">
      <LoginForm />
    </AuthLayout>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {animation:false}, // will be passed to the page component as props
  }
}

export default Login;