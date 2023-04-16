import React from 'react';
import style from './Footer.module.css'

const SpecialHead = ({className}) => {
    return (
        <p className={`${className} ${style.gradientborderbottom} `}>
           {props.title} 
        </p>
    );
};

export default SpecialHead;