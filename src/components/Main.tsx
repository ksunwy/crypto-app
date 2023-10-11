import React from 'react';
import BaseButton from './ui/buttons/BaseButton';

const Main: React.FC = () => {
    return (
        <main
            className='lg:flex lg:justify-between grid mx-auto justify-center main max-w-[375px] 
        lg:max-w-[1200px] text-center lg:text-start mb-[120px]'
        >
            <div className="flex flex-col">
                <div
                    className="lg:text-[80px] text-[46px] lg:leading-[88px] leading-[51px] tracking-tight font-semibold 
                lg:mt-[100px] mt-5 lg:max-w-[692px] max-w-[335px] ml-4 lg:ml-0"
                >
                    <h1>Crypto payments for <span className='text-[#41A4DF]'>telegram bots</span></h1>
                </div>
                <div className="flex flex-col lg:gap-8 gap-3 lg:justify-start justify-center items-center lg:items-start lg:my-8 mt-6">
                    <h2 className='lg:text-xl text-lg leading-[24px] max-w-[346px]'>
                        Seamlessly accept crypto payments in your Telegram bots and services.
                    </h2>
                    <BaseButton>Get Started</BaseButton>
                </div>
                <div className="newIcons mt-[24px]">

                </div>
                <div className=" flex flex-col mt-4 gap-y-3 items-center justify-center lg:items-start lg:justify-start mb-8">
                    <p className='lg:text-xl text-lg leading-[24px]'>Popular bots use Crypto Pay</p>
                </div>
            </div>
            <div
                className="lg:flex justify-center mb-6 newPhone"
            >
            </div>
        </main>
    )
}

export default Main
