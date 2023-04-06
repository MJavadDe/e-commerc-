import Image from 'next/image';
import React from 'react';

const FooterBottom = () => {
    return (
        <div className='border-t-2 border-[#B1AFAF] flex items-center justify-around py-5 text-[#B4CFC3]'>
            <h1>
                 برند به عنوان یک نام و علامت تجاری ثبت شده است. کلیه حقوق این وب سایت برای  محفوظ است 
            </h1>
            <div className="socialMedias flex justify-between gap-x-3">
                <span>
                    <img src="/google-plus w.png" alt="" />
                </span>
                <span>
                    <img src="/twitter w.png" alt="" />
                </span>
                <span>
                    <img src="/facebook w.png" alt="" />
                </span>
            </div>
        </div>
    );
};

export default FooterBottom;