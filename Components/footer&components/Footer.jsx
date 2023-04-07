import React from 'react';
import FooterBottom from './components/FooterBottom';
import FooterTop from './components/FooterTop';

const Footer = () => {
    return (
        <div className='mx-auto rounded-md flex flex-col w-fit text-[#F2FCF8] font-vazir bg-[#3C6E71]'>
           <FooterTop/>
            <FooterBottom/>
        </div>
    );
};

export default Footer;