import React from 'react';
import style from './Footer.module.css'

const SpecialHead = ({className, title}) => {
    return (
        <p className={`${className}  text-secondary pl-3 ${style.gradientborderbottom} `}>
           {title} 
        </p>
    );
};

export default SpecialHead;