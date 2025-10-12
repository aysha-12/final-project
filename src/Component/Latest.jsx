import React from 'react';

const Latest = () => {
    return (
        <div className='md:my-20 my-10'>
            <h1 className='text-3xl md:text-4xl  font-bold text-center px-6 md:px-16 lg:px-24 xl:px-32  text-[#183153]  leading-tight md:leading-14 '>Our Latest Collections</h1>
            <p className='text-xl font-bold text-center px-3 md:px-16 lg:px-24 xl:px-32  text-[#183153]  '>A visual collection of our most recent works - each piece crafted.</p>
            <div className=" flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="/public/Bookshelf.jpg"
                        alt="image" />
                </div>
                <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="../../public/bookshelf2.jpg"
                        alt="image" />
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="../../public/table4.jpg"
                        alt="image" />
                </div>
               
            </div>


        </div>
    );
};

export default Latest;