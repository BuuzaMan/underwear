import React from 'react'
import SaleCards from './details/saleCards';
import Line2 from './details/Line 22';
import CatalogBtn from './details/catalogbtn';
import Link from 'next/link';

const Sale: React.FC = () => {
  return (
    <div className='flex gap-x-[70px] relative'>
       <img src='/images/6.png' alt='sale' className='w-[550px] h-[620px] z-10'/> 
       <div className='z-10'>
            <div className='flex items-center gap-x-[23px]'>
                <p className='font-noto font-light text-[34px] leading-[2.975rem] tracking-[.04em]'>SALE</p>
                <div><Line2 /></div>
            </div>
            <Link href="/catalog" className='flex items-center mt-[54px] justify-end'>
                <p className='font-noto font-light leading-[1.4rem] tracking-[.02em] text-[#515040]'>ПЕРЕЙТИ В КАТАЛОГ</p>
                <CatalogBtn />
            </Link>
            <div className='mt-[60px]'><SaleCards /></div>
       </div>
       <div className='absolute w-[993px] h-[593px] bg-[#F6F6F6] top-[160px] left-[207px] z-0' />
    </div>
  )
}

export default Sale;