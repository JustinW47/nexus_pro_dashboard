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
        className={`from-[#ffffff] via-[#CBE6F3] to-[#128FC8] bg-gradient-to-r h-fit`}
      >
        <div
          className="flex flex-col w-full h-screen gap-10 pt-10 overflow-y-auto md:gap-16 sm:pt-24 lg:pt-32"
          style={{
            backgroundImage: 'url("assets/svg/pngwing 5.svg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'bottom',
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain'
          }}
        >
          <span className="flex items-center justify-center h-20 mt-0">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/Nexus Pro_Logo.png'}
              alt="wing"
              className="md:h-[80px] h-[50px]"
            />
          </span>
          <div className="fade-in-load bg-[#ffffff] rounded-2xl transition-all shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] flex flex-col py-10 px-10 w-[80%] 2xl:w-1/3 mx-auto justify-center items-center max-w-[600px] gap-7">
            <span className="text-4xl font-extrabold text-[#5F5F5F]">
              Login in to your account
            </span>
            <form
              method="post"
              onSubmit={handleSubmit}
              action={`${process.env.REACT_APP_BACKEND_URL}/api/auth/signin`}
              className="flex flex-col w-full gap-10"
            >
              <div className="flex flex-col w-full gap-3">
                <span className="text--[#128FC8] font-bold text-xl">
                  Enter Username Or Email
                </span>
                <input
                  className="inline-block py-6 outline-none bg-[#cccccc] rounded-xl text-[#5F5F5F] px-3 text-xl font-bold"
                  placeholder="Enter your username"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <span className="text--[#128FC8] font-bold text-xl">
                  Enter Password
                </span>
                <input
                  className="inline-block py-6 outline-none bg-[#cccccc] rounded-xl text-[#5F5F5F] px-3 text-xl font-bold"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full text-end">
                <span className="text-[#EA8A21] font-bold text-xl cursor-pointer hover:underline">
                  Forgot your password ?
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-5">
                <button
                  type="submit"
                  className={`inline-block font-bold rounded-lg px-11 py-4 text-lg uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 bg-[#ffffff] text-[#128FC8] shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] hover:shadow-[6px_5px_13px_0px_#0e6a94] w-full`}
                >
                  Login
                </button>
                <span>
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() => {
                      setSelectedPage('signup');
                    }}
                  >
                    Don’t have an account?
                  </span>
                </span>
              </div>
              <ThirdPartyAuth />
            </form>
          </div>
          <span className="flex flex-col w-full text-xl font-bold text-center text-[#5F5F5F]">
            <span>Copyright © 2013 - 2023 NexusPro Operations Limited.</span>
            <span>All rights reserved.</span>
          </span>
        </div>
      </div>
    );
}

export default Login;
