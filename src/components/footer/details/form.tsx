import React from 'react'
import Search from './logotypes/search';

const Form: React.FC = () => {
  return (
    <form className='flex flex-row relative mt-[39px] ml-[51px]'>
        <input  className='w-[373px] h-[59px] border-[1px] border-[#B0A38A] rounded-[100px] placeholder:text-[12px] placeholder:text-[#2F2F2F] placeholder:leading-[1.05rem] placeholder:tracking-[.015em] placeholder:font-noto placeholder:text-light pl-[20px] items-center'  placeholder="ПОИСК ПО САЙТУ"/>
        <button className='absolute left-[335px] top-[21.5px]'><Search /></button>
    </form>
  )
}

export default Form;