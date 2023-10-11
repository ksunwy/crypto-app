import React from 'react';
import Image from 'next/image';
import TransButton from './ui/buttons/TransButton';

const Navbar: React.FC = () => {
    return (
        <nav className='flex items-center justify-center my-10 '>
            <div>
                <Image src={'/logo.svg'} alt={'logo'} width={64} height={64} className='mr-[99px]' />
            </div>
            <div>
                <ul className='hidden lg:flex gap-8 mx-[239px] text-[20px]'>
                    <li>Use cases</li>
                    <li>Features</li>
                    <li>How to start</li>
                </ul>
            </div>
            <div>
                <TransButton>Get Started</TransButton>
            </div>
        </nav>
    )
}

export default Navbar