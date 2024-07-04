import React from 'react';
import Geologo from './logotypes/geologo';

const Geoposition: React.FC = () => {
  const coordinates = "geo:53.90874196343323,27.548196744806255";
  const address = "г. Минск, ул. Никольская, 2А";
  
  return (
    <div className='flex w-[170px] gap-x-[8px] ml-[53px] mt-[18px]'>
        <Geologo />
        <a 
            href={coordinates} 
            className='font-noto font-light text-[13px] leading-[1.138rem] tracking-[.016em] text-white uppercase'
            aria-label={`Местоположение: ${address}`}
        >
            {address}
        </a>
    </div>
  )
}

export default Geoposition;