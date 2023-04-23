import "@/styles/globals.css";
import Layout from "../layouts/layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps, ...appProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <Layout
              animation={
                (pageProps.animation && pageProps.animation === false) ||
                pageProps.animation === false
                  ? false
                  : true
              }
              footer={pageProps.footer ? false : true}
            >
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
  );
}
