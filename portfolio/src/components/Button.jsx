import React from 'react';

const Button = ({children, onClick, variant, className}) => {
    const variantClasses = {
        primary: `bg-blueSecondary text-white px-[49px] py-[7px] rounded-full dm-sans-text-bold hover:bg-transparent hover:text-blueSecondary border border-blueSecondary transition-all ${className}`,
        secondary: `bg-transparent border border-blueSecondary text-blueSecondary px-[49px] py-[7px] rounded-full dm-sans-text-bold hover:bg-blueSecondary hover:text-white transition-all ${className}`,
    }

  return (
    <button className={variantClasses[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;