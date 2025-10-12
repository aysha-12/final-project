import React from 'react';

const Hero = () => {
    return (
        <div className='relative'>
          <img src="/house.jpg" alt="house" className='h-96 w-full bg-cover' />


            <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white max-w-72 md:max-w-80 lg:max-w-102 leading-tight md:leading-14 md:text-left'>Freshness you can trust,Savings you will love!</h1>
                <div className='flex gap-5 items-center mt-6 font-medium'>
                    <button className='group flex items-center bg-[#183153] px-7 md:px-9 py-3  hover:bg-primary-dull  gap-2 transition rounded text-white cursor-pointer'>Shop now </button>

                    <button className='group md:flex items-center bg-[#183153] text-white  px-9 py-3 hidden   gap-2  cursor-pointer'>Explor deals </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;