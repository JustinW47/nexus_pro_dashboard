import useToast from 'hooks/useToast';
import { useState } from 'react';
import ThirdPartyAuth from 'pages/ThirdPartyAuth';
import { useUserData } from 'UserDataContext';
import PhoneNumberInput from 'components/Input/PhoneNumberInput';
import axios from 'axios';

function TwoFactorAuth({ setSelectedPage }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    number: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/2fa`,
        {
          phoneNumber: formData.number
        }
      );
      setSelectedPage('pwd');
    } catch (error) {
      // Handle signup error
      console.error('Signup error:', error);
      showToast('Signup failed', 'error');
    }
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
          <div className="w-full text-base text-start ">
            <span
              className="font-semibold text-[#128FC8] cursor-pointer hover:opacity-70"
              onClick={() => {
                setSelectedPage('signup');
              }}
            >
              ← Back to Sign Up
            </span>
          </div>
          <span className="text-4xl font-extrabold text-[#5F5F5F]">
            Two Factor Authentication
          </span>

          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-10">
            <PhoneNumberInput
              label="Phone No."
              onChangeHandle={(v) => {
                setFormData({ number: v });
              }}
            />
            <div className="flex flex-col items-center justify-center w-full gap-5">
              <button
                type="submit"
                className={`inline-block font-bold rounded-lg px-11 py-4 text-lg uppercase leading-normal transition duration-150 ease-in-out border-[#128FC8] border-2 bg-[#ffffff] text-[#128FC8] shadow-[4px_3px_13px_0px_rgba(18,143,200,1)] hover:shadow-[6px_5px_13px_0px_#0e6a94] w-full`}
              >
                Send Code to Your Phone
              </button>
            </div>
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

export default TwoFactorAuth;
