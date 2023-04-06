import React from 'react';
import style from './Footer.module.css'

const SpecialHead = (props) => {
    return (
        <p className={props.className}>
           {props.title} 
        </p>
    );
};

export default SpecialHead;