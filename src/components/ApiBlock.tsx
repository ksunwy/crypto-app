import React from 'react';

const ApiBlock: React.FC = () => {
    return (
        <div className='lg:my-[120px] my-20 max-w-[1200px] flex mx-auto relative apiBlock'>
            <h2
                className='absolute lg:top-[147px] top-[291px] lg:left-[80px] left-[32px] text-[32px]
            lg:text-[56px] font-semibold text-white lg:leading-[62px] leading-[35px] tracking-tight'
            >
                Crypto Pay API
            </h2>
            <p
                className='absolute lg:top-[241px] top-[350px] lg:left-[80px] left-[32px] lg:text-xl text-lg lg:leading-[24px] 
            leading-[22px] max-w-[380px] text-white'
            >
                Explore available methods and types and integrate them in any programming language.
            </p>
            <button
                className='absolute lg:top-[345px] top-[440px] lg:left-[80px] left-[32px] text-white text-lg bg-transparent 
            border border-[#A5CCFA] hover:border-white transition rounded-full lg:px-[42px] px-[70px] lg:py-[18px] py-3 '
            >
                Open API Docs
            </button>
        </div>
    )
}

export default ApiBlock