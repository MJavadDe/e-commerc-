import React from 'react';
import FooterBottom from './components/FooterBottom';
import FooterTop from './components/FooterTop';

const Footer = () => {
    return (
        <div className='mx-auto rounded-md flex flex-col md:flex-wrap text-[#F2FCF8] font-vazir bg-[#3C6E71] w-[90.92%]'>
           <FooterTop/>

            <FooterBottom/>
        </div>
    );
};

export default Footer;