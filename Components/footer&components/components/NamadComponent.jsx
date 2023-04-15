import React from 'react';
import SpecialHead from './SpecialHead';
import style from './Footer.module.css'
const NamadComponent = (props) => {
    return (
        <div className='w-6/12 md:w-4/12'>
            <div className={`flex gap-2 my-5`}>
                <div><img src={props.content.src1} className='bg-white rounded-md p-1' alt="" /></div>
                <div><img src={props.content.src2} className='bg-white rounded-md p-1' alt="" /></div>
                <div><img src={props.content.src3} className='bg-white rounded-md p-1' alt="" /></div>
            </div>
        </div>
    );
};

export default NamadComponent;