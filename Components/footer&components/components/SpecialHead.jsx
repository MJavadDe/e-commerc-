import React from 'react';
import style from './Footer.module.css'

const SpecialHead = ({className}) => {
const SpecialHead = ({className, title}) => {
    return (
        <p className={`${className} ${style.gradientborderbottom} `}>
        </p>
    );
};

export default SpecialHead;