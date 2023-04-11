import React from "react";

function PriceFormat({ price,className }) {
  return (
    <div className={`font-vazir text-secondary-default ${className}`}>
        {(price).toLocaleString('fa-IR')}
        <span> تومان</span>
    </div>
  )
    
 
}

export default PriceFormat;
