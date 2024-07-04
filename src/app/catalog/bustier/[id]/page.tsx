"use server"
import { getBustier } from '@/app/actions';
import { notFound } from 'next/navigation';
import React from 'react';
import Check from '../details/check';
import Cancel from './details/cancel';
import Link from 'next/link';
import Arrow from '../details/arrow';
import Counter from './details/counter';
import ProductDetails from './details/productDetails';
import ImageGallery from './details/gallery';


interface IMetadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

interface IProduct {
  id: number;
  image: string[];
  name: string;
  price: string;
  button: string;
  availability: string;
  country: string;
  contents: string;
  cup: string;
  clip: string;
  color: string[];
  size: string[];
  description: string;
}

interface ProdArray {
  metadata: IMetadata;
  record: IProduct[];
}

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  let product: IProduct | undefined;

  try {
    const res: ProdArray = await getBustier();
    product = res.record.find((prod) => prod.id === Number(id));
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }

  if (!product) {
    return notFound();
  }


  return (
    <div className='flex flex-col w-[1200px] mx-auto'>
      <Link href="/catalog/bustier"><Cancel /></Link>
        <div className='flex gap-x-[40px] justify-center'>
        <ImageGallery images={product.image} />
            <div className='flex flex-col font-noto w-[491px] h-[565px]'>
                <h2 className='font-light text-[34px] text-[#2F2F2F] leading-[1.4rem] tracking-[.02em] uppercase mt-[10px]'>{product.name}</h2>
                <div className='flex items-center text-[#2F2F2F] gap-x-[20px] mt-[40px]'>
                    <Check />
                    <p className='text-[16px] font-light leading-[1.4rem] tracking-[.02em]'>{product.availability}</p>
                </div>
                <p className='font-semibold text-[28px] leading-[1.4rem tracking-[.02em] mt-[18px]'>{product.price}</p>
                <div className='mt-[40px]'>
                  <p className='font-noto font-light text-[#2F2F2F] text-[16px] leading-[1.4rem tracking-[.02em]'>Размер</p>
                    <div className='flex flex-wrap gap-[12px] mt-[12px]'>
                      {product.size.map((size, index) => (
                        <button key={index} className='border rounded-[5px] w-[76px] h-[36px] rounded-[20px] border-[#B5B5B5] font-noto font-light text-[#2F2F2F] text-[16px] leading-[1.4rem tracking-[.02em]'>
                          {size}
                        </button>
                      ))}
                    </div>
                </div>
                <div className='mt-[18px]'>
                  <p className='font-noto font-light text-[#2F2F2F] text-[16px] leading-[1.4rem tracking-[.02em]'>Цвет</p>
                  <div className='flex flex-wrap gap-x-[12px] mt-[12px]'>
                    {product.color.map((color, index) => (
                      <button key={index} className='w-[46px] h-[46px] rounded-full border-[#00000] border-[1px]' style={{ backgroundColor: color }}></button>
                    ))}
                  </div>
                </div>
                <button className='flex items-center h-[22px] gap-x-[10px] mt-[40px]'>
                  <p className='font-noto font-light leading-[1.4rem] tracking-[.02em]'>Таблица размеров</p>
                  <div  className='rotate-180'><Arrow /></div>
                </button>
                <div className='flex gap-x-[60px] mt-[20px]'>
                  <Counter />
                  <button className='w-[134px] h-[48px] bg-[#515040] rounded-[8px] text-white font-noto font-semibold leading-[1.4rem] tracking-[.02em]'>{product.button}</button>
                </div>
                <div className='flex flex-row mt-[34px] gap-x-[49px]'>
                  <button className='underline underline-offset-4 font-noto font-light tracking-[.02em] text-[#515040]'>Способ оплаты</button>
                  <button className='underline underline-offset-4 font-noto font-light tracking-[.02em] text-[#515040]'>Доставка</button>
                </div>
            </div>
        </div>
        <ProductDetails details={product} />
    </div>
  );
}