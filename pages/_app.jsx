import "@/styles/globals.css";
import Layout from "./../Components/layout";
export default function App({ Component, pageProps, ...appProps }) {
  

  return (
    <Layout animation={pageProps.animation ? false : true} footer={pageProps.footer ? false : true}>
      <Component {...pageProps} />
    </Layout>
  );
}
