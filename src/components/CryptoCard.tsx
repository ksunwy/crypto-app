import React from 'react';
import Image from 'next/image';
import NumberButton from './ui/buttons/NumberButton';

const CryptoCard: React.FC = () => {
    return (
        <div
            className='bg-[#F7F9FB] dark:bg-[#18181D] dark:text-white lg:py-[120px] 
        py-8 justify-center items-center lg:mt-[120px] mt-20'
        >
            <h2
                className='text-center font-semibold lg:text-[56px] text-[32px] lg:leading-[62px] leading-[35px] 
            tracking-tight mb-10 max-w-[300px] lg:max-w-[1200px] items-center mx-auto'
            >
                Quick start using
                <span className='text-[#41A4DF]'> Crypto Pay</span>
            </h2>
            <div className="max-w-[1200px] flex flex-col mx-auto lg:gap-y-10 gap-y-6">

                <div className="lg:flex lg:justify-between flex-row-reverse lg:mx-0 mx-auto justify-center ">
                    <Image
                        src={'/card.jpg'}
                        alt={'card'}
                        width={590}
                        height={488}
                        className='flex lg:mb-0 lg:w-[590px] w-[335px] rounded-[40px]'
                    />
                    <div className="flex flex-col justify-center mx-auto lg:mx-0 items-start">
                        <div className="lg:flex-col flex items-baseline">
                            <NumberButton>1</NumberButton>
                            <h3 className='lg:my-5 my-4 font-semibold leading-[46px] tracking-tight lg:text-[42px] text-[28px] ml-4 lg:ml-0'>
                                Authorizing your app
                            </h3>
                        </div>
                        <ul className='flex flex-col gap-y-2 lg:text-xl text-lg lg:leading-6 leading-[22px] lg:ml-0 ml-[52px]'>
                            <li>1. Open <span className='text-[#41A4DF]'>@CryptoBot</span></li>
                            <li>2. Go to <span className='text-[#41A4DF]'>Crypto Pay</span></li>
                            <li>3. Tap <span className='text-[#41A4DF]'>Create App</span></li>
                            <li>4. Get <span className='text-[#41A4DF]'>API Token</span></li>
                        </ul>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between lg:mx-0 mx-auto justify-center items-center ">
                    <Image
                        src={'/card2.jpg'}
                        alt={'card2'}
                        width={590}
                        height={488}
                        className='flex lg:mb-0 lg:w-[590px] w-[335px] rounded-[40px]'
                    />
                    <div className="flex flex-col justify-center mx-auto lg:mx-0 items-start">
                        <div className="lg:flex-col flex items-baseline">
                            <NumberButton>2</NumberButton>
                            <h3
                                className='lg:my-5 my-4 font-semibold lg:leading-[46px] leading-[31px] tracking-tight lg:text-[42px] text-[28px] 
                            ml-4 lg:ml-0 max-w-[193px] lg:max-w-[500px]'
                            >
                                Crypto Pay API Request
                            </h3>
                        </div>
                        <p className='lg:max-w-[380px] max-w-[280px] lg:text-xl text-lg lg:leading-6 leading-[22px] mb-5 lg:ml-0 ml-[52px]'>
                            Requests are only served over HTTPS To pass parameters use:
                        </p>
                        <ul className='flex flex-col gap-y-2 lg:text-xl text-lg lg:leading-6 leading-[22px] list-disc lg:ml-8 ml-[83px]'>
                            <li className='text-[#41A4DF]'>URL query string</li>
                            <li className='text-[#41A4DF]'>application/json</li>
                            <li className='text-[#41A4DF] max-w-[260px] lg:max-w-[450px]'>application/x-www-form-urlencoded</li>
                            <li className='text-[#41A4DF]'>multipart/form-data</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between flex-row-reverse lg:mx-0 mx-auto justify-center items-center">
                    <Image
                        src={'/card3.jpg'}
                        alt={'card3'}
                        width={590}
                        height={488}
                        className='flex lg:mb-0 lg:w-[590px] w-[335px] rounded-[40px]'
                    />
                    <div className="flex flex-col justify-center mx-auto lg:mx-0 items-start">
                        <div className="lg:flex-col flex items-baseline">
                            <NumberButton>3</NumberButton>
                            <h3 className='lg:my-5 my-4 font-semibold leading-[46px] tracking-tight lg:text-[42px] text-[28px] ml-4 lg:ml-0'>
                                Getting updates
                            </h3>
                        </div>
                        <p className='lg:max-w-[350px] max-w-[280px] lg:text-xl text-lg lg:leading-6 leading-[22px] mb-5 lg:ml-0 ml-[52px]'>
                            There are two ways of receiving updates for your app:
                        </p>
                        <ul className='flex flex-col gap-y-2 lg:text-xl text-lg lg:leading-6 leading-[22px] list-disc lg:ml-8 ml-[83px]'>
                            <li className='text-[#41A4DF] lg:max-w-[440px] max-w-[260px]'>
                                getInvoices
                                <span className='text-black dark:text-white'> method to get a list of created invoices.</span>
                            </li>
                            <li className='text-[#41A4DF] lg:max-w-[440px] max-w-[260px]'>
                                Webhooks
                                <span className='text-black dark:text-white'> to receive updates in realtime.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CryptoCard