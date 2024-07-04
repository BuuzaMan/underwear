"use client"
import React, { useState } from 'react'
import Minus from './minus';
import Plus from './plus';

const Counter: React.FC = () => {
    const [count, setCount] = useState(1);
    const step = 1;

    const increaseCount = () => {
        setCount(count + step);
      };    

    const decreaseCount = () => {
        if (count - step >= 1) {
            setCount(count - step);
        }
      };
  return (
    <div className='flex flex-row gap-x-[14px] items-center'>
        <button onClick={decreaseCount} className='w-[32px] h-[32px] rounded-[8px] bg-[#E5E1D7]'><Minus /></button>
        <div className='font-noto text-[18px] text-[#2F2F2F]'>{count}</div>
        <button onClick={increaseCount} className='w-[32px] h-[32px] rounded-[8px] bg-[#E5E1D7]'><Plus /></button>
    </div>
  )
}

export default Counter;