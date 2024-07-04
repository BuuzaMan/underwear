"use client"
import React, { useState } from 'react'

interface ProductDetailsProps {
    details: {
      description: string;
      country: string;
      contents: string;
      cup: string;
      clip: string;
    };
  }

const ProductDetails: React.FC<ProductDetailsProps> = ({ details }) => {
  const [ isActive, setIsActive ] = useState('specs') ;
  const renderContent = () => {
    if (isActive === 'specs') {
      return (
        <div className='w-full text-left mt-[40px] font-noto font-light text-[16px] leading-[1.4rem] tracking-[.02em] text-[#515040]'>
            <div className='flex gap-x-[279px] mb-[16px]'>
                <div>Описание:</div>
                <div className='ml-[70px]'>{details.description}</div>
            </div>
            <div className='w-full h-[1px] bg-[#E5E1D7]' />
            <div className='flex mt-[16px] mb-[16px]'>
                <div>Страна производитель:</div>
                <div className='ml-[248px]'>{details.country}</div>
            </div>
            <div className='w-full h-[1px] bg-[#E5E1D7]' />
            <div className='flex mt-[16px] mb-[16px]'>
                <div>Состав:</div>
                <div className='ml-[375px]'>{details.contents}</div>
            </div>
            <div className='w-full h-[1px] bg-[#E5E1D7]' />
            <div className='flex mt-[16px] mb-[16px]'>
                <div>Чашка:</div>
                <div className='ml-[375px]'>{details.cup}</div>
            </div>
            <div className='w-full h-[1px] bg-[#E5E1D7]' />
            <div className='flex mt-[16px] mb-[16px]'>
                <div>Вид застежки:</div>
                <div className='ml-[320px]'>{details.clip}</div>
            </div>
            <div className='w-full h-[1px] bg-[#E5E1D7]' />
        </div>
      );
    } else if (isActive === 'reviews') {
      return (
        <div className='mt-[40px] font-noto font-light text-[16px] leading-[1.4rem] tracking-[.02em] text-[#515040] mb-[340px]'>
          <p>Отзывов пока нет</p>
          <div className='w-full h-[1px] bg-[#E5E1D7]' />
        </div>
      );
    }
  };

  return (
    <div className='mt-[60px]'>
      <div className="flex gap-x-[60px] font-noto font-light text-[23px] text-[#2F2F2F] leading-[1.4rem] tracking-[.02em]">
        <button 
          className={` ${isActive === 'specs' ? 'underline underline-offset-4 decoration-1' : ''}`} 
          onClick={() => setIsActive('specs')}
        >
          ХАРАКТЕРИСТИКИ
        </button>
        <button 
          className={` ${isActive === 'reviews' ? 'underline underline-offset-4 decoration-1' : ''}`} 
          onClick={() => setIsActive('reviews')}
        >
          ОТЗЫВЫ
        </button>
      </div>
      <div className="mb-[80px]">
        {renderContent()}
      </div>
    </div>
  );
};


export default ProductDetails