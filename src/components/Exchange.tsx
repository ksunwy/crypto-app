import React from 'react';
import Image from 'next/image';

const Exchange = () => {
    return (
        <section
            className='lg:py-[42px] lg:px-[56px] p-8 bg-[#F7F9FB] dark:bg-[#18181D] rounded-[40px]
        lg:w-[488px] w-[335px] flex flex-col mx-auto lg:mx-0'
        >
            <div className="flex relative items-center justify-center py-[5px] px-[50px] mt-[42px]">
                <Image
                    src="/usdt.svg"
                    alt="usdt"
                    width={96}
                    height={96}
                    className='absolute lg:left-[50px] p-0 left-12 lg:w-24 lg:h-24 w-[56px] h-[56px]'
                />
                <Image
                    src="/btc.svg"
                    alt="btc"
                    width={96}
                    height={96}
                    className='absolute lg:left-[84px] left-[69px] lg:w-24 lg:h-24 w-[56px] h-[56px]'
                />
                <Image
                    src="/ton.svg"
                    alt="ton"
                    width={96}
                    height={96}
                    className='absolute lg:left-[118px] left-[90px] lg:w-24 lg:h-24 w-[56px] h-[56px]'
                />
                <Image src={'/dollar.svg'} alt={'$'} width={96} height={96} className='lg:w-[96px] w-[56px] absolute lg:left-[230px] left-[165px]' />
                <div className="lg:w-[43px] lg:h-[25px] w-[37px] h-[20px] arrows absolute lg:left-[200px] left-[137px]" />
            </div>

            <div className='lg:mt-16 mt-14'>
                <h3
                    className='font-semibold lg:text-[42px] text-[28px] lg:leading-[46px] leading-[31px] tracking-tight lg:mb-5 
                mb-4 lg:max-w-[370px] max-w-[251px]'
                >
                    Real-time exchange rates
                </h3>
                <p
                    className='lg:max-w-[376px] max-w-[271px] lg:text-xl text-lg lg:leading-6 leading-[20px] text-[#3F3F40] 
                dark:text-[#D1D1D2]'
                >
                    Request up to date currency rate with the
                    <span className='text-[#41A4DF]'> @getExchangeRates </span>
                    API method
                </p>
            </div>
        </section>
    )
}

export default Exchange