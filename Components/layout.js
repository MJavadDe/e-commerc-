import Footer from "./footer&components/Footer";
import Navbar from "./navbar/Navbar";
import Head from "next/head";
import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useRouter } from "next/router";

const Layout = ({ children, footer , animation }) => {
  const router = useRouter();
  const onPageEnter = (node) => {
    gsap.fromTo(
      node,
      {
        x: 50,
        autoAlpha: 0,
        ease: "power1",
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power1",
      }
    );
  };

  const onPageExit = (node) => {
    gsap.fromTo(
      node,
      {
        x: 0,
        autoAlpha: 1,
        ease: "power1.out",
      },
      {
        x: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  };
  return (
    <>
      <Head>
        <title>online courses</title>
      </Head>
      <div className="min-h-screen flex flex-col justify-between md:px-15 px-5 py-5">
        <header className="w-full">
          <Navbar />
        </header>
        {animation && (
          <SwitchTransition>
            <Transition
              key={router.asPath}
              timeout={300}
              in={true}
              onEnter={onPageEnter}
              onExit={onPageExit}
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <main className="my-14">{children}</main>
            </Transition>
          </SwitchTransition>
        )}
        {!animation && <main className="my-14">{children}</main>}
        {footer && (
          <footer className="w-full">
            <Footer />
          </footer>
        )}
      </div>
    </>
  );
};

export default Layout;
