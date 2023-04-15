import Footer from "./footer&components/Footer";
import Navbar from "./navbar/Navbar";
import Head from "next/head";
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - online course`}</title>
        
      </Head>
      <div className="min-h-screen flex flex-col justify-between md:px-15 px-5 py-5">
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
