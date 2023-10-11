import React from 'react';

const NumberButton = ({ children, ...rest }: React.ComponentProps<'button'>) => {
  return (
    <button
      {...rest}
      className='rounded-full lg:w-16 lg:h-16 w-9 h-9 tracking-tight lg:text-[42px] text-2xl
        font-semibold lg:leading-[46px] leading-[26px] cursor-default numberBtn text-white dark:text-black'
    >
      {children}
    </button>
  )
}

export default NumberButton