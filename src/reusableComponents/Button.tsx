import React from "react";

interface ButtonProps{
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // Allows for any additional props to be passed through the component
}

function Button({children, className, ...rest}: ButtonProps){
    return (
        <button 
            {...rest}
            className={className}
        >
            {children}
        </button>
    );
}

export default Button;