import Errore404 from "@/Components/Error404/Errore404";
import React from "react";
import Layout from "../layouts/layout";
import { useRouter } from "next/router";

function Error(props) {
  const router = useRouter();
  return <Errore404 />;
}

export default Error;
