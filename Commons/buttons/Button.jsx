import React from 'react';

const Button = ({children,className,onClick}) => {
    return (
        <div className={`text-center ${className}`} onClick={onClick}>
           {children}
        </div>
    );
};

export default Button;