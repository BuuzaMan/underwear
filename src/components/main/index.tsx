"use client"
import React from 'react'
import UpperBanner from './details/upper/upper';
import Middle from './details/middle/middle';
import Bottom from './details/bottom';

const MainPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
       <UpperBanner />
       <Middle />
       <Bottom />
    </div>
  );
};

export default MainPage;