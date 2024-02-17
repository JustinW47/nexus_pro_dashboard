import { useUserData } from 'UserDataContext';
import axios from 'axios';
import useToast from 'hooks/useToast';
import ThirdPartyAuth from 'pages/ThirdPartyAuth';
import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loading-icons';

function Login({ setSelectedPage }) {
  const { userData, setUserData } = useUserData();
  const { showToast } = useToast();
  const [loading, setloading] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (userData !== null) setSelectedPage('dashboard');
    else {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  }, [setSelectedPage, userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`,
        {
          email: formData.email,
          password: formData.password
        }
      );
      console.log('Logged In successfully:', response.data);
      localStorage.setItem('token', response.data?.token);
      setUserData(response.data?.user);
      showToast('Logged In successfully', 'success');
      setSelectedPage('dashboard');
    } catch (error) {
      // Handle Logged In error
      console.error('LogIn error:', error);
      console.log('LogIn error:', error?.response?.data?.message);
      showToast(`LogIn failed: ${error?.response?.data?.message}`, 'error');
      setloading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading)
    return (
      <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-500 opacity-50">
        <TailSpin width={50} height="10rem" />
      </div>
    );
  else
    return (
      <div
        className={`from-[#ffffff] via-[#CBE6F3] to-[#128FC8] bg-gradient-to-r flex flex-1 h-fit`}
      >
        <div
          className="flex flex-col w-full h-screen gap-10 pt-10 overflow-y-auto md:gap-16 sm:pt-24 lg:pt-25"
          style={{
            backgroundImage: 'url("assets/svg/Mask_group.svg")',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
          }}
        >
          <span className="flex items-center justify-center h-10 mt-0">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Nexus Pro_Logo.png'}
              alt="wing"
              className="md:h-[80px] h-[50px]"
            />
          </span>
          <div className="fade-in-load bg-[#ffffff] rounded-2xl transition-all shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-10 w-[80%] 2xl:w-[70%] mx-auto justify-center items-center max-w-[550px] gap-7 mt-4">
            <span className="text-3xl font-extrabold text-[#5F5F5F]">
              Login in to your account
            </span>
            <form
              method="post"
              onSubmit={handleSubmit}
              action={`${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`}
              className="flex flex-col w-full gap-10"
            >
              <div className="flex flex-col w-full gap-3">
                <span className="text--[#128FC8] font-bold text-[18px]">
                  Enter Username Or Email
                </span>
                <input
                  className="inline-block py-4 border border-1 border-[#D9D9D9] bg-[#FFFFFF] rounded-xl text-[#5F5F5F] px-3 text-[15px] "
                  placeholder="Enter your username"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <span className="text--[#128FC8] font-bold text-[18px]">
                  Enter Password
                </span>
                <input
                  className="inline-block py-4 border border-1 border-[#D9D9D9] bg-[#FFFFFF] rounded-xl text-[#5F5F5F] px-3 text-[15px] "
                  type="password"
                  name="password"
                  placeholder='********'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full text-left mt-[-25px] px-2 ">
                <span className="text-[#0088CD] text-[15px] cursor-pointer hover:underline">
                  Forgot your password ?
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <button
                  type="submit"
                  className={`inline-block font-bold rounded-lg py-4 text-lg leading-normal transition duration-150 ease-in-out border-1 bg-[#0084C9] text-[#FFFFFF]  w-full`}
                >
                  Log In
                </button>
                <div className='flex flex-row gap-2'>
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => {
                      setSelectedPage('signup');
                    }}
                  >
                    Don’t have an account?
                  </span>
                  <span
                    className='text-[15px] text-[#0084C9] font-bold'
                  >
                    Sign Up
                  </span>
                </div>
              </div>
              <ThirdPartyAuth />
            </form>
          </div>
          {/* <span className="flex flex-col w-full text-xl font-bold text-center text-[#5F5F5F]">
            <span>Copyright © 2013 - 2023 NexusPro Operations Limited.</span>
            <span>All rights reserved.</span>
          </span> */}
        </div>
      </div>
    );
}

export default Login;
