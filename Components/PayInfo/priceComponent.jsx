import PriceFormat from '@/utilitie/priceFormat';
import React from 'react';

const PriceComponent = ({price = 360000,title = 'جمع'},className) => {
    return (
        <div className={`flex justify-between  p-3 ${className}`}>
            <span>{title}</span>
            <span><PriceFormat price={price}/></span>
        </div>
    );
};

export default PriceComponent;