"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClickToStart = () => {
  return (
    <section 
        className='lg:py-[42px] lg:px-[56px] p-8 bg-[#F7F9FB] dark:bg-[#18181D] rounded-[40px]
        lg:w-[488px] w-[335px] flex flex-col mx-auto lg:mx-0'
    >
        <div className="flex flex-col items-center justify-center lg:mb-4 mb-6">
            <motion.button 
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    delay: 0.85,
                }}
                className='flex items-center cursor-default px-[39px] py-[18px] rounded-[17px] newBtn font-medium text-[20px] 
                leading-[26px] dark:text-white'
            >
                <Image src={'/tree.svg'} alt={'tree'} width={20} height={20} className='lg:mr-[5px] mr-1'/>
                Create App
            </motion.button>
            <motion.img 
                initial={{x: 144, y: -15}}
                animate={{x: [144, 93, 144], y: [-15, -20, -15]}}
                transition={{
                    duration: 2.06, 
                    ease: "easeInOut"
                }}
                src={'/mouse.svg'} 
                alt={'mouse'} 
                width={45} 
                height={45}
            />
        </div>

        <div className="">
            <h3 className='font-semibold lg:text-[42px] text-[28px] lg:leading-[46px] leading-[31px] tracking-tight lg:mb-5 mb-4'>
                One click to start
            </h3>
            <p className='lg:max-w-[370px] max-w-[271px] lg:text-xl text-lg lg:leading-6 leading-[22px] text-[#3F3F40] dark:text-[#D1D1D2]'>
                Opens 
                <span className='text-[#41A4DF]'> @CryptoBot</span>, 
                go to 
                <span className='text-[#41A4DF]'> Crypto Pay </span>
                and tap Create App to get API Token
            </p>
        </div>
    </section>
  )
}

export default ClickToStart