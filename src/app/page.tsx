import AnimationSection from '@/components/AnimationSection';
import ApiBlock from '@/components/ApiBlock';
import CryptoCard from '@/components/CryptoCard';
import Join from '@/components/Join';
import Main from '@/components/Main';
import SwiperSection from '@/components/SwiperSection';

import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='rounded-ee-3xl'>
      <Main />
      <SwiperSection />
      <AnimationSection />
      <CryptoCard />
      <ApiBlock />
      <Join />
    </div>
  )
}

export default Home