import "@/styles/globals.css";
import Layout from "./../Components/layout";
import React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
export default function App({ Component, pageProps, ...appProps }) {
  const isLayoutNeeded = [`/404`].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNeeded ? React.Fragment : Layout;
  const isFooterNeeded = [
    `/auth/login`,
    `/auth/signup`,
    `/auth/forgetpass`,
  ].includes(appProps.router.pathname);
  const footer = isFooterNeeded ? false : true;
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <LayoutComponent animation={pageProps.animation} footer={footer}>
          <Component {...pageProps} />
        </LayoutComponent>
      </Hydrate>
    </QueryClientProvider>
  );
}
