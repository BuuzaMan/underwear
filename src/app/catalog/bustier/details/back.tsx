import React from 'react'
import Arrow from './arrow';
import Link from 'next/link';

const BackSpace: React.FC = () => {
  return (
    <Link href="/catalog">
        <div className='flex items-center gap-x-[15px] mb-[20px]'>
          <Arrow />
          <p className='font-noto font-semibold text-[12px] leading-[1.4rem] tracking-[.03em] uppercase'>Назад</p>
        </div>
    </Link>
  )
}

export default BackSpace;