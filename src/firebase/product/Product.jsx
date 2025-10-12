import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BuyProduct from './BuyProduct';
import { AuthContext } from '../../Component/ContextApi/AuthProvider';

const Product = () => {

    const { option, setOption } = useContext(AuthContext)


    const [product, setProduct] = useState([])
    useEffect(() => {

        fetch('https://e-commerce-61ag.vercel.app/AllProduct')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])





    return (
        <div className=' mt-10 px-5 md:px-8 lg:px-20 xl:px-32'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl md:text-4xl font-bold text-center px-6 md:px-16 lg:px-24 xl:px-32  text-[#183153]  leading-tight md:leading-14 '>All Product</h1>
                <div className="h-1 w-40 rounded bg-[#154588] "></div>
            </div>
            <p className='text-xl font-bold text-center px-3 md:px-16 lg:px-24 xl:px-32  text-[#183153]  leading-tight md:leading-10 '>Lorem ipsum dolor sit amet,</p>


            <div className='mt-10 grid  lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-10 mg:gap-5 '>
                {
                    product.map((data, i) => <div key={i} >
                        <div className="card bg-base-100 shadow-2xl">
                            <figure className="px-2 pt-3">
                                <img
                                    src={data?.img}
                                    alt="product"
                                    className="rounded-xl h-96 md:h-60 w-full" />
                            </figure>
                            <div className="card-body px-5 text-sm ">
                                <h2 className="card-title text-[#183153]">{data.name}</h2>
                                <p>**{data.description}</p>
                                <p>ResalePrice: {data.resalePrice}</p>
                                <p>OriginalPrice: {data.originalPrice}</p>
                                <p>PostedAt: {data.postedAt}</p>
                                <p>Year Of Use:{data.yearOfUse}</p>

                                <div className='flex items-center gap-3'> <div class="relative">
                                    <img class="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                                        alt="userImage1" />
                                    {
                                        data?.isActive ? <div class="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-green-500"></div> : <div class="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-gray-500"></div>
                                    }
                                </div> <div><span className='font-black text-[#26589e]'>{data.sellerName}</span>
                                        <p class="text-sm text-gray-800">SWE 2 @ Google</p></div></div>

                                <div className="card-actions">
                                    <label htmlFor="my_modal_6" onClick={() => { setOption(data) }} className="btn bg-[#26589e] px-10 text-white">Buy Now</label>
                                    <BuyProduct ></BuyProduct>

                                </div>


                            </div>


                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;