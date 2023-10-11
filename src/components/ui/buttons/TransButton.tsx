import React from 'react';

const TransButton = ({ children, ...rest }: React.ComponentProps<'button'>) => {
  return (
    <button
      {...rest}
      className='flex justify-center items-center px-[42px] py-[18px] w-[163px] lg:w-[193px] 
        h-[46px] lg:h-[60px] rounded-full text-[13px] lg:text-lg transition text-[#297EE2] dark:text-white
        bg-[#E5F0FC] hover:bg-[#41a4df29] dark:bg-transparent dark:hover:bg-transparent 
        border border-white dark:border-[#A5A5A5] dark:hover:border-white'
    >
      {children}
    </button>
  )
}

export default TransButton
