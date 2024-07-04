"use client"
import { getItems } from '@/app/actions';
import React, { useState, useEffect } from 'react';

interface IMetadata {
  id: string;
  private: boolean;
  createdAt: string;
  name: string;
}

interface Items {
  id: number;
  name: string;
}

interface Record {
  items1?: Items[];
  items2?: Items[];
  items3?: Items[];
}

interface ProdArray {
  metadata: IMetadata;
  record: Record[];
}

const FooterItems: React.FC = () => {
  const [items1, setItems1] = useState<Items[]>([]);
  const [items2, setItems2] = useState<Items[]>([]);
  const [items3, setItems3] = useState<Items[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res: ProdArray = await getItems();
        const { record } = res;

        if (record.length > 0) {
          setItems1(record[0].items1 || []);
          setItems2(record[1].items2 || []);
          setItems3(record[2].items3 || []);
        }
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
    <div className='flex flex-row mt-[40px] gap-x-[100px] ml-[100px]'>
      <div className="flex flex-col gap-y-[10px] font-noto font-light text-[12px] leading-[1.05rem] text-[#F6F6F6] tracking-[0.015em] w-[109px]">
        <h2 className='font-noto font-normal text-[16px] text-white leading-[1.4rem] tracking-[.02em] mb-[20px]'>СЕРВИС</h2>
        {items1.map((item) => (
          <div key={item.id}>
            <button  className="text-left">
                {item.name}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-[10px] font-noto font-light text-[12px] leading-[1.05rem] text-[#F6F6F6] tracking-[0.015em]">
        <h3 className='font-noto font-normal text-[16px] text-white leading-[1.4rem] tracking-[.02em] mb-[20px]'>О КОМПАНИИ</h3>
        {items2.map((item) => (
          <button  className="text-left">
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-y-[10px] font-noto font-light text-[12px] leading-[1.05rem] text-[#F6F6F6] tracking-[0.015em] w-[165px]">
        <h4 className='font-noto font-normal text-[16px] text-white leading-[1.4rem] tracking-[.02em] mb-[20px]'>ПОМОЩЬ</h4>
        {items3.map((item) => (
          <button  className="text-left">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FooterItems;