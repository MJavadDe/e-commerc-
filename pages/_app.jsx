import "@/styles/globals.css";
import Layout from "../layouts/layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
export default function App({ Component, pageProps, ...appProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout
          animation={pageProps.animation ? false : true}
          footer={pageProps.footer ? false : true}
        >
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
