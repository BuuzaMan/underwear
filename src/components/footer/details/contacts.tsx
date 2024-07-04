import React from 'react'
import PostLogo from './logotypes/postLogo';
import Telephone from './logotypes/call';


const Contacts: React.FC = () => {
  return (
    <div className='flex flex-row ml-[53px] gap-x-[26.5px] mt-[25px]'>
        <div className='flex items-center gap-x-[9.5px]'>
            <PostLogo />
            <a href="mailto: shop@ladys-fashion.ru" className='font-noto font-light text-[13px] leading-[1.138rem] tracking-[.016em] text-white uppercase'>shop@ladys-fashion.ru</a>
        </div>
        <div className='flex flex-row items-center gap-x-[9.74px]'>
            <Telephone />
            <a href="tel:+375 (29) 875-98-46" className='font-noto font-light text-[13px] leading-[1.138rem] tracking-[.016em] text-white uppercase'>+375 (29) 875-98-46</a>
        </div>
    </div>
  )
}

export default Contacts;