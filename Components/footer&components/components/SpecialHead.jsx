import React from 'react';
import style from './Footer.module.css'

const SpecialHead = ({className, title}) => {
    return (
        <p className={`top-0 text-secondary-300 md:text-lg text-[16px] w-fit py-1 ${className} ${style.gradientborderbottom} `}>
           {title} 
        </p>
    );
};

export default SpecialHead;