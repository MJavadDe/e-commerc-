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
      <div className="min-h-screen flex flex-col justify-between px-15 py-5">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="my-14">{children}</main>
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
