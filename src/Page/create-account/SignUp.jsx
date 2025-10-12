import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';   // ⭐
import { AuthContext } from '../../Component/ContextApi/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/product'



  const [showPassword, setShowPassword] = useState(false); // ⭐
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  //  signUp
  const { createUser, setUser, google, upDateUser } = useContext(AuthContext)

  const Ragister = (data) => {

    google()
      .then(result => {
        const users = result.user
        upDateUser(data.name)
        console.log(users);

        setUser(users)

        toast.success('Successfully create an account')
        reset()
        navigate(from, { replace: true });

      })
      .catch((error) => {
        console.log(error);
      })



    createUser(data.email, data.password)

      .then(result => {
        const users = result.user
        setUser(users)

        toast.success('Successfully create an account')
        reset()

        navigate(from, { replace: true });

      })
      .catch((error) => {
        console.log(error);

      })




  };

  return (
    <div className="flex justify-center items-center md:my-20 my-10">
      <div className="bg-white text-gray-500 max-w-[400px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm shadow-[0px_0px_10px_0px] shadow-black">
        <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit(Ragister)}>
          {/* Username */}
          <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
            <input
              className="w-full outline-none bg-transparent py-2.5"
              type="text"
              placeholder="Username"
              {...register("name", { required: "Name is required", minLength: 3 })}
            />
          </div>

          {/* Email */}
          <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
            <input
              className="w-full outline-none bg-transparent py-2.5"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",

              })}
            />
          </div>

          {/* ⭐ Password with show/hide toggle */}
          <div className="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2 relative">
            <input
              className="w-full outline-none bg-transparent py-2.5 pr-10"
              type={showPassword ? "text" : "password"}  // ⭐ toggle type
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
                pattern: {
                  value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                }
              })}
            />
            {/* Eye Icon Button */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)} // ⭐ toggle state
              className="absolute right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                // 👁️ Open eye icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                // 🙈 Closed eye (slash) icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.967 9.967 0 012.457-4.056m2.491-1.94A9.959 9.959 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.307 5.451M3 3l18 18"
                  />
                </svg>
              )}
            </button>
          </div>

          <input
            type="submit"
            value="Create Account"
            className="w-full mb-3 bg-[#122a4b] hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
          />
        </form>

        <button onClick={() => { google() }}
          type="button"
          className="w-full mb-3 bg-[#122a4b] hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#124899] underline font-bold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
