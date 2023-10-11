import React from 'react';
import Image from 'next/image';

const Statistics: React.FC = () => {
  return (
    <section className='text-black dark:text-white bg-[#F7F9FB] w-[335px] lg:w-[692px] dark:bg-[#18181D] p-8 
    lg:py-[42px] lg:px-[56px] rounded-[40px] max-h-[482px] lg:max-h-[748px] mx-auto lg:mx-0
    flex-col lg:mt-0 mt-4'>
      <div className="">
        <Image src={'/statistics.jpg'} alt={'statistics'} width={580} height={530} className='lg:rounded-[40px] rounded-[32px]' />
      </div>
      <div className='mt-6'>
        <h3
          className='font-semibold lg:text-[42px] text-[28px] lg:leading-[46px] leading-[31px] tracking-tight lg:mb-5 
                mb-4 lg:max-w-[400px] max-w-[251px]'
        >
          Payment statistics
        </h3>
        <p
          className='lg:max-w-[520px] max-w-[271px] lg:text-xl text-lg lg:leading-6 leading-[20px] text-[#3F3F40] 
                dark:text-[#D1D1D2]'
        >
          Open
          <span className='text-[#41A4DF]'> @CryptoBot</span>,
          go to
          <span className='text-[#41A4DF]'> Crypto Pay </span>
          and
          <span className='text-[#41A4DF]'> My Apps</span>,
          App Name to get Statistics
        </p>
      </div>
    </section>
  )
}

export default Statistics