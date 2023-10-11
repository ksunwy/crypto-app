import React from 'react';

const BaseButton = ({ children, ...rest }: React.ComponentProps<'button'>) => {
  return (
    <button
      {...rest}
      className='justify-center items-center px-[42px] py-[18px] lg:inline-block
        rounded-full text-lg lg:text-xl transition text-white
        bg-[#41A4DF] hover:bg-[#297EE2]'
    >
      {children}
    </button>
  )
}

export default BaseButton