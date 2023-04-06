import Navbar from "./navbar/Navbar";
import Head from "next/head";
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - online course`}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
