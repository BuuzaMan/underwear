import Link from 'next/link';
import React from 'react'

const Cat: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-[35px] mt-[47px] mb-[80px]">
    <div className="flex flex-row font-noto font-light text-[23px] gap-x-[40px]">
        <Link href="/catalog/bustier"><button className="w-[669px] h-[311px] bg-[#C2C1B1] uppercase">бюстье</button></Link>
        <button className="w-[491px] h-[311px] bg-[#BBC3B9] uppercase">трусы</button>
    </div>
    <div className="flex flex-row font-noto font-light text-[23px] gap-x-[40px]">
        <button className="w-[491px] h-[311px] bg-[#E5E1D7] uppercase">боди</button>
        <button className="w-[669px] h-[311px] bg-[#CBCBCB] uppercase">комплекты</button>
    </div>
    <div className="flex flex-row font-noto font-light text-[23px] gap-x-[40px]">
        <button className="w-[669px] h-[311px] bg-[#BBC3B9] uppercase">Одежда для сна</button>
        <button className="w-[491px] h-[311px] bg-[#B0A38A] uppercase">Майки</button>
    </div>
</div>
  )
}

export default Cat;