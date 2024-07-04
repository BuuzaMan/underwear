import React from 'react'
import BackSpace from './details/back';
import BustierItems from './details/bustier';


const Bustier: React.FC = () => {
  return (
    <div className='flex flex-col w-[1200px] mx-auto'>
      <BackSpace />
      <p className='font-noto font-light text-[34px] leading-[1.4rem] tracking-[.019em] mb-[40px] text-center'>БЮСТЬЕ</p>
      <BustierItems />
    </div>
  )
}

export default Bustier;