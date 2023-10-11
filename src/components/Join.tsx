import React from 'react';
import Image from 'next/image';
import BaseButton from './ui/buttons/BaseButton';

const Join: React.FC = () => {
    return (
        <div className='max-w-[1200px] flex flex-col mx-auto items-center justify-center lg:mb-20 mb-10'>
            <div className="flex flex-col items-center justify-center">
                <h2 className='font-semibold lg:text-[56px] text-[32px] lg:leading-[62px] leading-[35px] tracking-tight text-center lg:mt-6 mt-3'>
                    Join dev community
                </h2>
                <p className='lg:max-w-[590px] max-w-[335px] text-center lg:mt-10 mt-6'>
                    Connect with bot developers and explore the possibilities our crypto payments service unlocks.
                </p>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-x-6 gap-x-3 gap-y-6 lg:gap-y-0 items-baseline lg:my-10 my-6 text-xl mx-5">
                <figure className="flex flex-col justify-center items-center text-center max-w-[104px] lg:max-w-[180px]">
                    <Image src={'/js.svg'} alt={'js'} width={96} height={96} className='lg:w-24 w-[63px]' />
                    <figcaption>crypto-pay-api</figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center ">
                    <Image src={'/net.svg'} alt={'net'} width={96} height={96} className='lg:w-24 w-[63px]' />
                    <figcaption>CryptoPay</figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center text-center max-w-[104px] lg:max-w-[180px]">
                    <Image src={'/php.svg'} alt={'php'} width={96} height={96} className='lg:w-24 w-[63px]' />
                    <figcaption>crypto-pay-api</figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center text-center max-w-[100px] lg:max-w-[180px] break-all">
                    <Image src={'/python.svg'} alt={'python'} width={96} height={96} className='lg:w-24 w-[63px]' />
                    <figcaption>aiocryptopay</figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center text-center max-w-[150px] ">
                    <Image src={'/go.svg'} alt={'go'} width={96} height={96} className='lg:w-24 w-[63px]' />
                    <figcaption>cryptobot-sdk-golang</figcaption>
                </figure>
            </div>
            <BaseButton>Open Devs chat</BaseButton>
        </div>
    )
}

export default Join