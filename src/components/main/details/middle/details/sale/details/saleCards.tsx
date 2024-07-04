import React, { useState, useEffect } from 'react';
import { getData } from '@/app/actions';



interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  button: string;
}

interface Metadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

interface ProductResponse {
  record: Product[];
  metadata: Metadata;
}


const SaleCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res: ProductResponse  = await getData();
        setProducts(res.record);
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
    <div className='flex flex-row gap-x-[20px]'>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} className='border-[1px] border-[#B0A38A]' />
          <h2 className='font-noto font-light text-[18px] text-[#515040] leading-[1.575rem] tracking-[.023em] mt-[14px]'>{product.name}</h2>
          <div className='flex gap-x-[50px] mt-[8px]'>
            <p className='font-noto font-medium text-[18px] text-[#515040] leading-[1.575rem] tracking-[.023em]'>{product.price}</p>
            <p className='font-noto font-medium text-[18px] text-[#515040] leading-[1.575rem] tracking-[.023em]'><s>{product.oldPrice}</s></p>
          </div>
          <button className='w-[107px] h-[43px] bg-[#515040] rounded-[5px] text-white font-noto text-[12px] font-semibold leading-[1.05rem] tracking-[.023em] mt-[17px] mb-[161px]'>{product.button}</button>
        </div>
      ))}
      
    </div>
  );
};

export default SaleCards;