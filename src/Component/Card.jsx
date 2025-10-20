import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {

        fetch('https://e-commerce-iota-ten-86.vercel.app/BestSeller')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    console.log(product)

    const [user, setuser] = useState(true)

    const handle = () => {

        setuser((prev) => !prev)
    }

    return (
        <div className=' md:mt-10 mt-5  '>
            <h1 className='text-3xl md:text-4xl font-bold text-center px-6 md:px-16 lg:px-24 xl:px-32  text-[#183153]  leading-tight md:leading-14 '>Best Sell</h1>
            <p className='text-xl font-bold text-center px-6 md:px-16 lg:px-24 xl:px-32  text-[#183153]  leading-tight md:leading-10 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            {
                user ? <div className='mt-10 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 '>

                    
                    {
                        product.slice(0, 3).map((data, i) => <div key={i} >
                            <div className="card  bg-base-100 shadow-2xl">
                                <figure className="px-2 pt-3">
                                    <img
                                        src={data?.img}
                                        alt="beds"
                                       className="rounded-xl h-96 md:h-60 w-full" />
                                </figure>
                                <div className="card-body text-sm items-center text-center">
                                    <h2 className="card-title text-[#183153]">{data.name}</h2>
                                    <p>ResalePrice: {data.resalePrice}</p>
                                    <p>PostedAt: {data.postedAt}</p>
                                    <div className='flex items-center gap-3'> <div className="relative">
                                        <img className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                                            alt="userImage1" />
                                        {
                                            data?.isActive ? <div className="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-green-500"></div> : <div className="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-gray-500"></div>
                                        }
                                    </div> <div><span className='font-black text-[#26589e]'>{data.sellerName}</span>
                                            <p className="text-sm text-gray-500">SWE 2 @ Google</p></div></div>
                                    <div className="card-actions">
                                        <Link to='/product' className="btn bg-[#26589e] text-white px-10 py-3">Buy Now</Link>
                                    </div>

                                </div>
                            </div>

                        </div>)
                    }
                </div> : <div className='mt-10 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 '>
                    {
                        product.map((data, i) => <div key={i} >
                            <div className="card bg-base-100 shadow-2xl">
                                <figure className="px-2 pt-3">
                                    <img
                                        src={data?.img}
                                        alt="beds"
                                       className="rounded-xl h-96 md:h-60 w-full" />
                                </figure>
                                <div className="card-body text-sm items-center text-center">
                                    <h2 className="card-title text-[#183153]">{data.name}</h2>
                                    <p>ResalePrice: {data.resalePrice}</p>
                                    <p>PostedAt: {data.postedAt}</p>
                                    <div className='flex items-center gap-3'> <div className="relative">
                                        <img className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                                            alt="userImage1" />
                                        {
                                            data?.isActive ? <div className="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-green-500"></div> : <div className="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-gray-500"></div>
                                        }
                                    </div> <div><span className='font-black text-[#26589e]'>{data.sellerName}</span>
                                            <p className="text-sm text-gray-500">SWE 2 @ Google</p></div></div>
                                    <div className="card-actions">
                                        <Link to='/product' className="btn bg-[#26589e] text-white py-3 px-10">Buy Now</Link>
                                    </div>

                                </div>
                            </div>

                        </div>)
                    }
                </div>
            }

            <div className='flex items-center justify-center py-10'>
                <button onClick={handle} className="btn bg-[#26589e] text-white px-10 py-4 text-xl">
                    {user ? "Show More" : "Show Less"}</button>
            </div>
        </div>
    );
};

export default Cart;