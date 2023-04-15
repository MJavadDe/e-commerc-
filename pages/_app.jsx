import "@/styles/globals.css";
import Layout from "./../Components/layout";
import React from "react";
import { Fragment } from "react";
export default function App({ Component, pageProps , ...appProps }) {
  const isLayoutNeeded = [`/404`].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNeeded ? React.Fragment : Layout;
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
