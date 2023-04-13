import React from 'react';

import FooterLinks from './FooterLinks';
import NamadComponent from './NamadComponent';
const FooterTop = () => {
    return (
        <div className=' w-full flex flex-wrap rounded-md py-2 px-10 gap-3'>
                <FooterLinks content= {{title: "دسترسی",headOne:"دوره ها",headTwo:"معرفی مدرسین",headThree:"بلاگ",style:"text-[12px] text-white"}}/>
                <FooterLinks content= {{title: "متداول",headOne:"پرسش و پاسخ",headTwo:" درخواست مشاوره ",headThree:"ورود",style:"text-[12px]  text-white"}}/>
                <FooterLinks content= {{title: "ارتباط با ما",headOne:"تماس با ما  ",headTwo:"درباره ما",style:"text-[12px]  text-white" }}/>
                <NamadComponent content={{title: "نماد های اینترنتی " ,src1:"/1.png",src2:"/enamad_1.png",src3:"/samandehi_logo.png",style:"text-[12px]  text-white"}}/>
        </div>
    );
};

export default FooterTop;