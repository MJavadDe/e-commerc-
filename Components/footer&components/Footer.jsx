import React from "react";
import FooterBottom from "./components/FooterBottom";
import FooterTop from "./components/FooterTop";

const Footer = () => {
  return (
    <div className="mx-auto rounded-md  flex flex-col  text-white font-vazir bg-primary ">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
