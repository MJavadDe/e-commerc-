import Footer from "./footer&components/Footer";
import Navbar from "./navbar/Navbar";
import Head from "next/head";
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - online course`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Signika:wght@300;400&family=Vazirmatn:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="w-screen">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="w-screen mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
