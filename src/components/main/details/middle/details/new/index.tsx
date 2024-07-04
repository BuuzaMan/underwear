import { getColl } from '@/app/actions';
import React, { useState, useEffect } from 'react';


interface IMetadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

interface IProduct {
  id: number;
  image: string;
  name: string;
  price: string;
  button: string;
}

interface ProdArray {
  metadata: IMetadata,
  record: IProduct[]
}


const NewCollection: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res: ProdArray  = await getColl();
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
    <div className='flex flex-row gap-x-[39px] mt-[36px]'>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2 className='font-noto font-light text-[18px] text-[#2F2F2F] leading-[1rem] tracking-[.035em] mt-[18px]'>{product.name}</h2>
          <p className='font-noto font-medium text-[18px] text-[#2F2F2F] leading-[1.575rem] tracking-[.023em] mt-[7px]'>{product.price}</p>
          <button className='w-[107px] h-[43px] bg-[#515040] rounded-[5px] text-white font-noto text-[12px] font-semibold leading-[1.05rem] tracking-[.023em] mt-[11px] mb-[161px]'>{product.button}</button>
        </div>
      ))}
      
    </div>
  );
};

export default NewCollection;