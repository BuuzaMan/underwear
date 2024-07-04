import Link from 'next/link';
import React from 'react'

const UpperBanner: React.FC = () => {
  return (
    <div className='flex relative w-[1440px] h-[774px]'>
        <img src='/images/upper.png' alt='mainPhoto' className='w-[1440px] h-[774px] absolute'/>
        <div className='absolute z-10 left-[740px] top-[238px]'>
          <p className='w-[600px] h-[106px] font-noto font-light text-[38px] text-zinc-800 w-[577px] h-[106px] leading-[3.325rem] tracking-[.02em]'>ПРИКОСНИСЬ К УНИКАЛЬНОМУ НИЖНЕМУ БЕЛЬЮ ДУШОЙ</p>
          <Link href="/catalog"><button className="w-[209px] h-[51px] mt-[40px] font-noto font-light text-[18px] text-[#515040] border-[2px] border-[#515040] rounded-[5px]">ПЕРЕЙТИ В КАТАЛОГ</button></Link>
        </div>
        <div className='h-[46px] w-[1440px] bg-[#CBCBCB]' />
    </div>
  )
}

export default UpperBanner;