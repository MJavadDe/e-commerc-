import Image from 'next/image';
import React from 'react';
import style from './Footer.module.css'
const FooterBottom = () => {
    return (
        <div className='border-t-2 flex items-center justify-around sm:py-5 py-3 text-[#B4CFC3]'>
            <h1 className='text-[7px] sm:text-sm'>
              برند به عنوان یک نام و علامت تجاری ثبت شده است. کلیه حقوق این وب سایت برای  محفوظ است ©
            </h1>
            <div className="socialMedias flex justify-between gap-x-3">
                <span className={style.span}>
                    <img src="/google-plus w.png" alt="" />
                </span>
                <span className={style.span}>
                    <img src="/twitter w.png" alt="" />
                </span>
                <span className={style.span}>
                    <img src="/facebook w.png" alt="" />
                </span>
            </div>
        </div>
    );
};

export default FooterBottom;