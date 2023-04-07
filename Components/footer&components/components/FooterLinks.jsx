import React, { useEffect, useState } from 'react';
import SpecialHead from './SpecialHead';
import style from './Footer.module.css'
import Link from 'next/link';
const FooterLinks = (props) => {
console.log(style);
    return (
        <div className='flex flex-col gap-2 basis-2/12'>
            <SpecialHead className={`${style.bborder} top-0 text-[#61CE70] text-[22px] py-1`} title={props.content.title}/>
            <p>
                <Link href={"/"}>{props.content.headOne}</Link>
            </p>
            <p>
                <Link href={"/"}>{props.content.headTwo}</Link>
            </p>
            <p>
                <Link href={"/"}>{props.content.headThree}</Link>
            </p>
        </div>
    );
};

export default FooterLinks;