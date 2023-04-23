import React from 'react';

const Button = ({children,className,onClick,ref}) => {
    return (
        <div className={`text-center ${className}`} onClick={onClick} ref={ref}>
           {children}
        </div>
    );
};

export default Button;