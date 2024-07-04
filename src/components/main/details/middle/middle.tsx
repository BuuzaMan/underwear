import React from 'react'
import Line from './details/sale/details/line';
import Sale from './details/sale';
import NewCollection from './details/new';

const Middle: React.FC = () => {
  return (
    <div className='flex flex-col w-[1200px]'>
        <div className='flex flex-row items-center justify-center gap-x-[30px] mt-[129px]'>
            <Line />
            <p className='w-[314px] font-noto font-extralight text-[#2F2F2F] text-[34px] text-center'>Новая коллекция</p>
            <Line />
        </div>
        <p className='font-noto font-light text-[16px] text-[#515040] leading-[1.4rem] tracking-[.02em] mt-[70px]'>Кружевная коллекция Performance  — это про эстетичность, удобство и утонченность.</p>
        <NewCollection />
        <Sale />
    </div>
  )
}

export default Middle;