import "@/styles/globals.css";
import Layout from "./../Components/layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
export default function App({ Component, pageProps, ...appProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
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
