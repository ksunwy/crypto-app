import React from 'react';
import ClickToStart from './ClickToStart';
import Statistics from './Statistics';
import Send from './Send';
import Anonymous from './Anonymous';
import Exchange from './Exchange';
import Cryptocurrencies from './Cryptocurrencies';

const AnimationSection: React.FC = () => {
  return (
    <div className='text-black dark:text-white lg:py-6 max-w-[1200px] mx-auto'>
      <Cryptocurrencies />
      <div className="lg:flex lg:max-w-[1200px] gap-x-5">
        <div className="flex flex-col gap-y-5">
          <ClickToStart />
          <Exchange />
        </div>
        <Statistics />
      </div>
      <div className="lg:flex gap-x-5">
        <Send />
        <Anonymous />
      </div>
    </div>
  )
}

export default AnimationSection