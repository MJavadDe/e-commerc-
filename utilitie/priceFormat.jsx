import React from "react";

function PriceFormat({ price,className }) {
  const num=parseInt(price)
  return (
    <div className={`font-vazir text-secondary-default ${className}`}>
      {num.toLocaleString("fa-IR")}
      <span> تومان</span>
    </div>
  );
    
 
}

export default PriceFormat;
