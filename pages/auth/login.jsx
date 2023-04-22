import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "@/layouts/layout";
import AuthLayout from "@/layouts/authLayout/authLayout";
import LoginForm from "@/Components/loginForm/loginForm";
import Image from "next/image";

const Login = ({ animation }) => {
  const [active, setActive] = useState(true);

  return (
    <AuthLayout image="/images/login.png" active={active} setActive={setActive}>
      <LoginForm />
    </AuthLayout>
  );
};
export async function getServerSideProps(context) {
  return {
    props: { animation: false }, // will be passed to the page component as props
  };
}

export default Login;
