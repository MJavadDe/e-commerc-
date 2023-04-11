import React from "react";

function PriceFormat({ price,className }) {
  return (
    <div className={`${className}`}>
        {(price).toLocaleString('fa-IR')}
        <span>تومان</span>
    </div>
  )
    
 
}

export default PriceFormat;
