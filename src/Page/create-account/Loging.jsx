import { useContext, useState } from 'react';             // ⭐ add this
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Component/ContextApi/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {


    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();


    const { loging, setUser, google, upDateUser } = useContext(AuthContext)
    const send = (data) => {

        loging(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                setUser(user)
                toast.success('Successfully login')
                reset()
                navigate('/');


            })
            .catch((error) => {
                console.log(error);

            });


    };

    return (
        <div className="flex justify-center items-center my-20">
            <div className="bg-white text-gray-500  max-w-[400px] w-full mx-4  md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login Here</h2>

                <form onSubmit={handleSubmit(send)}>
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email")}
                        id="email"
                        className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    {/* Password with Show/Hide */}
                    <label htmlFor="password" className="mt-4 block">Password</label>
                    <div className="relative mt-1">
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Minimum 8 characters" },
                                pattern: {
                                    value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                }
                            })}
                            id="password"
                            className="w-full border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 pr-10"
                            type={showPassword ? "text" : "password"}   // ⭐ toggle type
                            placeholder="Enter your Password"


                        />

                        {/* Eye icon button */}
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                // 👁️ Visible icon
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={2} stroke="currentColor"
                                    className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            ) : (
                                // 🙈 Hidden icon
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={2} stroke="currentColor"
                                    className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.967 9.967 0 012.457-4.056m2.491-1.94A9.959 9.959 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.307 5.451M3 3l18 18" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Submit */}
                    <input
                        type="submit"
                        value="Login"
                        className="w-full my-3 bg-[#122a4b] active:scale-95 transition py-2.5 rounded text-white"
                    />
                </form>

                {/* Google button */}
                <button onClick={() => { google() }}
                    type="button"
                    className="w-full my-3 bg-[#122a4b] active:scale-95 transition py-2.5 rounded text-white"
                >
                    Continue with Google
                </button>

                <p className="text-center mt-4">
                    Do not have an account?{' '}
                    <Link to="/signup" className="text-[#124899] underline font-bold">
                        Signup Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;