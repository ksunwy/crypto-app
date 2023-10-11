import React from 'react';
import Image from 'next/image';

const Anonymous = () => {
  return (
    <section className='lg:py-[42px] lg:px-[56px] p-8 bg-[#F7F9FB] dark:bg-[#18181D] rounded-[40px]
    lg:w-[488px] w-[335px] flex flex-col mx-auto lg:mx-0 mt-6'>
      <div className="">
        <Image src={'/anonymous.jpg'} alt={'anonymous'} width={404} height={222} className='lg:rounded-[40px] rounded-[32px]' />
      </div>
      <div className='mt-6 lg:mt-5'>
        <h3
          className='font-semibold lg:text-[42px] text-[28px] lg:leading-[46px] leading-[31px] tracking-tight lg:mb-5 
                mb-4 lg:max-w-[376px] max-w-[271px]'
        >
          Anonymous payments
        </h3>
        <p
          className='lg:max-w-[346px] max-w-[271px] lg:text-xl text-lg lg:leading-6 leading-[20px] text-[#3F3F40] 
                dark:text-[#D1D1D2]'
        >
          Use allow_anonymous parameter in
          <span className='text-[#41A4DF]'> createInvoice </span>
          method to give user an option to remain private
        </p>
      </div>
    </section>
  )
}

export default Anonymous