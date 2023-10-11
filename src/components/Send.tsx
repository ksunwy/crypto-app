import React from 'react';

const Send: React.FC = () => {
  return (
    <section className='text-black dark:text-white bg-[#F7F9FB] w-[335px] lg:w-[692px] dark:bg-[#18181D] p-8 pt-0 
    lg:pb-[42px] lg:px-[56px] rounded-[40px] max-h-[384px] lg:max-h-[510px] mx-auto lg:mx-0
    flex-col mt-6'>
      <div className="newHalfPhone flex mx-auto justify-center items-center" />
      <div className='lg:mt-5 mt-6'>
        <h3
          className='font-semibold lg:text-[42px] text-[28px] lg:leading-[46px] leading-[31px] tracking-tight lg:mb-5 
                mb-4 lg:max-w-[580px] max-w-[271px]'
        >
          Send coins to users
        </h3>
        <p
          className='lg:max-w-[580px] max-w-[271px] lg:text-xl text-lg lg:leading-6 leading-[20px] text-[#3F3F40] 
                dark:text-[#D1D1D2]'
        >
          Automate payouts to users with
          <span className='text-[#41A4DF]'> transfer </span>
          API method
        </p>
      </div>
    </section>
  )
}

export default Send