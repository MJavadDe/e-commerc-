import React from 'react';

import FooterLinks from './FooterLinks';
import NamadComponent from './NamadComponent';
const FooterTop = () => {
    return (
        <div className='relative w-full flex justify-center items-center p-10 rounded-md'>
            <div className='w-[87.85%] flex gap-40'>
                <FooterLinks content= {{title: "دسترسی",headOne:"دوره ها",headTwo:"معرفی مدرسین",headThree:"بلاگ"}}/>
                <FooterLinks content= {{title: "متداول",headOne:"پرسش و پاسخ",headTwo:" درخواست مشاوره ",headThree:"ورود"}}/>
                <FooterLinks content= {{title: "ارتباط با ما",headOne:"تماس با ما  ",headTwo:"درباره ما"}}/>
                <NamadComponent content={{title: "نماد های اینترنتی " ,src1:"/1.png",src2:"/enamad_1.png",src3:"/samandehi_logo.png"}}/>
            </div>
        </div>
    );
};

export default FooterTop;