import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className='flex-col bg-[#232328] pt-8 lg:pt-20 items-center max-h-[232px] text-white'>
      <div className="flex max-w-[1200px] lg:mx-auto items-center mb-6 lg:justify-start justify-between lg:m-0 mx-5">
        <div className="w-[163px]">
          <Image src={'/logo.svg'} alt={'logo'} width={64} height={64} />
        </div>
        <div className="">
          <ul className='hidden lg:flex gap-8 mx-[239px] text-lg text-white'>
            <li>Use cases</li>
            <li>Features</li>
            <li>How to start</li>
          </ul>
        </div>
        <div className="">
          <button className='items-center text-white text-xl bg-transparent w-[163px] lg:w-[193px] rounded-full
              h-[46px] lg:h-[60px] text-[13px] lg:text-lg border border-[#A5A5A5] hover:border-white transition'
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] flex lg:mx-auto pb-8 lg:pb-10 mt-6 ml-5">
        <p>©2023 Crypto Bot</p>
      </div>
    </div>
  )
}

export default Footer