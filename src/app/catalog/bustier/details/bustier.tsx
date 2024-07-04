"use client"
import { getBustier } from '@/app/actions';
import React, { useState, useEffect } from 'react';
import Check from './check';
import Link from 'next/link';



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
}

interface ProdArray {
  metadata: IMetadata,
  record: IProduct[]
}


const BustierItems: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res: ProdArray  = await getBustier();
        const { record } = res;
        setProducts(record);   
      } catch (err) {
        setError('Ошибка при загрузке данных');
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flex grid grid-cols-4 gap-x-[40px] gap-y-[34px] mb-[40px]'>
      {products.map((product) => (
        <Link href={`/catalog/bustier/${product.id}`} key={product.id} className='w-[270px] h-[434px]'>
          <div className='w-[270px] h-[310px] '><img src={product.image[0]} alt={product.name} className="w-full h-full object-cover object-top"/></div>
          <h2 className='font-noto font-light text-[18px] text-[#2F2F2F] leading-[1.4rem] tracking-[.02em] uppercase mt-[14px]'>{product.name}</h2>
          <div className='flex flex-row items-center gap-x-[8px] mt-[12px]'>
            <p className='font-noto font-light text-[12px] text-[#6D6D6D] leading-[1.4rem] tracking-[.02em]'>{product.availability}</p>
            <Check />
          </div>
          <div className='flex flex-row w-[270px] h-[42px] items-center justify-between mt-[14px]'>
            <p className='font-noto font-medium text-[18px] text-[#2F2F2F] leading-[1.4rem] tracking-[.02em] '>{product.price}</p>
            <button className='w-[100px] h-[42px] bg-[#515040] rounded-[5px] text-white font-noto text-[12px] font-semibold leading-[1.05rem] tracking-[.023em]'>{product.button}</button>
          </div>
        </Link>
      ))}
      
    </div>
  );
};

export default BustierItems;