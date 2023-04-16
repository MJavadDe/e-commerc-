import React from 'react';
import style from './Footer.module.css'

const SpecialHead = ({className, title}) => {
    return (
        <p className={`${className} ${style.gradientborderbottom} `}>
           {title} 
        </p>
    );
};

export default SpecialHead;