"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Cryptocurrencies = () => {
    return (
        <section
            className='text-black dark:text-white bg-[#F7F9FB] w-[335px] lg:w-[1200px] dark:bg-[#18181D] p-8 
            lg:py-[42px] lg:px-[56px] rounded-[40px] max-h-[376px] lg:max-h-[345px] mx-auto lg:mx-0
            flex-col lg:flex-col-reverse lg:mb-5 mb-4'
        >
            <div className="flex flex-col justify-center lg:justify-start lg:order-1">
                <h2
                    className='font-semibold lg:text-[42px] text-[28px] lg:leading-[46px] leading-[31px] mx-auto lg:mx-0 
                tracking-tight lg:max-w-[1200px] max-w-[271px] lg:text-left text-center lg:mb-5 mb-4'
                >
                    Accept a wide range of cryptocurrencies
                </h2>
                <p
                    className='lg:text-xl text-lg lg:leading-6 leading-[22px] text-[#3F3F40] dark:text-[#D1D1D2] 
                    lg:max-w-[1200px] max-w-[271px] mx-auto lg:mx-0 lg:pb-[42px]'
                >
                    Bill any supported cryptocurrencies with asset parameter in
                    <span className='text-[#41A4DF]'> GetInvoice </span>
                    method
                </p>
            </div>
            <div
                className="grid lg:grid-cols-8 grid-cols-4 lg:gap-x-[45px] gap-x-3 lg:max-w-[1088px] 
            max-w-[271px] lg:ml-0 ml-[32px] lg:order-last my-6 lg:m-0"
            >
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 7.08,
                            duration: 0.23, 
                            delay: 1,
                        }}
                        src={'/eth.svg'} alt={'eth'}
                        width={96} height={96}
                        className='lg:w-[96px] w-[56px] mb-1'
                    />
                    <motion.p
                        transition={{
                            repeatDelay: 7.08,
                            duration: 0.3,
                            delay: 1,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        ETH
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 6.08,
                            duration: 0.23,  
                            delay: 2,
                        }}
                        src={'/usdt.svg'} alt={'usdt'}
                        width={96} height={96}
                        className='lg:w-[96px] w-[56px] mb-1'
                    />
                    <motion.p
                        transition={{
                            repeatDelay: 6.08,
                            duration: 0.3,
                            delay: 2,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        USDT
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 5.08,
                            duration: 0.23,   
                            delay: 3,
                        }}
                        src={'/ton.svg'} alt={'ton'}
                        width={96} height={96}
                        className='lg:w-[96px] w-[56px] mb-1'
                    />
                    <motion.p
                        transition={{
                            repeatDelay: 5.08,
                            duration: 0.3,
                            delay: 3,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        TON
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 4.08,
                            duration: 0.23, 
                            delay: 4,
                        }}
                        src={'/btc.svg'} alt={'btc'}
                        width={96} height={96}
                        className='lg:w-[96px] w-[56px] mb-1'
                    />
                    <motion.p
                        transition={{
                            repeatDelay: 4.08,
                            duration: 0.3,
                            delay: 4,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        BTC
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 3.08,
                            duration: 0.23, 
                            delay: 5,
                        }}
                        src={'/trx.svg'} alt={'trx'}
                        width={96} height={96}
                        className='lg:w-[96px] w-[56px] mb-1'
                    />
                    <motion.p
                        transition={{
                            repeatDelay: 3.08,
                            duration: 0.3,
                            delay: 5,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        TRX
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 2.08,
                            duration: 0.23, 
                            delay: 6,
                        }}
                        src={'/ltc.svg'} alt={'ltc'}
                        width={90} height={90}
                        className='lg:w-[90px] w-[56px] mb-1'
                    />
                    <motion.p 
                        transition={{
                            repeatDelay: 2.08,
                            duration: 0.3,
                            delay: 6,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        LTC
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 1.08,
                            duration: 0.23, 
                            delay: 7,
                        }}
                        src={'/usdc.svg'} alt={'usdc'}
                        width={96} height={96}
                        className='lg:w-[96px] w-[56px] mb-1'
                    />
                    <motion.p
                        transition={{
                            repeatDelay: 1.08,
                            duration: 0.3,
                            delay: 7,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        USDC
                    </motion.p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.img
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            repeatDelay: 0.08,
                            duration: 0.23, 
                            delay: 8,
                        }}
                        src={'/bnb.svg'} alt={'bnb'}
                        width={90} height={90}
                        className='lg:w-[90px] w-[56px] mb-1'
                    />
                    <motion.p 
                        transition={{
                            repeatDelay: 0.08,
                            duration: 0.3,
                            delay: 8,
                        }}
                        animate={{color: "#9B9C9D"}}
                        className='text-[#F7F9FB] dark:text-[#D1D1D2] hidden lg:block'
                    >
                        BNB
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Cryptocurrencies