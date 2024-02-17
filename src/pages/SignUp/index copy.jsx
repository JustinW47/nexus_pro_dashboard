import axios from 'axios';
import useToast from 'hooks/useToast';
import { useState } from 'react';
import ThirdPartyAuth from 'pages/ThirdPartyAuth';
import { useUserData } from 'UserDataContext';

function SignUp({ setSelectedPage, email, setemail }) {
  const { setUserData } = useUserData();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords don't match");
      showToast("Passwords don't match", 'error');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
        {
          email: formData.email,
          password: formData.password
        }
      );
      console.log('Signup successful:', response.data);
      localStorage.setItem('token', response.data?.token);
      setUserData(response.data?.user);
      showToast('Signup successful', 'success');
      setSelectedPage('login');
    } catch (error) {
      // Handle signup error
      console.error('Signup error:', error);
      showToast('Signup failed', 'error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Create NexusPro Account
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-10">
            {/* <div className="flex flex-col w-full gap-3">
              <span className="text--[#128FC8] font-bold text-xl">
                Enter Name
              </span>
              <input
                className="inline-block py-6 outline-none bg-[#cccccc] rounded-xl text-[#5F5F5F] px-3 text-xl font-bold"
                placeholder="Enter your name"
              />
            </div> */}
            <div className="flex flex-col w-full gap-3">
              <span className="text--[#128FC8] font-bold text-xl">
                Enter email
              </span>
              <input
                className="inline-block py-6 outline-none bg-[#cccccc] rounded-xl text-[#5F5F5F] px-3 text-xl font-bold"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* <div className="flex flex-col w-full gap-3">
              <span className="text--[#128FC8] font-bold text-xl">
                Enter Email
              </span>
              <input
                className="inline-block py-6 outline-none bg-[#cccccc] rounded-xl text-[#5F5F5F] px-3 text-xl font-bold"
                placeholder="Enter your email id"
              />
            </div> */}
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
            <div className="flex flex-col w-full gap-3">
              <span className="text--[#128FC8] font-bold text-xl">
                Confirm Password
              </span>
              <input
                className="inline-block py-6 outline-none bg-[#cccccc] rounded-xl text-[#5F5F5F] px-3 text-xl font-bold"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
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
                SignUp
              </button>
              <span>
                Already have an account?
                <span
                  className="text--[#128FC8] font-bold text-xl  pl-5 cursor-pointer hover:underline"
                  onClick={() => {
                    setSelectedPage('login');
                  }}
                >
                  Log In
                </span>
              </span>
            </div>
          </form>
          <ThirdPartyAuth />
        </div>
        <span className="flex flex-col w-full text-xl font-bold text-center text-[#5F5F5F]">
          <span>Copyright © 2013 - 2023 NexusPro Operations Limited.</span>
          <span>All rights reserved.</span>
        </span>
      </div>
    </div>
  );
}

export default SignUp;
