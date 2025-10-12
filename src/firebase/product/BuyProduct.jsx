import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Component/ContextApi/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const BuyProduct = () => {
    const { option, setOption, user } = useContext(AuthContext)
    const navigate = useNavigate()

    // const [product, setProduct] = useState([])
    const buy = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const number = form.number.value
        console.log(name, email, price, number);

        toast.success('Successfuly booked your product')

        navigate('/')
    }
    return (
        <div className=' px-5 md:px-8 lg:px-20 xl:px-32'>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-bold">{option.name}</h3>
                        <label htmlFor="my_modal_6" className="btn bg-[#205297] hover:bg-indigo-600 text-white">Close!</label>

                    </div>
                    <form action="" onSubmit={buy}>
                        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <input className="w-full outline-none bg-transparent py-2.5" type="text" name='name' defaultValue={user.displayName} placeholder="Enter your name" />
                        </div>
                        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <input className="w-full outline-none bg-transparent py-2.5" type="email" name='email' defaultValue={user.email} placeholder="Enter your Email" />
                        </div>
                        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <input className="w-full outline-none bg-transparent py-2.5" type="number" name='number' placeholder="phone number" />
                        </div>
                        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
                            <input className="w-full outline-none bg-transparent py-2.5" name='price' type="number" defaultValue={option.resalePrice} placeholder="ResalePrice" />
                        </div>
                        <button type='submit' className="w-full mb-3 bg-[#122a4b] hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">Booked</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyProduct;