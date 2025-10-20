import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './ContextApi/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




const Navber = () => {

    
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handle = () => {
        logOut()
            .then(() => {

                toast.success('Sign-out successful.')

            }).catch((error) => {
                
            });
    }

    return (
        <nav className="flex items-center justify-between py-5 px-6 md:px-16 lg:px-20 border-b border-gray-300 bg-white relative transition-all">

            <Link to='/' >
                <img src="/logo.svg" alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden font-semibold sm:flex items-center gap-8">

                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/blog'>Blogs</Link>

                <div className="hidden lg:flex items-center text-sm gap-2 border  px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />

                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[#154588] w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {
                    user ? (<div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="profile-icon"
                                    src="/src/assets/profile_icon.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-white bg-[#154588] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='p-1.5 pl-3   cursor-pointer rounded-4xl'>{user.displayName}</li>
                            <li className='p-1.5 pl-3   cursor-pointer rounded-4xl'>{user.email}</li>

                            <li onClick={() => navigate('/my-orders')} className='p-1.5 pl-3   cursor-pointer rounded-4xl'>DashBoard</li>

                            <li onClick={handle} className='p-1.5 pl-3   cursor-pointer rounded-4xl'>Logout</li>
                        </ul>
                    </div>) : (<Link to='/signUp' className="cursor-pointer px-8 py-2    bg-[#154588]  transition text-white rounded-full">
                        SignUp
                    </Link>)
                }
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute z-10 top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden font-semibold `}>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/blog'>Blogs</Link>
                {
                    user ? (<div className="dropdown dropdown-start  ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="profile-icon"
                                    src="/src/assets/profile_icon.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  text-white bg-[#154588] rounded-box z-1 mt-3 w-52 p-2 shadow">


                            <li className='p-1.5 pl-3  cursor-pointer rounded-4xl'>{user.displayName}</li>
                            <li className='p-1.5 pl-3  cursor-pointer rounded-4xl'>{user?.email}</li>

                            <li onClick={() => navigate('/my-orders')} className='p-1.5 pl-3  cursor-pointer rounded-4xl'>DashBoard</li>
                            <li onClick={handle} className='p-1.5 pl-3   cursor-pointer rounded-4xl'>Logout</li>
                        </ul>
                    </div>) : (<Link to='/signup' className="cursor-pointer px-8 py-2 bg-[#154588] transition text-white rounded-full">
                        SignUp
                    </Link>)
                }
            </div>

        </nav>
    );
};

export default Navber;