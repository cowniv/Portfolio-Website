import React from 'react';

const Button = ({children, onClick, variant }) => {
    const variantClasses = {
        primary: 'bg-blueSecondary text-white px-[49px] py-[7px] rounded-full dm-sans-text-bold text-[24px] hover:bg-transparent hover:text-blueSecondary border border-blueSecondary transition-all',
        secondary: 'bg-transparent border border-blueSecondary text-blueSecondary px-[49px] py-[7px] rounded-full dm-sans-text-bold text-[24px] hover:bg-blueSecondary hover:text-white transition-all',
    }

  return (
    <button className={variantClasses[variant]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;